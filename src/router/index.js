import { createRouter, createWebHistory} from "vue-router";
import Home from '@/views/Home.vue'

import TheRack2024Index from '@/views/2024therack/TheRack2024Index.vue'
import TheRack2024PartOne from '@/views/2024therack/TheRack2024PartOne.vue'
import TheRack2024PartTwo from '@/views/2024therack/TheRack2024PartTwo.vue'
import TheRack2024PartThree from '@/views/2024therack/TheRack2024PartThree.vue'
import TheRack2024HotseatMatch from '@/views/2024therack/TheRack2024HotseatMatch.vue'
import TheRack2024PartFour from '@/views/2024therack/TheRack2024PartFour.vue'

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
import TheRack2024Finals from "@/views/2024therack/TheRack2024Finals.vue";
import TheRack2024SemiFinal from "@/views/2024therack/TheRack2024SemiFinal.vue";
import TheRack2024PartFive from "@/views/2024therack/TheRack2024PartFive.vue";
import BigTymeClassic2024Index from "@/views/2024bigtimeclassic/BigTymeClassic2024Index.vue";
import BTC2024OPThursday1 from "@/views/2024bigtimeclassic/onepocket/BTC2024OPThursday1.vue";
import BTC2024OPThursday2 from "@/views/2024bigtimeclassic/onepocket/BTC2024OPThursday2.vue";
import BTC2024OPThursday3 from "@/views/2024bigtimeclassic/onepocket/BTC2024OPThursday3.vue";
import BTC2024OPHotSeat from "@/views/2024bigtimeclassic/onepocket/BTC2024OPHotSeat.vue";

const routes = [

  {path: '/', name: 'Home', component: Home},

  {path: '/2024bigtymeclassic', name: 'BigTymeClassic2024Index', component: BigTymeClassic2024Index},
  {path: '/2024bigtymeclassic/one-pocket/thursday', name: 'BTC2024OPThursday1', component: BTC2024OPThursday1},
  {path: '/2024bigtymeclassic/one-pocket/thursday-2', name: 'BTC2024OPThursday2', component: BTC2024OPThursday2},
  {path: '/2024bigtymeclassic/one-pocket/thursday-3', name: 'BTC2024OPThursday3', component: BTC2024OPThursday3},
  {path: '/2024bigtymeclassic/one-pocket/hot-seat', name: 'BTC2024OPHotSeat', component: BTC2024OPHotSeat},

  {path: '/2024therack', name: 'TheRack2024Index', component: TheRack2024Index},
  {path: '/2024therack/part1', name: 'TheRack2024PartOne', component: TheRack2024PartOne},
  {path: '/2024therack/part2', name: 'TheRack2024PartTwo', component: TheRack2024PartTwo},
  {path: '/2024therack/part3', name: 'TheRack2024PartThree', component: TheRack2024PartThree},
  {path: '/2024therack/hotseat', name: 'TheRack2024HotseatMatch', component: TheRack2024HotseatMatch},
  {path: '/2024therack/part4', name: 'TheRack2024PartFour', component: TheRack2024PartFour},
  {path: '/2024therack/part5', name: 'TheRack2024PartFive', component: TheRack2024PartFive},
  {path: '/2024therack/semi-final', name: 'TheRack2024SemiFinal', component: TheRack2024SemiFinal},
  {path: '/2024therack/final', name: 'TheRack2024Finals', component: TheRack2024Finals},

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