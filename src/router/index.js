import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PersoCard from '../views/PersoCard.vue'
import MaFiche from '../components/MaFiche.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/persocard',
    name: 'PersoCard',
    component: PersoCard
  },
  {
    path: '/personnage/:id',
    name: 'personnage',
    component: MaFiche
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
