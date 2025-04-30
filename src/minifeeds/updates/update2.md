---
title: Strawbery Starter 1.1 release
date: 2025-04-28
tags:
- updates
---
A new update for Strawberry Starter! In fact, the first major update!  
Here's a rundown of the new features:

## Tags
You could already tag your posts, but now it's more useful! If you have at least one tag (that isn't `post` or `infobar`) a tag view will appear in your "All Posts" page. This lets you view every tagged post at once! All of the example posts that come with the template have tags now, to serve as little examples of this feature.

## Navbar links & Footer comments
It's now easier than ever to add external links to your navbar, or add comments to your post pages. You'll see two new layouts in the `_includes` folder: `navbar.html` and `comments.html`. The former lets you easily add external links (or whatever else)! and the latter lets you easily copy paste a comment script from a service like [Disqus](https://disqus.com/) or [CommentBox](https://commentbox.io/).

## Minifeeds
A new social-media-ish alternative for your blog! Add feeds to the `minifeeds` folder and give them a tag. This is a great way to keep an ongoing list of books you've read or stuff you're doing. Posts added to the minifeeds folder won't count as "posts", and so won't clog up the RSS Feed or the "All Posts" page. They'll only appear in the tag view, but you can also link to them directly. A new #Updates minifeed has been added to the template to show you how to do it!

## Easy backups!
You can now type `npm run backup` in a command line to backup your blog. This will preserve your assets and posts in a format that's really convenient for backing up, OR for using to upgrade to a newer version of Strawberry Starter. Just download the new version, drop your backup in there, and voila!

<hr>

There's a new guide on the site about how to use all these in more detail: [Advanced Features](/posts/example_posts/advanced-features/).  
Let me know what you think about this update! I've already seen some cool blogs out there, and am hoping to see more. Special thanks to [Em Reed](https://hotelpaintings.neocities.org/) and their awesome blog, for helping me test out these new features.

Keep blogging, and believe in the net! 🍓