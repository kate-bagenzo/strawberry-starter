---
title: Advanced Features
date: 2025-04-28
tags:
- strawberry
- guide
---
This guide goes over some advanced features that aren't necessary to use. It assumes you've read the [Installation Guide](/posts/example_posts/installation/) first. It also assumes your version of Strawberry Starter is 1.1.0 or higher (check `package.json` to see your version).

## Navbar Links & Editing
You already know you can tag a post `navbar` to add it to the navbar. What if you want to add links to other sites, or even images?  
No worries - go to `_includes/navbar.html` and you can add new HTML in there easily, without having to mess with the whole layout. Some examples are provided in comments, as well as a minifeed example.

## Minifeeds
These are sort of a mix between blogging and social media posts. You'll find a folder called `minifeeds` in `src`. You can organize your feeds any way you like - the only thing that joins them together is that every post has the same tag. By default, feed posts do not appear in `All Posts` or clog up the RSS Feed; they only appear in the `All Posts` tag view. You can directly link to them though - they'll appear at `sitename/tags/feedname/`. I would link to them in your index or navbar! An example minifeed - updates - is already included with Strawberry Starter. Look over it for a better understanding of what to do.

## Comments
You'll need an external comment service like [Disqus](https://disqus.com/) or [CommentBox](https://commentbox.io/). Copy and paste the script they give you into `_includes/comments.html`. Comments only appear on posts.

## Backing up your blog
Type `npm run backup` in your command line. You'll see a new `_backup` folder appear. This folder has the bare minimum essentials in it, to save on storage space. If you want to make use of it, you'll need to download Strawberry Starter again and paste the `_backup` folder into it.  
This is also a convenient way to upgrade versions!

A full list of what is backed up:
- Your config file in `src/_data/config.jsonc`
- Your navbar links in `src/_includes/navbar.html`
- Your comment script in `src/_includes/comments.html`
- Everything in `src/assets/`
- Everything in `src/info/`
- Everything in `src/posts/`
- Everything in `src/minifeeds/`
- Your `favicon.ico`
- Your `index.md`
- Your `social.png`

This notably does NOT backup your `.env.local`, for security reasons. You'll have to manually add that again.