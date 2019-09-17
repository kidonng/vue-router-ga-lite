# `ga-lite` for Vue Router

[![Latest version](https://img.shields.io/npm/v/vue-router-ga-lite.svg)](https://npm.im/vue-router-ga-lite)
![npm downloads](https://img.shields.io/npm/dt/vue-router-ga-lite.svg)
[![License](https://img.shields.io/github/license/kidonng/vue-router-ga-lite.svg)](LICENSE)

Integrate [ga-lite](https://github.com/jehna/ga-lite) with [Vue Router](https://github.com/vuejs/vue-router).

This package is a general replacement for packages like [@vuepress/plugin-google-analytics](https://npm.im/@vuepress/plugin-google-analytics) and [saber-plugin-ga-lite](https://npm.im/saber-plugin-ga-lite).

## Install

- `npm i vue-router-ga-lite`
- `yarn add vue-router-ga-lite`

## Usage

```js
import VueRouter from 'vue-router'
import { ga } from 'vue-router-ga-lite'

const router = new VueRouter({
  // ...
})

ga('UA-XXXXXXXXX-X', router)
```
