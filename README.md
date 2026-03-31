# Website

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

## Quirks of working with Weblate

The source for the documentation is located in the `docs/` folder. The `i18n` folder's content is written by our [Weblate instance](https://translate.readycode.io). 

There are a few things to watch out for when writing docs so that they play well with Weblate:

### Admonitions

Separate admonition tags from content with a newline, like so:

```bash

:::note
                    # this empty line is required
This is a note.
                    # so it this one
:::

```

## Local Development

```bash
yarn start                  # English
yarn start --locale zh-Hans # Chinese
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

## Build && serve locally

```bash
yarn build
yarn serve                  # English
yarn serve --locale zh-Hans # Chinese
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.
