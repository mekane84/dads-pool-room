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
import BTC2024OPSemiAndFinal from "@/views/2024bigtimeclassic/onepocket/BTC2024OPSemiAndFinal.vue";
import BTC20249BallFridayPart1 from "@/views/2024bigtimeclassic/nineball/BTC20249BallFridayPart1.vue";
import BTC20249BallSaturdayPart2 from "@/views/2024bigtimeclassic/nineball/BTC20249BallSaturdayPart2.vue";
import BTC20249BallSunday1 from "@/views/2024bigtimeclassic/nineball/BTC20249BallSunday1.vue";
import BTC20249BallSunday2 from "@/views/2024bigtimeclassic/nineball/BTC20249BallSunday2.vue";
import BTC20249BallSunday3 from "@/views/2024bigtimeclassic/nineball/BTC20249BallSunday3.vue";
import BTC20249BallSunday4 from "@/views/2024bigtimeclassic/nineball/BTC20249BallSunday4.vue";
import BTC20249BallHotSeat from "@/views/2024bigtimeclassic/nineball/BTC20249BallHotSeat.vue";
import BTC20249BallSemis from "@/views/2024bigtimeclassic/nineball/BTC20249BallSemis.vue";
import BTC20249BallFinal from "@/views/2024bigtimeclassic/nineball/BTC20249BallFinal.vue";
import ScottyTownsendMemorialIndex from "@/views/2024/stmemorial/ScottyTownsendMemorialIndex.vue";
import STM20249BPart1 from "@/views/2024/stmemorial/nineball/STM20249BPart1.vue";
import STM20249BPart2 from "@/views/2024/stmemorial/nineball/STM20249BPart2.vue";
import STM20249BPart3 from "@/views/2024/stmemorial/nineball/STM20249BPart3.vue";
import STM20249BPart4 from "@/views/2024/stmemorial/nineball/STM20249BPart4.vue";
import STM20249BPartHotSeat from "@/views/2024/stmemorial/nineball/STM20249BPartHotSeat.vue";
import STM20249BPart6 from "@/views/2024/stmemorial/nineball/STM20249BPart6.vue";
import STM20249BPart5 from "@/views/2024/stmemorial/nineball/STM20249BPart5.vue";
import STM20249BSemiFinal from "@/views/2024/stmemorial/nineball/STM20249BSemiFinal.vue";
import STM20249BFinal from "@/views/2024/stmemorial/nineball/STM20249BFinal.vue";
import ChampionsChallenge2024 from "@/views/2024/championschallenge/ChampionsChallenge2024.vue";

const routes = [

  {path: '/', name: 'Home', component: Home},

  {path: '/2024/champions-challenge', name: 'ChampionsChallenge2024', component: ChampionsChallenge2024},

  {path: '/2024/scottytownsendmemorial', name: 'ScottyTownsendMemorialIndex', component: ScottyTownsendMemorialIndex},
  {path: '/2024/scottytownsendmemorial/9-ball/part-1', name: 'STM20249BPart1', component: STM20249BPart1},
  {path: '/2024/scottytownsendmemorial/9-ball/part-2', name: 'STM20249BPart2', component: STM20249BPart2},
  {path: '/2024/scottytownsendmemorial/9-ball/part-3', name: 'STM20249BPart3', component: STM20249BPart3},
  {path: '/2024/scottytownsendmemorial/9-ball/part-4', name: 'STM20249BPart4', component: STM20249BPart4},
  {path: '/2024/scottytownsendmemorial/9-ball/part-5', name: 'STM20249BPart5', component: STM20249BPart5},
  {path: '/2024/scottytownsendmemorial/9-ball/hot-seat', name: 'STM20249BPartHotSeat', component: STM20249BPartHotSeat},
  {path: '/2024/scottytownsendmemorial/9-ball/part-6', name: 'STM20249BPart6', component: STM20249BPart6},
  {path: '/2024/scottytownsendmemorial/9-ball/semi-final', name: 'STM20249BSemiFinal', component: STM20249BSemiFinal},
  {path: '/2024/scottytownsendmemorial/9-ball/final', name: 'STM20249BFinal', component: STM20249BFinal},

  {path: '/2024bigtymeclassic', name: 'BigTymeClassic2024Index', component: BigTymeClassic2024Index},
  {path: '/2024bigtymeclassic/one-pocket/thursday', name: 'BTC2024OPThursday1', component: BTC2024OPThursday1},
  {path: '/2024bigtymeclassic/one-pocket/thursday-2', name: 'BTC2024OPThursday2', component: BTC2024OPThursday2},
  {path: '/2024bigtymeclassic/one-pocket/thursday-3', name: 'BTC2024OPThursday3', component: BTC2024OPThursday3},
  {path: '/2024bigtymeclassic/one-pocket/hot-seat', name: 'BTC2024OPHotSeat', component: BTC2024OPHotSeat},
  {path: '/2024bigtymeclassic/one-pocket/semis-and-finals', name: 'BTC2024OPSemiAndFinal', component: BTC2024OPSemiAndFinal},
  {path: '/2024bigtymeclassic/9-ball/friday', name: 'BTC20249BallFridayPart1', component: BTC20249BallFridayPart1},
  {path: '/2024bigtymeclassic/9-ball/saturday', name: 'BTC20249BallSaturdayPart2', component: BTC20249BallSaturdayPart2},
  {path: '/2024bigtymeclassic/9-ball/sunday-1', name: 'BTC20249BallSunday1', component: BTC20249BallSunday1},
  {path: '/2024bigtymeclassic/9-ball/sunday-2', name: 'BTC20249BallSunday2', component: BTC20249BallSunday2},
  {path: '/2024bigtymeclassic/9-ball/sunday-3', name: 'BTC20249BallSunday3', component: BTC20249BallSunday3},
  {path: '/2024bigtymeclassic/9-ball/sunday-4', name: 'BTC20249BallSunday4', component: BTC20249BallSunday4},
  {path: '/2024bigtymeclassic/9-ball/hot-seat', name: 'BTC20249BallHotSeat', component: BTC20249BallHotSeat},
  {path: '/2024bigtymeclassic/9-ball/semi', name: 'BTC20249BallSemis', component: BTC20249BallSemis},
  {path: '/2024bigtymeclassic/9-ball/final', name: 'BTC20249BallFinal', component: BTC20249BallFinal},

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