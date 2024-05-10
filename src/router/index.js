import { createRouter, createWebHistory} from "vue-router";
import Home from '@/views/Home.vue'
import USOpen2023Index from '@/views/2023usopen/USOpen2023Index.vue'
import DayOneRoundOne from "@/views/2023usopen/DayOneRoundOne.vue";
import DayOneRoundTwo from "@/views/2023usopen/DayOneRoundTwo.vue";
import DayTwoRoundOne from "@/views/2023usopen/DayTwoRoundOne.vue";
import DayTwoRoundTwo from "@/views/2023usopen/DayTwoRoundTwo.vue";
import Preview from "@/views/2023usopen/Preview.vue";
import DayThree from "@/views/2023usopen/DayThree.vue";
import DayFour from "@/views/2023usopen/DayFour.vue";
import DayFive from "@/views/2023usopen/DayFive.vue";
import DaySix from "@/views/2023usopen/DaySix.vue";
import Semis from "@/views/2023usopen/Semis.vue";
import Finals from "@/views/2023usopen/Finals.vue";

const routes = [

  {path: '/', name: 'Home', component: Home},

  {path: '/2023usopen', name: 'USOpen2023Index', component: USOpen2023Index},
  {path: '/2023usopen/preview', name: 'Day 1, Preview', component: Preview},
  {path: '/2023usopen/day1-round1', name: 'Day 1, Round 1', component: DayOneRoundOne},
  {path: '/2023usopen/day1-round2', name: 'Day 1, Round 2', component: DayOneRoundTwo},
  {path: '/2023usopen/day2-round1', name: 'Day 2, Round 1', component: DayTwoRoundOne},
  {path: '/2023usopen/day2-round2', name: 'Day 2, Round 2', component: DayTwoRoundTwo},
  {path: '/2023usopen/day3', name: 'Day 3', component: DayThree},
  {path: '/2023usopen/day4', name: 'Day 4', component: DayFour},
  {path: '/2023usopen/day5', name: 'Day 5', component: DayFive},
  {path: '/2023usopen/day6', name: 'Day 6', component: DaySix},
  {path: '/2023usopen/semis', name: 'Semifinals', component: Semis},
  {path: '/2023usopen/finals', name: 'Finals', component: Finals},
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router