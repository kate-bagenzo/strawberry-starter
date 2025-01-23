- posts not updating after first build issue???
- you may need to explain (or just link to an explainer for) json itself: a very common source of error for a non webdev will be editing a comma/quote wrong in a json data file
- your `config.json` documentation is in a different order than the actual template file
- since you're parsing it anyway might want to consider jsonc to make it less error-prone (and then you can duplicate the explainer for each field into it)
- seems a little weird that the neocities subdirectory is part of the blog config? since you have to use an env var to upload to neocities anyway, it may be better to also configure the directory that way (to put it another way, where you upload on neocities is not actually configuring the blog build itself, just what you _might_ do with the output)
- your config is parsed at server start so never hot-reloads, might be worth hooking into however 11ty handles hot-reload (might even just mean `import`/`require`ing it instead of reading with `fs`)
- maybe overkill but i would consider `dotenv-flow` (https://www.npmjs.com/package/dotenv-flow) instead of raw `dotenv` since it automatically supports stuff like `.env.local`, `.env.production`. this is particularly useful bc you can un-gitignore and commit `.env` itself as a "template" with placeholders/comments explaining where to get the values amd how to override with a `.env.local` instead of having to find it in the docs
- the RSS link in the footer is relative instead of absolute and breaks on individual post pages
- you may want to include some basic RSS style in the themes. it's a bit of a pain to style RSS but people often interpret the "this xml has no style information" thing browsers show as an error. not an issue for actual RSS users since they're familiar, but you'll have people who don't use RSS themselves making sites with this, and they might think they've set it up wrong
- you've got language hard-coded, but probably better to pull this out to config
- you're using hard-coded language inconsistently (sometimes `en-US`, sometimes `en-GB` (canadian coded))
- when you use `Intl` formatters, you should instantiate once per format and call `.format` repeatedly from the same instance instead of creating a new instance each time you want a formatted result (often people just make a util fn with a cache for it)
- `head.html` preloads `normalize.css` but then loads it right away anyway

notes on the design:
- the footer elements are misaligned: the first and third row have inline margins but the second doesn't
- you may want to make "back to top" fixed instead of part of the footer
- you may want to add `scrollbar-gutter: stable;` (always annoys me when you see this change on page navs for stuff otherwise clearly designed for scrolling the whole page lol)