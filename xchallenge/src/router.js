import { createWebHistory, createRouter } from 'vue-router'
import Home from './components/Home/Home.vue'
import Skills from './components/Skills/Skills.vue'
import Login from './components/Login/Login.vue'


const routes = [
  { path: '/', component: Home },
  { path: '/skills', component: Skills },
  { path: '/login', component: Login },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})