import { feedPlugin } from "@11ty/eleventy-plugin-rss";
import fs from 'fs';

const config = JSON.parse(fs.readFileSync('src/_data/config.json', 'utf8'));

export default function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/assets/");
  eleventyConfig.addPassthroughCopy("src/social.png");
  eleventyConfig.addPassthroughCopy("src/favicon.ico");

  eleventyConfig.addPlugin(feedPlugin, {
		type: "atom",
		outputPath: "/feed.xml",
		collection: {
			name: "posts",
			limit: 100,
		},
		metadata: {
			language: "en",
			title: config.siteName,
			subtitle: config.siteDescription,
			base: config.siteURL,
			author: {
				name: config.siteAuthor,
				email: config.authorContact,
			}
		}
	});

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