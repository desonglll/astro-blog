# Astro Starter Kit: Basics

```sh
npm create astro@latest -- --template basics
```

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
```

To learn more about the folder structure of an Astro project, refer
to [our guide on project structure](https://docs.astro.build/en/basics/project-structure/).

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
|:--------------------------|:-------------------------------------------------|
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into
our [Discord server](https://astro.build/chat).

## Frontmatter

```yaml
title: 'My First Blog Post'
date: 2022-07-01
description: 'This is the first post of my new Astro blog.'
author: 'Astro Learner'
cover: 'https://docs.astro.build/assets/rose.webp'
tags:
  - Ubuntu
  - Blog
  - Astro
published: true
```

## Rsync

```shell
rsync -avh /mnt/share/ObsidianVault/ ./src/blog/
```