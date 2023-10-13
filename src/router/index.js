import { createRouter, createWebHistory} from "vue-router";
import Home from '@/views/Home.vue'
import DayOneRoundOne from "@/views/DayOneRoundOne.vue";
import DayOneRoundTwo from "@/views/DayOneRoundTwo.vue";
import DayTwoRoundOne from "@/views/DayTwoRoundOne.vue";
import DayTwoRoundTwo from "@/views/DayTwoRoundTwo.vue";
import Preview from "@/views/Preview.vue";
import DayThree from "@/views/DayThree.vue";
import DayFour from "@/views/DayFour.vue";
import DayFive from "@/views/DayFive.vue";
import DaySix from "@/views/DaySix.vue";
import Semis from "@/views/Semis.vue";

const routes = [
  {path: '/', name: 'Home', component: Home},
  {path: '/preview', name: 'Day 1, Preview', component: Preview},
  {path: '/day1-round1', name: 'Day 1, Round 1', component: DayOneRoundOne},
  {path: '/day1-round2', name: 'Day 1, Round 2', component: DayOneRoundTwo},
  {path: '/day2-round1', name: 'Day 2, Round 1', component: DayTwoRoundOne},
  {path: '/day2-round2', name: 'Day 2, Round 2', component: DayTwoRoundTwo},
  {path: '/day3', name: 'Day 3', component: DayThree},
  {path: '/day4', name: 'Day 4', component: DayFour},
  {path: '/day5', name: 'Day 5', component: DayFive},
  {path: '/day6', name: 'Day 6', component: DaySix},
  {path: '/semis', name: 'Semifinals', component: Semis}
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router