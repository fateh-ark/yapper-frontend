import { createRouter, createWebHistory } from 'vue-router'
import HomeView from './views/HomeView.vue'
import ProfileView from './views/ProfileView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/@:username',
      name: 'profile',
      component: ProfileView,
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'PageMissing',
      component: HomeView,
    },
  ],
})

router.beforeEach((to) => {
  document.title = to.meta?.title ?? 'Yapper!'
})

export default router
