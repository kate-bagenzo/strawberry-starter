---
title: FAQ & Troubleshooting
date: 2025-01-04
---
Some answers for miscellaneous issues or concerns:

## The dev server is acting strangely / not showing updates!
Are you on Windows? The 11ty dev server has some bugs - Strawberry Starter comes with a patch for a big one (thanks [Sean](https://seans.site/)!), but things can still look weird sometimes. Regardless of operating system - if you notice anything odd, my advice is to stop the dev server, and then start it again. If that doesn't fix anything, try manually deleting `_site`, and doing a hard refresh of the page with CTRL+SHIFT+R.

## How can I change the date format?
Go into `eleventy.config.js` and you'll find two filters, `lastUpdate` and `dateFormat`. The former controls the last modified indicator at the bottom of your blog, and the latter controls the date that appears next to posts. If you're familiar with JavaScript, you can edit the return value yourself, but if not, there are some presets you can switch to. For example - if you wanted the post dates to appear in month/day/year format, just change `return DMY;` to `return MDY;`.

## This is cool, but I want to tinker with it...
I recommend a few starting places:
- [MDN Learning](https://developer.mozilla.org/en-US/docs/Learn_web_development)
    - In addition to being a great reference for HTML, CSS and JS, the Mozilla Developer Network also has a bunch of tutorials, if you're not familiar with them. They range in experience level from "how to open a code editor" to "how to make your own videogame".
    - In my opinion, the best resource for learning web development online.
- [11ty Tutorials](https://www.11ty.dev/docs/tutorials/)
    - The videos here do a great job explaining the basics of 11ty: making files with tags and iterating over collections.
    - They mostly scratch the surface, but it's good to start here and then search what you want to do. 11ty is very basic out of the box, but you can extend it a lot, usually by editing `eleventy.config.js`.

## How can I back up my blog?
Delete the `node_modules` folder.  
(I also **STRONGLY** recommend you delete `.env.local` if you've created it, just for security reasons. This is especially important if you're going to upload your blog to a storage service you don't control, like Dropbox or Google Drive. You can always remake it later - you don't want to ever risk someone getting control of your site!)    
Once those tasks are both done, you can store your blog anywhere. It's a good idea to make a `.zip` to save on file space.  
When you deploy your site from backup, run `npm install` again, and the `node_modules` folder will return.

## I have a question not answered here.
Try making a comment on the itch page, opening an issue or pull request on the Github (if you know how to do that) or, alternatively, feel free to reach out to me on social media or email. Or if you just want to show me a cool blog you made 😊
