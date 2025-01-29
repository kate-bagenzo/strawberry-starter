import { feedPlugin } from "@11ty/eleventy-plugin-rss";
import { EleventyHtmlBasePlugin } from "@11ty/eleventy";
import fs from 'fs';
import { jsonc } from "jsonc";

const config = jsonc.parse(fs.readFileSync('src/_data/config.jsonc', 'utf8'));

export default function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/assets/");
  eleventyConfig.addPassthroughCopy("src/social.png");
  eleventyConfig.addPassthroughCopy("src/favicon.ico");

  eleventyConfig.addDataExtension("jsonc", (contents) => {
		return jsonc.parse(contents);
	});

  eleventyConfig.addPlugin(EleventyHtmlBasePlugin);
  eleventyConfig.addPlugin(feedPlugin, {
		type: "atom",
		outputPath: "/feed.xml",
		collection: {
			name: "posts",
			limit: 100,
		},
    stylesheet: "assets/styles/rss.xsl",
		metadata: {
			language: config.siteLang,
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
      'en', { dateStyle: 'medium' }
    ).format(now);
  });

  eleventyConfig.addFilter("dateDMY", function(value) {
  const converted = new Intl.DateTimeFormat('en-GB', {
      dateStyle: "short",
    }).format(value);
  return converted;
  });

  eleventyConfig.addFilter("getLatestFive", function(value) {
    const converted = value.splice(0, 5);
    return converted;
    });

  return {
    dir: {
      input: "src",
      includes: "_includes",
      data: "_data",
      output: "_site"
    },
    pathPrefix: config.siteSubDir
  };
};