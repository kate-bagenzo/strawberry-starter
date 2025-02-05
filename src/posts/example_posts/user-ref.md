---
title: User Reference
date: 2025-01-02
---
This page explains how to do various things. You can find more step-by-step instructions in the installation guide, but here information is presented more simply for quick reference.

## How to use your blog
- **(Optional) Run the live preview server**
    - In a terminal that's navigated to the Strawberry Starter folder, type `npm run dev`.
    - Open a browser and go to `localhost:1234`.
    - You can now preview your changes live!
- **Adding or editing a blog post**
    - Navigate to `src/posts/` and make or edit a .md (markdown) file.
        - You can name .md files whatever, but keep in mind that the filename will be the URL to the post.
- **Building your changes**
    - In the terminal, stop the development server by pressing CTRL+C
    - Execute the command `npm run build`.
    - Your site is now built and ready for export in the `_site` folder!
        - OR, you can upload directly to Neocities with `npm run upload`! Requires some setup - see installation guide.

## Anatomy of Config.jsonc
- `siteName`
    - The name of your blog. Appears on the footer, the RSS feed, and the link preview (i.e. the little image when you link to a site on social media or discord, etc).
- `siteDescription`
    - A small description of your site. Appears on the link preview and RSS feed.
- `siteURL`
    - The public URL of your blog, e.g. (example.neocities.org) Needed for the link preview and RSS feed to function correctly.
- `siteAuthor`
    - Your name. Appears on the footer.
- `siteLang`
    - A two-letter code indicating what language your blog is in. Used internally for various things.
- `authorLink`
    - A link to your personal website or social media or etc. Appears on the footer. You can leave this blank if you prefer.
- `authorContact`
    - Your email. Appears on the footer. You can leave this blank if you prefer.
- `siteStyle`
    - The theme used by your blog. Themes are in located `src/assets/styles/themes/`. You can use (or edit) one of the premade themes, or create your own if you know CSS.
- `siteSubDir`
    - Set this only if you want to upload your blog to a subdirectory.
    - e.g. - set this to `/blog/` if your site will be at `example.org/blog/` instead of `example.org`.
    - This setting will change all the links on your blog to work with your new subdirectory.
        - e.g. When linking images in posts, you can just do `/assets/images/example.jpg`, instead of `/blog/assets/images/bowl_of_berries.jpg`
    - **⚠️ Warning**: If you're uploading to Neocities and already have a homepage with content in it, BE SURE TO SET THIS!
        - Uploading to Neocities will OVERWRITE content like your `index.html` !

## Commands
- `npm install`
    - This installs dependencies that your blog needs to function.
    - You only need to run this once, to create the `node_modules` folder.
        - If that folder is deleted (e.g. you got rid of it to back up your blog somewhere) you'll need to run this command again to build or use the dev server.
- `npm run dev`
    - This command starts a development server at [localhost:1234](localhost:1234).
    - It live updates with any changes you make, so it's good to run this while writing to see a preview of your blog.
- `npm run build`
    - This command outputs your blog's files to the `_site/` folder.
- `npm run upload`
    - This command will build your site (as if you had typed `npm run build`), and then upload your site directly to Neocities.
    - However, it won't work out of the box. Check the [installation guide](/posts/example_posts/installation) and the `.env` file for more info.

### Detailed Folder Layout Reference
Here's an overview of the folders and files in Strawberry Starter. You can ignore most of these and have a perfectly functional blog, but if you're curious and/or brave:
- `_functions/`
    - Contains various scripts run by Node during the site's build and install.
- `_site/`
    - Destination folder for your finished site after running `npm run build` or `npm run upload`.
- `node_modules/`
    - Contains various Node packages and dependencies.
- `src/`
    - `_data/`
        - `config.jsonc`
            - Contains various variables used throughout your blog.
    - `_includes/`
        - Contains HTML files that create the layout of your blog.
        - These files also use Liquid, a templating language.
    - `assets/`
        - An assorted folder for storing things like images or scripts or styles. Anything placed in this folder will automatically be copied over to `_site/` when you run the `build` or `upload` command.
    - `info/`
        - Contains pages that will appear on the navbar at the top of your blog. By default, you have two: `all_posts` and `about`.
        - If you want to add a new navbar section to your blog, add a .md file here.
    - `posts/`
        - Contains blog posts.
        - If you want to add a new blog post, add a .md file here.
    - `index.md`
        - This is the homepage of your blog.
- `social.png`
    - This image appears in the preview card used when linking to your blog on social media.
- `.env`
    - This is a template explaining what a proper `.env.local` file should look like.
- `.env.local`
    * This file isn't created by default (for security reasons).
    * Putting your Neocities API key here is necessary for `npm run upload` to work.
- `.gitignore`
    * Files ignored by git. If you know how to use git, then this is useful to you. If not, don't worry about it.
- `eleventy.config.js`
    * Config file for 11ty.
- `package.json`
    * Config file for Node.
- `README.md`
    * A very simple explanation of how to use your blog.
    - This also contains a changelog detailing bug fixes/changes.
        - You can see what version you're on by checking `package.json`.

Since you looked, if you're **really** curious... why not go to [the 11ty homepage](https://www.11ty.dev/) and learn even more about how it works? This template is pretty basic and only scratches the surface. A warning, though - if you want to do something really complicated, you're probably better off starting from scratch!

## Node
Strawberry Starter was made with Node version # `20.18.1`. Running on lower versions may cause bugs.  
You can see your Node version by typing `node -v` into a command line.