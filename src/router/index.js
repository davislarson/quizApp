// define routing rules

import { createRouter, createWebHistory} from 'vue-router'
import QuizView from '../views/QuizView.vue'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
   history: createWebHistory(import.meta.env.BASE_URL),
   routes: [
      {
         path: "/quiz/:id",
         name: "quiz",
         component: QuizView
      },
      {
         path: "/",
         name: "home",
         component: HomeView
      }
   ]
})

export default router