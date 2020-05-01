
import { openURL } from 'quasar'
const routes = [
  {
    path: '/',
    component: () => import('pages/Index.vue')
  },
  {
    path: '/serie/:id',
    name: 'serie',
    component: () => import('pages/serie/_id.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('pages/about.vue')
  },
  {
    name: 'paypal',
    path: '/paypal',
    beforeEnter () {
      openURL('https://www.paypal.com/donate/?token=H1hPwg6J1JPqGy-bfVHMN9R_LUXey5et0UjLTQlvIyizMvqtGB0NXoch2u4BkXGEA6H--W&country.x=ES&locale.x=ES')
    }
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
