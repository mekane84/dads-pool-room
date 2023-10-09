import { createRouter, createWebHistory} from "vue-router";
import Home from '@/views/Home.vue'
import DayOne from "@/views/DayOne.vue";

const routes = [
  {path: '/', name: 'Home', component: Home},
  {path: '/day1', name: 'Day 1', component: DayOne}
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router