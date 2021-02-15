<div align="center">
  <h1>Performant and reusable Nuxt barebone boilerplate</h1>
</div>

## Why?
Generating or manually installing a Nuxt application won't give you a perfect Google Lighthouse score by default and you might be asking yourself: How do I get a perfect score? We got you covered.

## Table of contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Commands](#commands)
- [Server deployment](#server-deployment)
- [Technology stack](#technology-stack)
- [Features](#features)
- [Google Lighthouse score](#google-lighthouse-score)
- [Licenses](#licenses)

## Prerequisites

Make sure you have installed all of the following prerequisites on your development machine:

- Node.js - [Download & Install Node.js](https://nodejs.org/en/download/)
- Yarn package manager - [Download & Install Yarn](https://yarnpkg.com/en/docs/install#mac-stable)

## Installation

Clone repository and run project locally:

```bash
$ git clone git@github.com:larsdouweschuitema-nuxt/nuxt-config-boilerplate.git # Clone project using SSH
$ cd funda-clone # Change directory
$ yarn install # Install required dependencies
```

## Commands

Launch development server
```
$ yarn dev
```

Build and optimize your application with webpack for production
```
$ yarn build
```

Start the production server (after running `yarn build`).

```
$ yarn start
```

## Server deployment
Build and start application for Production purposes

```
$ yarn build
$ yarn start
```

## Technology stack
- High level framework `nuxt`
- TypeScript `@nuxt/types`, `@nuxt/typescript-build`

## Features
- Disable unused core minimal Nuxt features
- All client side code living in `client/` directory

## Google Lighthouse score

- Performance - 100
- Accessibility - 100
- Best practices - 100
- SEO - 100

For this boilerplate we are not including the Progressive Web App. You can add this yourself easily by installing
`@nuxtjs/pwa` and creating `static/` directory inside the `client/` directory if you have enabled the service worker, which
is enabled by default.

## Licenses

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details