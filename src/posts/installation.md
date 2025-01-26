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
    - Never used one? It's a program that lets you type computer commands.
        - Windows: Powershell is built-in, and what I recommend you use. If you're familiar with the "Command Prompt", that'll also work, but it's not recommended for a variety of reasons.
        - macOS: The program is just called Terminal. Simple!
        - Linux: You definitely have it, but it's called something different depending on what kind of Linux you're running. Search for "Terminal" or "Shell".
    - You can probably open your chosen command line by right clicking the open folder and selecting "Open a Terminal", but if not, open one of these programs and type `cd path/to/template/`, where `path/to/template` is the path you unzipped Strawberry Starter to.
4. **Execute the command: `npm install`**
    - You'll see some output, and probably some warnings and notifications. Unless you see a big ERROR, you should be okay.
    - > On Windows: You might get a Powershell error here! If it says you don't have permission to run scripts, then copy and paste this command:
         - > `Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy Unrestricted`
         - > You can right click -> paste this, or paste it with CTRL+SHIFT+V. Command lines are finnicky and won't let you copy or paste with the usual shortcuts!
         - > Then, try `npm install` again.

You only need to run `npm install` once to setup. Now you're ready to start blogging!

## Starting the development server
Strawberry Starter has a live server you can run to preview your changes as you make them. It's super convenient!  
Start the server with the command `npm run dev`. Now, open [`localhost:1234`](localhost:1234/) in your browser.  
This is a preview of what your blog looks like, and it'll update automatically (no refreshes required)!
> On Windows, you might see a firewall permission prompt. Allow the script to bypass the firewall, or it won't work.

## Renaming & customizing your blog
Go to the `src` folder. This is where your blog's files live.  
There's a lot of stuff here, but you don't need to worry about most it! For now, let's go to `_data` and open the file named `config.jsonc`.  
If you've never seen a `.json` or `.jsonc` file before - it's not complicated! It's just a way to store text so that it can be easily read by programs. The format is always the same: a bunch of `keys` and `values`, paired like so: `"key": "value",`.  
Note the quotation marks and the comma! All of the key value pairs (except for the last) must have a comma. The keys and values must also be enclosed with quotation marks. Be sure not to change that while editing your config, or your blog will stop working!

The config contains data that appears in a few places in your blog. Take the time now to replace the defaults, being careful not to disturb any quotation marks or commas:
- `siteName`
    - The name of your blog. Appears on the footer, the RSS feed, and the link preview (i.e. the little image when you link to a site on social media).
- `siteDescription`
    - A small description of your blog. Appears on the RSS feed.
- `siteURL`
    - The public URL of your blog, e.g. (example.neocities.org) *Required* for the link preview and RSS feed to function correctly.
- `siteAuthor`
    - Your name. Appears on the footer and RSS feed.
- `siteLang`
    - A two-letter code indicating what language your blog is in. Used internally for various things.
- `authorLink`
    - A link to your personal website or social media. Appears on the footer. You can leave this blank if you prefer.
- `authorContact`
    -Your email. Appears on the footer. You can leave this blank if you prefer.
- `siteStyle`
    - The theme used by your blog. Themes are located in `src/assets/styles/themes/`. You can use (or edit) one of the premade themes, or create your own if you know CSS.

### An aside on text editors
You can use whatever text editor you want to edit! I like VS Code and Notepad++, but you can even use Notepad if you want. The only important thing is that it shouldn't be a *word processor*, like Microsoft Word or Libreoffice Writer.

## Making posts
Time to write your first post! Go to `src/posts` and create a new `.md` file. You can name it whatever you want, but keep in mind that the filename will become the URL to your post (e.g. post you're reading now is named "installation.md", so if it was uploaded to `example.neocities.org`, its URL would be "`example.neocities.org/posts/installation`").  
Blog posts start with a little thing called *front matter*. It looks like this:
```
---
title: The title of the blog post goes here
date: 2025-12-25
---
```
The title appears as a header on the post page, and also on internal links (on the frontpage's "Latest posts" section and the "All posts" page).  
The date is actually optional - if it's not present, the file creation date will be used. This can cause some issues if you backup your posts somewhere and then reupload them - the file creation date might change! I highly recommend you always manually set the date.  
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
- The link preview, which appears when you link to your blog on some sites, like social media.
    - Found at `src/social.png`

Both of these are images you can edit in any graphics editor. Don't change their filenames or formats!

## Building and uploading your blog
To get your blog ready for uploading somewhere, go to the command line and type `npm run build`. (If the dev server is still running, you can stop it with CTRL+C first.) A folder called `_site` will appear. That folder is your completed blog, and is ready to be uploaded to whatever hosting provider you choose!

[Neocities](https://neocities.org/) is a cool hosting provider with a free tier! If you're going to use Neocities, Strawberry Starter can instead automatically upload your site there by using the command `npm run upload`! However, it requires a bit of setup, so follow these steps:
1. **[Go to your Neocities account settings](https://neocities.org/settings#sites)**
2. **Click "manage site settings", then "API".**
3. **Copy your API key**.
    - If you haven't generated an API key, do so now by pressing the button.
    - Keep this safe! Don't share it with anyone, or they can edit your site.
4. **Open the `.env` file in the base of your blog and follow its instructions.**
    - Don't edit `.env` itself! It's just a template of what your `.env.local` should look like, and should be kept that way to ensure your API key stays safe.

If you followed the above steps correctly, you should be able to use `npm run upload`! That command also builds your site, so if you're uploading to neocities this way, you don't need to run `npm run build`.  
By default, this pushes directly to your site's homepage. If you're just using your neocities for your blog, that's fine, but if you have other pages on your site, be sure to set the `NEOCITIES_SUBDIRECTORY` field in `.env.local` to something else!

You should now have everything you need for a successful blog. Go forth - delete these starter posts, rewrite the about page, the sky is the limit! Have fun blogging!