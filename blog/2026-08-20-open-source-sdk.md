---
title: The WukongMP SDK is now open source
description: The WukongMP SDK is on GitHub, and it now ships as NuGet packages that the mod template and published mods already use.
slug: wukongmp-sdk-open-source
authors: readym
tags: [wukongmp]
hide_table_of_contents: true
---

The WukongMP SDK is now on GitHub, across three repositories:

* [WukongMP SDK](https://github.com/readycodeio/wukongmp-sdk): the SDK mods are built on.
* [ReadyM Core SDK](https://github.com/readycodeio/readym-core-sdk): the runtime underneath it, not specific to Wukong.
* [Wukong mod loader](https://github.com/readycodeio/wukong-modloader): what gets mods into the game.

The README in each covers what it does and how to build it.

<!-- truncate -->

## You do not need the SDK source to write a mod

The SDK ships as NuGet packages, one for each project in a mod:

| package | your project |
|---|---|
| [ReadyM.SDK.Wukong.Common](https://www.nuget.org/packages/ReadyM.SDK.Wukong.Common) | shared code |
| [ReadyM.SDK.Wukong.Client](https://www.nuget.org/packages/ReadyM.SDK.Wukong.Client) | the mod the game loads |
| [ReadyM.SDK.Wukong.Server](https://www.nuget.org/packages/ReadyM.SDK.Wukong.Server) | the mod the relay server loads |

Reference them and restore. There is nothing to copy by hand and no SDK build step in the way.

The [mod template](https://github.com/readycodeio/wukongmp-mod-template), the
[co-op mod](https://github.com/readycodeio/WukongMP-co-op-mod) and the
[PvP mod](https://github.com/readycodeio/WukongMP-PvP-mod) already use them.

## What to clone

**Writing a new mod?** Clone the [mod template](https://github.com/readycodeio/wukongmp-mod-template) and build. It references the SDK through NuGet, so that is the whole setup.

**Fixing something in co-op or PvP?** Open a PR against the [co-op](https://github.com/readycodeio/WukongMP-co-op-mod) or [PvP](https://github.com/readycodeio/WukongMP-PvP-mod) repository. Both build against the published packages, so you do not need the SDK checked out.

**Changing the SDK itself?** Clone [wukongmp-sdk](https://github.com/readycodeio/wukongmp-sdk) with `--recursive`. The core SDK comes in as a submodule, so one clone gets you the whole stack.

Issues and PRs welcome on all of them. If you are planning something bigger and want to talk it
through first, start a thread on the [ReadyM Forum](https://forum.ready.mp) or hop in the
[ReadyM Discord](https://discord.com/invite/wukongmp).
