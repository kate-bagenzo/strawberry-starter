---
title: Installation Guide
date: 2025-01-01
---
Here's how to get started with your new blog:
1. **Download & Unzip Strawberry Starter**.
    - You can grab it from itch.io or github.
    - Unzip it wherever - you can move the folder around later without issues, so don't worry.
2. **Download & Install Node**.
    - Node is a javascript runtime that lets you create things for the web.
    - Grab it from the [node website](https://nodejs.org/en).
3. **Open a Command Line in Strawberry Starter's folder**
    - On Windows: I recommend you use Powershell.
    - macOS & Linux: These systems have a builtin terminal.
4. **Execute the command: `npm i`**
    - If you don't see any errors, then congrats! You can now blog to your heart's content.

You only need to run `npm i` once to setup your blog. Now you're ready to start posting!

## Starting the development server
Strawberry Starter has a live server you can run to preview your changes as you make them. It's super convenient!  
Start the server with the command `npm run dev`. Now, open [`localhost:1234`](localhost:1234/) in your browser.  
This is a preview of what your blog looks like, and it'll update automatically (no refreshes required)!

## Renaming & customizing your blog
Go to the `src` folder. This is where your blog's files live.  
There's a lot of stuff here, but you don't need to worry about most it! For now, let's go to `_data` and open the file named `config.json`.  
This file has information that appears in a few places in your blog. Right now it's all defaults so you should replace that data with your own!
- `siteName`
    - The name of your site. Appears on the footer & the link preview (i.e. the little image when you link to a site on social media or discord, etc).
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
    - The theme used by your blog. Themes are in located `src/assets/styles/themes/`. You can use (or edit) one of the premade themes, or create your own if you know CSS.
- `neoCitiesSubdirectory`
    - An optional subdirectory to upload your blog to when using `npm run upload`.
        - For example: if this is set to `blog`, your site will be uploaded to `example.neocities.org/blog/` instead of `example.neocities.org`.

## Making posts
Time to write your first post! Go to `src/posts` and create a new `.md` file. You can name it whatever you want, but keep in mind that the filename will become the URL to your post (e.g. this file is called "installation", so if it was uploaded to `example.neocities.org`, its URL would be "`example.neocities.org/posts/installation`").  
Blog posts start with a little thing called *front matter*. It looks like this:
```
---
title: The title of the blog post goes here
date: 2025-12-25
---
```
The title appears as a header on the post page, and also on internal links (on the frontpage's "Latest posts" section and the "All posts" page).  
The date is actually optional - if it's not present, the file creation date will be used. This can cause some issues if you backup your posts somewhere and then reupload them - the file creation date might change! I recommend you always manually set the date.  
Create a new post now - give it a title and today's date. When you save the file, you should see it appear on the dev server.

## The index and navbar
There are some other pages on your site besides blog posts, though! You'll notice there's a navigation bar at the top of your blog with three links: `home`, `all_posts`, and `about`. These pages are all Markdown files, so editing them is similar to editing blogposts - they're just located in different places:
- The home page (index) is located at `src/index.md`.
- `all_posts.md` and `about.md` are found at `src/navbar`.
    - Any .md file made in this folder will also appear in the navbar!
        - It won't count as a "post" though, so it won't appear in "Latest posts" or RSS.
        - Luckily, you can add a blog post to the navbar by adding `tags: navbar` to its front matter.

## Favicon and Opengraph
There are two last things you want to customize:
- The favicon, which appears in the browser tab and bookmarks.
    - Found at `src/favicon.ico`
- The Opengraph preview, which appears when you link to your blog on some sites, like social media.
    - Found at `src/social.png`

Both of these are images you can edit in any graphics editor. Don't change their filenames or formats!

## Building and uploading your blog
To get your blog ready for uploading somewhere, go to the command line and type `npm run build`. A folder called `_site` will appear. That folder is your completed blog, and is ready to be uploaded to whatever hosting provider you choose!

If you're going to use Neocities, Strawberry Starter can instead automatically upload your site there by using the command `npm run upload`! However, it requires a bit of setup, so follow these steps:
1. **[Go to your Neocities account settings](https://neocities.org/settings#sites)**
2. **Click "manage site settings", then "API".**
3. **Copy your API key**.
    - If you haven't generated an API key, do so now by pressing the button.
    - Keep this safe! Don't share it with anyone, or they can edit your site.
4. **Create a `.env` file in the base of Strawberry Starter**
    - This means in Strawberry Starter's main folder, NOT in `src`.
    - The file is just called `.env` - exactly like that.
5. **Copy the following into the file:**
    - `NEOCITIES="1234ABCD"`
        - Replace `1234ABCD` with your API key.

If you followed the above steps correctly, you should be able to use `npm run upload` now! That command also builds your site, so if you're uploading to neocities this way, you don't need to run `npm run build`.  
By default, this pushes directly to your site's homepage. If you're just using your neocities for your blog, that's fine, but if you have other pages on your site, be sure to set the `neoCitiesSubdirectory` in `config.json` to something else! Otherwise, the upload command will overwrite your files.

You should now have everything you need for a successful blog. Go forth - delete these starter posts, rewrite the about page, the sky is the limit! Have fun blogging!