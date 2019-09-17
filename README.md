# `ga-lite` for Vue Router

[![Latest version](https://img.shields.io/npm/v/vue-router-ga-lite.svg)](https://npm.im/vue-router-ga-lite)
![npm downloads](https://img.shields.io/npm/dt/vue-router-ga-lite.svg)
[![License](https://img.shields.io/github/license/kidonng/vue-router-ga-lite.svg)](LICENSE)

Integrate [ga-lite](https://github.com/jehna/ga-lite) with [Vue Router](https://github.com/vuejs/vue-router).

This package is a general replacement for packages like [@vuepress/plugin-google-analytics](https://npm.im/@vuepress/plugin-google-analytics) and [saber-plugin-ga-lite](https://npm.im/saber-plugin-ga-lite).

## Install

### Package Managers

- `npm i vue-router-ga-lite`
- `yarn add vue-router-ga-lite`

### ES Modules

- `import { ga } from 'https://cdn.jsdelivr.net/npm/vue-router-ga-lite'`
- `import { ga } from 'https://unpkg.com/vue-router-ga-lite'`

## Usage

```js
// Vue Router 4
import { createRouter } from 'vue-router'
import { ga } from 'vue-router-ga-lite'

const router = createRouter()

ga('UA-XXXXXXXXX-X', router)

// Vue Router 3 (please use vue-router-ga-lite@0.2.0)
import VueRouter from 'vue-router'
import { ga } from 'vue-router-ga-lite'

const router = new VueRouter()

ga('UA-XXXXXXXXX-X', router)
```
