- posts not updating after first build issue???
- you may need to explain (or just link to an explainer for) json itself: a very common source of error for a non webdev will be editing a comma/quote wrong in a json data file

- you may want to include some basic RSS style in the themes. it's a bit of a pain to style RSS but people often interpret the "this xml has no style information" thing browsers show as an error. not an issue for actual RSS users since they're familiar, but you'll have people who don't use RSS themselves making sites with this, and they might think they've set it up wrong
- you've got language hard-coded, but probably better to pull this out to config
- you're using hard-coded language inconsistently (sometimes `en-US`, sometimes `en-GB` (canadian coded))
- when you use `Intl` formatters, you should instantiate once per format and call `.format` repeatedly from the same instance instead of creating a new instance each time you want a formatted result (often people just make a util fn with a cache for it)

notes on the design:
- the footer elements are misaligned: the first and third row have inline margins but the second doesn't
- you may want to make "back to top" fixed instead of part of the footer
- you may want to add `scrollbar-gutter: stable;` (always annoys me when you see this change on page navs for stuff otherwise clearly designed for scrolling the whole page lol)