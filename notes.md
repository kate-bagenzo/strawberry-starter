- you've got language hard-coded, but probably better to pull this out to config
- you're using hard-coded language inconsistently (sometimes `en-US`, sometimes `en-GB` (canadian coded))
- when you use `Intl` formatters, you should instantiate once per format and call `.format` repeatedly from the same instance instead of creating a new instance each time you want a formatted result (often people just make a util fn with a cache for it)


notes on the design:
- the footer elements are misaligned: the first and third row have inline margins but the second doesn't
- you may want to add `scrollbar-gutter: stable;` (always annoys me when you see this change on page navs for stuff otherwise clearly designed for scrolling the whole page lol)
