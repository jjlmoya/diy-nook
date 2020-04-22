
const routes = [
  {
    path: '/',
    component: () => import('pages/Index.vue')
  },
  {
    path: '/serie/:id',
    name: 'serie',
    component: () => import('pages/serie/_id.vue')
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
