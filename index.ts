import VueRouter from 'vue-router'
import galite from 'ga-lite'

let loaded = false

export default (router: VueRouter, gaID: string) => {
  router.afterEach(to => {
    if (loaded) {
      galite('set', 'page', to.fullPath)
      galite('send', 'pageview')
    } else {
      loaded = true
      galite('create', gaID, 'auto')
      galite('send', 'pageview')
    }
  })
}
