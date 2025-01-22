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

## Anatomy of Config.json
- `siteName`
    - The name of your site. Appears on the footer & the link preview (e.g. the little image when you link to a site on social media or discord, etc).
- `siteDescription`
    - A small description of your site. Appears on the link preview.
- `siteAuthor`
    - Your name. Appears on the footer.
- `siteURL`
    - The public URL where people can visit your blog. Needed for the link preview and RSS feed to function correctly.
- `authorLink`
    - A link to your personal website or social media or etc. Appears on the footer. You can leave this blank if you prefer.
- `authorContact`
    - A link to your email. Appears on the footer. You can leave this blank if you prefer.
- `siteStyle`
    - The theme used by your blog. Themes are in `src/assets/styles/`. You can use one of the premade themes, or create your own if you know CSS.
- `neoCitiesSubdirectory`
    - An optional subdirectory to upload your blog to when using `npm run upload`.
        - For example: if this is set to `blog`, your site will be uploaded to `example.neocities.org/blog/` instead of `example.neocities.org`.

## Commands
- `npm i`
    - This installs dependencies that your blog needs to function.
    - You only need to run this once.
- `npm run dev`
    - This command starts a development server at [localhost:1234](localhost:1234).
    - It live updates with any changes you make, so it's good to run this while writing to see a preview of your blog.
- `npm run build`
    - This command outputs your blog's files to the `_site/` folder.
- `npm run upload`
    - This command will build your site (as if you had typed `npm run build`), and then upload your site directly to Neocities.
    - However, it won't work out of the box. First:
        1. Go to the [Neocities settings page](https://neocities.org/settings).
        2. Select "Manage site settings", then "API".
        3. Copy your API key.
            - If this is your first time on this page, you'll need to generate the key first.
        4. Create a file named `.env` at the top level of Strawberry Starter's folder.
            - This means inside the folder, NOT inside `src/`
        5. Write `NEOCITIES="ABCD1234"` into the `.env` file.
            - Replace `ABCD1234` with your actual API key.

### Detailed Folder Layout Reference
Here's an overview of the folders and files in Strawberry Starter. You can ignore most of these and have a perfectly functional blog, but if you're curious and/or brave:
- `_functions/`
    - Contains various scripts run by Node during the site's build.
- `_site/`
    - Destination folder for your finished site after running `npm run build` or `npm run upload`.
- `node_modules/`
    - Contains various node packages and dependencies.
- `src/`
    - `_data/`
        - `config.json`
            - Contains various variables used throughout your blog.
    - `_includes/`
        - Contains HTML files that create the layout of your blog.
        - These files also use Liquid, a templating language.
    - `assets/`
        - An assorted folder for storing things like images or scripts or styles. Anything placed in this folder will automatically be copied over to `_site/` when you run the `build` or `upload` command.
    - `navbar/`
        - Contains pages that will appear on the navbar at the top of your blog. By default, you have two: `all_posts` and `about`.
        - If you want to add a new navbar section to your blog, add a .md file here.
    - `posts/`
        - Contains blog posts.
        - If you want to add a new blog post, add a .md file here.
    - `index.md`
        - This is the homepage of your blog.
- `.env`
    * This file isn't created by default (for security reasons).
    * Putting your Neocities API key here is necessary for `npm run upload` to work.
- `.gitignore`
    * Files ignored by git. If you know how to use git, then this is useful to you. If not, don't worry about it.
- `eleventy.config.js`
    * Config file for 11ty.
- `package.json`
    * Config file for Node.