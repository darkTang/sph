export const routes = [
  {
    path: '/home',
    component: () => import('@/views/home')
  },
  {
    path: '/search/:keyword?',
    component: () => import('@/views/search'),
    name: 'search'
  },
  {
    path: '*',
    redirect: '/home'
  }
]