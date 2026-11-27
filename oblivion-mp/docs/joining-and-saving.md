---
sidebar_position: 2
---

# Joining a server and saving

This page is for players. It explains where you end up when you join a server, and where your character is saved.

## Joining

Join a server from the server list in the Launcher. The game starts and takes you straight into that server's world.
There is no main menu on the way: the intro videos, the "Press any key" screen and the main menu are skipped, so there
is no New Game, Continue or Load to choose from.

:::tip

If you ever find yourself at the main menu, or in the Imperial prison at the start of a new game, you are not in the
server's world. New Game starts the single-player intro, not your character on the server. Quit the game and join
again from the Launcher.

:::

You can play from one PC at a time. Joining the same server from a second PC does not take over a session that is
already running.

## Saving

**The server saves your character, not your game.** It keeps one character for each ReadyM account and saves it while
you play, so there is nothing for you to save. The next time you join that server, it gives you back your character.

What that means in the game:

* **There is nothing to save or load.** The System page of the menu has only Exit Game on it. Quick Save, Save Game,
  Load Game and Main Menu are gone, and the quicksave key, **F5**, does nothing.
* **Nothing appears in your local saves.** No save files are written to your game's save folder while you play on a
  server, and your single-player saves are not used to join one.
* **Each server keeps its own character.** Your character lives on the server you made it on. Another server knows
  nothing about it, and gives you a character of its own.

### What is kept

| Kept between sessions | Details |
| --- | --- |
| Name, race, sex, class and birthsign | See [what is not kept yet](#what-is-not-kept-yet) for the exceptions. |
| Appearance | Your face, hair and the rest of what you chose in the race menu. |
| Level, attributes and skills | Including the progress you made since your last level-up. |
| Active effects | Resistances and the other effects running on your character. |
| Bounty, fame and infamy | Your standing with the guards and the people of Cyrodiil. |
| Inventory | The items you carry, what you have equipped, and your arrows. |

### What is not kept yet

Every time you join, the game first loads the world save that OblivionMP ships with, and then the server puts your
character on top of it. Whatever the server does not keep comes from that world save instead:

* **Where you stand.** Your position is not saved. Every time you join, you start at the world save's starting spot,
  not where you left.
* **Custom spells.** Spells you made at a spellmaking altar are lost when you leave.
* **A custom class.** A class you make yourself in the class menu is not kept. The standard classes are.
* **Changes made outside the character menus.** A change to your name, race, sex, class or birthsign is only kept when
  it is made in the race, class or birthsign menu.

The first time you join a server, you have no character there yet, so you start as the character from the world save:
the same name, race, items and place for every new player. A server's mods can change that, for example by opening
the character menus on your first join.

These gaps are also on the [known issues](known-issues.md) page, and are removed from it as they are fixed.

## For server owners

The server keeps the player saves in the `saves` folder inside the server folder. You can change the folder, and how
often the server saves, in the server's `config.json`, as described in
[Installation](Server/installation.mdx#configuration).

To keep your players' characters when you update the server, copy the `saves` folder into the new server folder, as
each release note's upgrade steps say. A player whose save is missing starts again as a new player.
