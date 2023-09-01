---
title: 'My NixOS Journey'
description: "Documentation of my learnings while setting up NixOS"
tags: ["linux"]
prio: 1
---

# My NixOS Journey

I recently switched to NixOS and I am documenting my learnings here. 

You can find my [dotfiles](https://github.com/pierresquarra/nix-config) on GitHub.

## Where it all started

Originally the plan was just to try out something more interesting and geeky than ubuntu, which I had used for about 2 years at this point. The two options I was considering at first were Arch and Debian. While reading into the key differences between the two, I quickly settled on Arch. I felt like I would learn more about what goes on behind the scened and I liked the idea of having a minimal system that I could configure to my liking.

Because I had spend some time on r/unixporn before I already knew I wanted to try out a tiling window manager instead of a desktop environment. After a bit of research on the topic I found out about Hyprland, which seemed to be very hyped at the time. Now that all of that was certain, I started to install Arch.

After about two days failing to get a some basic stuff like wifi and sound to work, I decided to give up on Arch. During these two days I had also read a lot about NixOS which seemed to facilitate one of the key issues I had with Arch. I found it very hard to keep track of all the packages installed and services running on my system. In NixOS everything is declarative and you can easily see what is installed and running. This was a big plus for me.

## The switch

It's not like it all worked much better right out of the box but the feeling I got while installing NixOS was very different from Arch. I felt like I was learning something new and not just trying to get something to work. Don't get me wrong, it still took me a while to get a nicely configured waybar and some theming going but I was having fun doing it.

## The journey

I knew about Flakes and Home Manager but I didn't know, if it was really necessary for me to use them, because I didn't plan to use NixOS on any other machine than my laptop. After watching a couple of very long but helful videos on youtube and looking at some other people's configurations, it seemed like everyone was using Flakes and Home Manager. So I decided to give it a try.

After testing out all the possible ways of using Home Manager, Flakes and Hyprland together. Some worked much better than others, since Hyprland is still very new. So new in fact, that ChatGPT has never heard about it. I ended up using Flakes and Home Manager together through the standalone setup and not the module. I also decided to use the unstable channel, because I quickly ran into some issues with VSCode and the stable channel.

## The result

The configuration is still very much a work in progress but I am very happy with the result so far. I am still learning a lot about NixOS and I am sure there are better ways to do things. I just went with a simple Gruvbox theme for now, because I didn't want to spend too much time on it. I am planning to make a more detailed post about my configuration in the future.


### Some of the key components of my configuration:

- **Window Manager**: Hyprland
- **Shell**: Bash
- **Terminal**: Kitty
- **Panel**: Waybar
- **Notification Daemon**: Dunst
- **Launcher**: Wofi
- **File Manager**: Thunar

Feel free to check out my [dotfiles](https://github.com/pierresquarr/nix-config) on GitHub.
