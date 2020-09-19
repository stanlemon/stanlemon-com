---
layout: post
title: React, Relay & Mutations
date: 2019-01-23T07:30-05:00
categories:
  - Developer
permalink: /2019/01/23/react-relay-and-mutations/
---

A working example of what I'm going to describe here can be found at https://github.com/stanlemon/example-relay-app.

--------

For awhile [GraphQL](https://graphql.org) has looked interesting to me, like something I wanted to learn. I love the concept of strongly typing expressive queries that can be batched into a single request. That's GraphQL, a technology that really seems to shine in UI work for single page apps (SPAs).

[Relay](https://facebook.github.io/relay/) is Facebook's GraphQL framework for [React](https://reactjs.org), it's really where GraphQL got its traction from. I love React and spend a good portion of my _hobby time_ building stuff with it, so GraphQL was a natural progression for me.  The problem is that documentation and examples on how to use Relay are all over the place and it's even harder to get into if don't already have a working GraphQL server. _Some might point out that [Apollo](https://www.apollographql.com/) is a much easier place to start with React & GraphQL and that definitely seems true, but I specifically wanted to familiarize myself with Relay._

My first challenge was a working GraphQL server that I could issue queries against. Fortunately [PostGraphile](https://www.graphile.org/postgraphile/)] makes this super easy. You need a [Postgres](http://postgresql.org) instance to get going, but after that you have a working GraphQL server over top of a Postgres database. I won't go into how to setup PostGraphile, it's documentation is actually rather than good and there are some additional environment notes in the repository with my example code.

Querying from within Relay is pretty easy and straightforward and the documentation that Facebook offers is adequate. [If you want to play around with querying check out this GraphQL playground with Star Wars data, it's pretty fantastic!](https://www.graphqlbin.com/v2/KZ4Efq) GraphQL is not just for fetching data though, it also allows you to create, update and delete it. Those operations are called mutations and their documentation is a lot less clear.

A mutation in and of itself is not complicated, there are really two parts to it: (1) the mutation definition and then (2) committing the mutation to the GraphQL server.  That looks like this:

```javascript
import { graphql, commitMutation } from 'react-relay'

const mutation = graphql`
  mutation AppCreatePersonMutation($input: CreatePersonInput!) {
    createPerson(input: $input) {
      person {
        id
        firstName
        lastName
      }
    }
  }
`

commitMutation(environment, {
  mutation,
  variables: {
    input: {
      person: {
        firstName: "Stan",
        lastName: "Lemon"
      }
    }
  }
})
```

In the app I built I had already loaded all of the person records from my database using a query like this:

```javascript
query AppQuery {
  allPeople {
    nodes {
      id
      firstName
      lastName
    }
  }
}
```

When I first got this working I naively expected the properties in the react component that came from this query to update, such that my new person would appear in my list.  But alas it did not! Updating the state store for relay is not straight forward. The [mutation documentation on relay's site](https://facebook.github.io/relay/docs/en/mutations.html) has some clues, but I ended up struggling to implement what I thought was a pretty straight forward user case: _updating the list of nodes from my initial query with a new record_.

Make sure your `createPerson()` mutation is returning the same fields as your `allPeople` query, and also make sure that `allPeople` is returning `id`. Matching fields in the response is important for new records. If you're only doing updates you can get away with returning just the fields you've changed, but the example below does not cover partial updates.  The `id` field is not actually required for create mutations like this, but as soon as you start working with updates you'll thank me as the the global graphql id is the easiest way to yank an existing record out of the store.

What we need to do now is define an `updater` function on that the second parameter to `commitMutation()`.  This updater receives a single parameter, the `store` and this is where we will do our handy work.

Inside the updater function the first thing we want to do is get the portion of the store where `allPeople` is at, because this is what we need to modify.  We need to put our new person into the list of person records in that part of the store, which will in turn trigger the update to our UI. This is actually pretty easy to do as long as you know the key to pass the `get()` method. I found this out using the `replay-devtools`, which I highly recommend installing.

```javascript
const allPeople = store.get('client:root');
```

Now we have the container of the query. Because we're using PostGraphile everything is nested under `nodes` so we actually need to yank that out from under our `allPeople` variable. That looks like this:

```javascript
const nodes = allPeople.getLinkedRecord('allPeople').getLinkedRecords('nodes');
```

We also need to get the person record that our GraphQL server returned to us and then yank the payload from it.  The payload in this case is that new person we created.

```javascript
const payload = store.getRootField('createPerson');
const newPerson = payload.getLinkedRecord('person');
```

We have the original list of persons and the new person we added, now we need to combine them, this is really easy using the spread operation:

```javascript
const newNodes = [...nodes, newPerson];
```

Now we have the full list of person objects as they exist in our database. Keep in mind if you were sorting these somehow with graphql you will need to insert the newPerson into the proper place, not just blindly at the end like we are doing.   Lastly we take that new nodes list and replace it in our `allPeople` portion of the store like so:

```javascript
allPeople.getLinkedRecord('allPeople').setLinkedRecords(newNodes, 'nodes');
```

Once this is done the local store in your react component will re-render with the new data.

Keep in mind, this is a root level scenario for the component in question.  It seems pretty simple, but good luck finding an example that works like this one. If you're using data nested under another object (like comments on a post) than there are plenty of examples on the web more suited to that scenario, examples that involve things like the `ConnectionHandler`.

You can find all the code for my working example over at https://github.com/stanlemon/example-relay-app
