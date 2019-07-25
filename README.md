<h1 align="center">ga-lite for Vue Router</h1>

<div align="center">

[![Latest version](https://img.shields.io/npm/v/vue-router-ga-lite.svg?style=for-the-badge)](https://npm.im/vue-router-ga-lite)
![npm downloads](https://img.shields.io/npm/dt/vue-router-ga-lite.svg?style=for-the-badge)
[![License](https://img.shields.io/github/license/kidonng/vue-router-ga-lite.svg?style=for-the-badge)](LICENSE)

</div>

Integrate [ga-lite](https://github.com/jehna/ga-lite) with [Vue Router](https://github.com/vuejs/vue-router).

This package serves as a general solution for framework-specific packages like [saber-plugin-ga-lite](https://npm.im/saber-plugin-ga-lite) and can replace ordinary Google Analytics packages like [@vuepress/plugin-google-analytics](https://npm.im/@vuepress/plugin-google-analytics).

## Install

- npm: `npm i vue-router-ga-lite`
- Yarn: `yarn add vue-router-ga-lite`

## Usage

```js
import VueRouter from 'vue-router'
import ga from 'vue-router-ga-lite'

const router = new VueRouter({
  // ...
})

ga(router, 'UA-XXXXXXXXX-X')
```
