# Website
The source for the documentation is located in the `docs/` folder. The `i18n` folder's content is written by our [Weblate instance](https://translate.readycode.io).

There are a few things to watch out for when writing docs so that they play well with Weblate:

### Code is not translated

Code blocks and their metadata is not detected by Weblate, so if you write something like this:

~~~text
```csharp title="Minimal system example"
public class MySystem : ModSystemBase
{
    protected override void OnUpdate(UpdateTick tick)
    {
        // do something every frame
    }
}
```
~~~

You must manually translate it in the files copied to other locales:

~~~text
```csharp title="最简系统示例"
public class MySystem : ModSystemBase
{
    protected override void OnUpdate(UpdateTick tick)
    {
        // 每帧执行的操作
    }
}
```
~~~

> [!WARNING]
> Weblate will aggressively try to override the translation with the English version. This is because code blocks, including `title` metadata, are copied verbatim and I haven't found a way to fix that as of yet. When merging from the `weblate` branch to `develop`, make sure not to reverse your manual translations.

### Admonitions

Separate admonition tags from content with a newline, like so:

~~~bash

:::note
                    # this empty line is required
This is a note.
                    # so it this one
:::

~~~

## Local Development

~~~bash
yarn start                  # English
yarn start --locale zh-Hans # Chinese
~~~

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

## Build && serve locally

~~~bash
yarn build
yarn serve                  # English
yarn serve --locale zh-Hans # Chinese
~~~

This command generates static content into the `build` directory and can be served using any static contents hosting service.
