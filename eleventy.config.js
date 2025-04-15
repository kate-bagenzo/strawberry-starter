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

  eleventyConfig.addGlobalData("layout", "layout.html");

  // LAST UPDATE FORMAT
  eleventyConfig.addGlobalData('lastUpdate', () => {
    let now = new Date().toUTCString();
    const day = now.slice(5,7);
    const month = now.slice(8,11);
    const year = now.slice(12, 16);
    const DMY = `${day} ${month} ${year}`;
    const MDY = `${month} ${day}, ${year}`;
    const YMD = `${year} ${month} ${day}`;
    return MDY;
  });

  // DATE FORMAT
  eleventyConfig.addFilter("dateFormat", function(value) {
    const temp = value.toISOString();
    const day = temp.slice(8,10);
    const month = temp.slice(5,7);
    const year = temp.slice(0,4);
    const DMY = `${day}/${month}/${year}`;
    const MDY = `${month}/${day}/${year}`;
    const YMD = `${year}/${month}/${day}`;
    const YDM = `${year}/${day}/${month}`;
    return DMY;
  });

  eleventyConfig.addFilter("getLatestFive", function(value) {
    const converted = value.slice(0, 5);
    return converted;
  });

  eleventyConfig.addFilter("filterTags", function(value) {
    let newTags = [];
    let anyTags = false;
    for (let i in value) {
      if (i != 'posts' && i != 'navbar' && i != 'all') {
        newTags.push(i);
        anyTags = true;
      }
    }
    if (anyTags) {
      return newTags.sort();
    } else {
      return false;
    }

  });

  eleventyConfig.addFilter("cleanPages", function(value) {
    const clean = [];
    for (let i = 0; i < value.length; i++) {
      value[i].data.title && clean.push(value[i]);
    }
    return clean;
  });

  eleventyConfig.addFilter("forceReverse", function(value) {
    return value.toReversed();
  });

  eleventyConfig.addFilter("debug", function(value) {
    console.log(value);
    return value;
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