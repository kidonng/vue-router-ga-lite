import { Router } from 'vue-router'
import galite from 'ga-lite'

let loaded = false

const ga = (googleAnalyticsID: string, router: Router) => {
  router.afterEach((to) => {
    if (loaded) {
      galite('set', 'page', to.fullPath)
      galite('send', 'pageview')
    } else {
      loaded = true
      galite('create', googleAnalyticsID, 'auto')
      galite('send', 'pageview')
    }
  })
}

export { ga }
