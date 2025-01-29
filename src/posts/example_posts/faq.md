---
title: FAQ & Troubleshooting
date: 2025-01-04
---
Some answers for miscellaneous issues or concerns:

## The dev server is acting strangely!
You're probably on Windows. The 11ty dev server has some bugs on Windows - Strawberry Starter comes with a patch for a big one (thanks [Sean](https://seans.site/)!), but things can still look weird sometimes. Regardless of operating system - if you notice anything odd, my advice is to delete `_site`, stop the dev server, and then start it again.

## This is cool, but I want to tinker with it...
I recommend a few starting places:
- [MDN Learning](https://developer.mozilla.org/en-US/docs/Learn_web_development)
    - In addition to being a great reference for HTML, CSS and JS, the Mozilla Developer Network also has a bunch of tutorials, if you're not familiar with them. They range in experience level from "how to open a code editor" to "how to make your own videogame".
    - In my opinion, the best resource for learning web development online.
- [11ty Tutorials](https://www.11ty.dev/docs/tutorials/)
    - The videos here do a great job explaining the basics of 11ty: making files with tags and iterating over collections.
    - They mostly scratch the surface, but it's good to start here and then search what you want to do. 11ty is very basic out of the box, but you can extend it a lot, usually by editing `eleventy.config.js`.

## How can I back up my blog?
Delete the `node_modules` folder and then zip up the entire folder and store it someplace.  
When you deploy your site from a backup, simply run `npm install` again first.

## I have a question not answered here.
Try making a comment on the itch page, opening an issue on the Github (if you know how to do that) or, alternatively, feel free to reach out to me on social media or email. Or if you just want to show me a cool blog you made 😊
