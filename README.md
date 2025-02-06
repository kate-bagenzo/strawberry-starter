# 🍓 Strawberry Starter
A simply-sweet blog template for [11ty](https://www.11ty.dev/)!

For more information, including a step-by-step installation guide with detailed instructions, [check out the homepage](https://strawberrystarter.neocities.org/).  
**Don't be scared by this README! It's designed for those already familiar with web technologies like npm and Node.**  
I promise the [installation guide on the homepage](https://strawberrystarter.neocities.org/posts/example_posts/installation/) is simpler. 😊

## Install and Setup
`npm i`, then edit `_data/config.jsonc` and follow the instructions.  

## Commands
- `npm run dev`
  - Starts a dev server at `localhost:1234`
- `npm run build`
  - Builds the completed site to `_site/`
- `npm run upload`
  - Builds the site, then uploads it to [Neocities](https://neocities.org/)
  - This requires supplying your Neocities API key: read `.env` and follow the instructions.

## Changelog

### 1.0.2
- Fixed malformed link previews (affected Mastodon, mainly).

### 1.0.1
- Node version used now listed in user-ref.
- Installation guide reminds users to update Node.