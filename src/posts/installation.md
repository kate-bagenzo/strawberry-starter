---
title: Installation Guide
date: 2025-01-01
---
This post will walk you through downloading, installing, and setting up your new blog!  

Here's an abridged list of what to do. ***Don't*** bother reading the entirety of the guide below - instead, consult the relevant section if you need more in-depth help!

- **Download Strawberry Starter**.
    - You can grab it from itch.io or github.
- **Download Node**.
    - Node is a javascript runtime that lets you create things for the web.
    - Grab it from the [node website](https://nodejs.org/en).
- **Install Node**.
    - Follow the instructions on the node website.
    - On Windows & macOS, this means either running an installer, or copy/pasting code into Powershell (Windows) or the Terminal (macOS & Linux).
- **Unzip Strawberry Starter**
    - You can move it around later, so don't be too picky about where you place it.
- **Open a Terminal in Strawberry Starter's folder**
    - If using Windows: be sure to use Powershell here, not the program called "Terminal"!
- **Execute the command: `npm i`**
    - If you don't see any errors, then congrats! You can now blog to your heart's content.


## Step 1 - Download and install
Strawberry Starter uses two main technologies: *node* and *11ty*.  
Node is a JavaScript runtime for your computer. Basically, it lets you run JavaScript code, but outside of a browser.  
11ty is a static site generator. It takes a bunch of input files, and converts them into HTML, which can be read by a browser.

Don't worry if that all sounds complicated, it really isn't! Basically, what we have to do first is install Node, and then install 11ty (as well as some other various things Strawberry Starter will need to run on your computer.)

### Step 1.1 Installing Node
Go to [Node's download page](https://nodejs.org/en/download). Select either Windows, macOS, or Linux depending on your operating system.  
It'll give you some code to run. You'll see a convenient "Copy to clipboard" button.
You need to run that code in a terminal for the download to start.

### Step 1.2 Commands
1. Download and extract Strawberry Starter. Go to the folder you extracted it into, and start a terminal there.  
2. Type `npm i`.
    - (This command will install dependencies, like 11ty.)
    - (You only need to run it once.)
3. Type `npm run dev`
    - (This command runs a local development server on your computer.)
    - You can view a live preview of your blog at localhost:1234/
    - This preview automatically updates when you make changes, like adding or editing a blog post

Try going to localhost:1234/ now. If you see the Strawberry Starter site, then congrats! It means everything is working.