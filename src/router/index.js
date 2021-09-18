import { createRouter, createWebHashHistory } from 'vue-router'

import Home from '@/views/Home.vue';
import About from '@/views/About.vue';
import Category from '@/views/Category.vue';
import SoloPost from '@/views/SoloPost.vue';

import SignIn from '@/views/SignIn.vue';
import SignUp from '@/views/SignUp.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/signin',
    name: 'SignIn',
    component: SignIn
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: SignUp
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/post/:id',
    name: 'SoloPost',
    component: SoloPost
  },
  {
    path: '/category/:id',
    name: 'Category',
    component: Category,

    
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
