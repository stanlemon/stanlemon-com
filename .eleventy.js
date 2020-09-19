module.exports = (eleventyConfig) => {
    eleventyConfig.addPassthroughCopy("assets");

    eleventyConfig.addCollection('posts', collection => {
        return collection.getFilteredByGlob('_posts/*.md');
    });

    return {
        dir: {
            input: "./",      // Equivalent to Jekyll's source property
            output: "./_site" // Equivalent to Jekyll's destination property
        }
    };
};
