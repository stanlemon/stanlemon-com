const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

module.exports = (eleventyConfig) => {
    eleventyConfig.addPlugin(syntaxHighlight);

    eleventyConfig.addPassthroughCopy("assets");

    eleventyConfig.addCollection('posts', collection => {
        return collection.getFilteredByGlob('_posts/*.md');
    });

    eleventyConfig.setFrontMatterParsingOptions({
        excerpt: true,
        excerpt_separator: "<!-- excerpt -->"
    });

    return {
        dir: {
            input: "./",      // Equivalent to Jekyll's source property
            output: "./_site" // Equivalent to Jekyll's destination property
        }
    };
};
