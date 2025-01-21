export default function (eleventyConfig) {
	eleventyConfig.addPassthroughCopy("src/assets/");
    eleventyConfig.addPassthroughCopy("src/style.css");
    eleventyConfig.addPassthroughCopy("src/normalize.css");
    eleventyConfig.addPassthroughCopy("src/favicon.ico");

    eleventyConfig.addGlobalData('lastUpdate', () => {
        let now = new Date();
        return new Intl.DateTimeFormat(
          'en-US', { dateStyle: 'medium' }
        ).format(now);
      });

    eleventyConfig.addFilter("dateDMY", function(value) {
        const converted = new Intl.DateTimeFormat('en-GB', {
            dateStyle: "short"
          }).format(value);
        return converted;
    });

    eleventyConfig.addFilter("dateMY", function(value) {
        const converted = new Intl.DateTimeFormat('en-GB', {
            month: 'numeric',
            year: '2-digit'
          }).format(value);
        return converted;
    });

    return {
        dir: {
            input: "src",
            includes: "_includes",
            data: "_data",
            output: "_site"
        }
    };

};