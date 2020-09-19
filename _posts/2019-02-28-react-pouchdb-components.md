---
layout: post
title: React PouchDB Components
date: 2019-02-28T21:47-05:00
categories:
  - Developer
permalink: /2019/02/28/react-pouchdb-components/
---

Last night I released a new library to [GitHub](https://github.com/stanlemon/react-pouchdb) and [npm](https://www.npmjs.com/package/@stanlemon/react-pouchdb) called React PouchDB components. I'm excited to share this library, which started as an experiment to illustrate to my friend [Jon](http://jonkohlmeier.net) how easy it could be to leverage [PouchDB](http://pouchdb.com) in [React](https://reactjs.org). After enough tooling around I suspected that the pieces could be extracted and shared more broadly.

There are a number of different ways to deal with state in React, everything from the simple [`setState()`](https://reactjs.org/docs/state-and-lifecycle.html) to [redux](http://redux.js.org). Most sites need remote data, and so as a developer your options become a little more complex, leveraging promises inside of `componentDidMount()` or tools like [redux-thunk](https://www.github.com/reduxjs/redux-thunk). These are all great, but what I wanted was a simple way to fetch data into PouchDB and for it to be declarative.

Here's what I imagined...

```jsx
import { Database, Document } from "@stanlemon/react-pouchdb";

function App() {
  return (
    <Database>
      <Document name="my-document">
        <MyComponent />
      </Document>
    </Database>
  );
}

function MyComponent({ name, description }) {
  return (
    <div>
      <h1>{name}</h1>
      <p>{description}</p>
    </div>
  )
}
```

There are two components here, the first `<MyComponent />` is a simple view, it renders some properties that are passed to it.  The other is `<App />` which declaratively establishes a PouchDB database connection using the `<Database />` component.  *This component can take an optional name and remote URL for syncing.* The `<App />` component also uses the `<Document />` component which is responsible for fetching data out of a PouchDB document and setting it as properties on `<MyComponent />`.

One of the other advantages of the `<Document />` component is that it provides a property to it's children called `putDocument()` that allows you to update the state of your document, just as you might when using `setState()`. This method eagerly updates the component's properties, and then ensures that the document is updated in PouchDB.

As an added bonus, if you're syncing your PouchDB database to a remote [CouchDB](https://docs.couchdb.org) instance, the `<Document />` component will update properties when change events occur. This means that you can sync down remote updates with little effort in near real time.

**There is a working example in the GitHub repository under the `./example/` directory. It has it's own `README` and is really easy to spin up and start playing.** [You can check out the example app over on glitch.](https://stanlemon-react-pouchdb.glitch.me) This example app showcases several different ways to leverage a document including `<Document />` and a higher order function `withDocument()`.

Ready to give it a spin?

```shell
npm install --save @stanlemon/react-pouchdb pouchdb
```

From there the [`README`](https://github.com/stanlemon/react-pouchdb/blob/master/README.md) is your friend!

This library is intended to quickly get a PouchDB database into your react application. It won't work for every situation and there are definitely more complicated use cases that it does not cover, but as a starting point it should get you off the ground quickly.  It's also worth noting that this library is not intended to work with other state container libraries.  Maybe it does, but that'll be purely by chance.  If you are using something like redux you should consider taking a look at [redux-pouchdb](https://github.com/vicentedealencar/redux-pouchdb).

Please reach out with feedback!  I love questions and suggestions so send them my way.

*Stay tuned, I have some more PouchDB related goodies coming.*
