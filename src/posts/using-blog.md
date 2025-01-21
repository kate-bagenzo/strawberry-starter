---
title: Using your new blog
date: 2025-01-02
---
So, you've just come from the installation guide (hopefully) and are wondering how to get started blogging.
The most basic workflow is this:
- **(Optional) Run the live preview server**
    - In a terminal that's navigated to the Strawberry Starter folder, type `npm run dev`.
    - Open a browser and go to `localhost:1234`.
- **Adding or editing a blog post**
    - Navigate to `src/posts/` and make or edit a .md (markdown) file.
        - You can name .md files whatever, but keep in mind that the filename will be the URL to the post.

## Commands
There are three terminal commands you'll use in the Strawberry Starter folder:
- `npm run dev`
    - This command starts a development server at [localhost:1234](localhost:1234).
    - It live updates with any changes you make, so it's good to run this while writing to see a preview of what you'll upload.
- `npm run build`
    - This command outputs your blog's files to `_site/`, at the top level of Strawberry Starter's folder.
    - The contents of this folder are ready to upload to a hosting service!
- `npm run upload`
    - This command will build your site (as if you had typed `npm run build`), and then upload your site directly to Neocities!
    - However, it won't work out of the box. First:
        - Go to the [Neocities settings page](https://neocities.org/settings).
        - Select "Manage site settings", then "API".
        - Copy your API key.
            - If this is your first time on this page, you'll need to generate the key first.
        - Create a file named `.env` at the top level of Strawberry Starter's folder.
            - This means inside the folder, but NOT inside src/
        - Write `NEOCITIES="ABCD1234"` into the folder.
            - Replace `ABCD1234` with your actual API key.
    - Uploading should work after that.

## Detailed Folder Layout Reference
Here's an overview of the folders and files in Strawberry Starter. You can ignore most of these and have a perfectly functional blog, but it's here for the curious and the brave.
- _functions/
    - Contains various scripts run by Node during the site's build.
- _site/
    - Destination folder for your finished site after running `npm run build` or `npm run upload`.
- node_modules/
    - Contains various node packages.
- src/
    - _data/
        - config.json
            - Contains various variables used throughout your blog.
    - _includes/
        - Contains HTML files that create the layout of your blog.
    - assets/
        * An assorted folder for storing things like images or scripts or styles. Anything placed in this folder will automatically be copied over to `_site/` when you run the `build` command.
    - pages/
        * Contains pages that will appear on the navbar at the top of your blog. By default, you have two: `all_posts` and `about`.
        * If you want to add a new navbar section to your blog, add a .md file here. (It can be in a folder, if you wish).
    - posts/
        * Contains blog posts.
        * If you want to add a new blog post, add a .md file here.
- .env
    * This file isn't created by default (for security reasons).
    * Putting your Neocities API key here is necessary for `npm run upload` to work.
- .gitignore
    * Files ignored by git. If you know how to use git, then this is useful to you. If not, don't worry about it.
- eleventy.config.js
    * Config file for 11ty.
