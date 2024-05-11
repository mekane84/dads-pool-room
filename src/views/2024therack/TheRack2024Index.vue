<script setup>
import WelcomeItem from '@/components/WelcomeItem.vue'
import OneIcon from "@/components/icons/IconOne.vue";
import IconTooling from "@/components/icons/IconTooling.vue";
import IconEcosystem from "@/components/icons/IconEcosystem.vue";
import IconFolderTree from "@/components/icons/IconFolderTree.vue";
import CubesIcon from "@/components/icons/IconCubes.vue";
</script>

<template>
  <main>
    <WelcomeItem>
      <template #icon>
        <OneIcon />
      </template>
      <template #heading>Early Rounds</template>
      <ul>
        <li>
          <router-link to="/2024therack/part1">Part 1</router-link>
        </li>
        <li>
          <router-link to="/2024therack/part2">Part 2</router-link>
        </li>
      </ul>
    </WelcomeItem>
    <WelcomeItem>
      <template #icon>
        <CubesIcon />
      </template>
      <template #heading>Part 3</template>
      <ul>
        <li>
          <router-link to="/2024therack/part3">Part 3</router-link>
        </li>
      </ul>
    </WelcomeItem>
    <WelcomeItem>
      <template #icon>
        <IconEcosystem />
      </template>
      <template #heading>Hot Seat Match</template>
      <ul>
        <li>
          <router-link to="/2024therack/hotseat">Hot Seat Match</router-link>
        </li>
      </ul>
    </WelcomeItem>
    <WelcomeItem>
      <template #icon>
        <IconFolderTree />
      </template>
      <template #heading>Losers Bracket</template>
      <ul>
        <li>
          <router-link to="/2024therack/part4">Part 4</router-link>
        </li>
      </ul>
    </WelcomeItem>
  </main>
</template>

<style scoped>

</style>