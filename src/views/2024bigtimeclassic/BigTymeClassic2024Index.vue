<script setup>
import WelcomeItem from '@/components/WelcomeItem.vue'
import OneIcon from "@/components/icons/IconOne.vue";
import IconFinals from "@/components/icons/IconFinals.vue";
</script>

<template>
  <main>
    <h2>Big Tyme Classic 2024 &ndash; April 24-28th</h2>
    <WelcomeItem>
      <template #icon>
        <OneIcon />
      </template>
      <template #heading>One Pocket</template>
      <ul>
        <li>
          <router-link to="/2024bigtymeclassic/one-pocket/thursday">Wednesday/Thursday Part 1</router-link>
        </li>
        <li>
          <router-link to="/2024bigtymeclassic/one-pocket/thursday-2">Thursday Part 2</router-link>
        </li>
        <li>
          <router-link to="/2024bigtymeclassic/one-pocket/thursday-3">Thursday Part 3</router-link>
        </li>
        <li>
          <router-link to="/2024bigtymeclassic/one-pocket/hot-seat">Hot Seat</router-link>
        </li>
        <li>
          <router-link to="/2024bigtymeclassic/one-pocket/semis-and-finals">Semis and Finals</router-link>
        </li>
      </ul>
    </WelcomeItem>
    <WelcomeItem>
      <template #icon>
        <IconFinals />
      </template>
      <template #heading>9 Ball</template>
      <ul>
        <li>
          <router-link to="/2024bigtymeclassic/9-ball/friday">Friday/Saturday</router-link>
        </li>
        <li>
          <router-link to="/2024bigtymeclassic/9-ball/saturday">Saturday</router-link>
        </li>
        <li>
          <router-link to="/2024bigtymeclassic/9-ball/sunday-1">Sunday Part 1</router-link>
        </li>
        <li>
          <router-link to="/2024bigtymeclassic/9-ball/sunday-2">Sunday Part 2</router-link>
        </li>
        <li>
          <router-link to="/2024bigtymeclassic/9-ball/sunday-3">Sunday Part 3</router-link>
        </li>
        <li>
          <router-link to="/2024bigtymeclassic/9-ball/sunday-4">Sunday Part 4</router-link>
        </li>
        <li>
          <router-link to="/2024bigtymeclassic/9-ball/hot-seat">Hot Seat</router-link>
        </li>
        <li>
          <router-link to="/2024bigtymeclassic/9-ball/semi">Semi Final</router-link>
        </li>
        <li>
          <router-link to="/2024bigtymeclassic/9-ball/final">Final</router-link>
        </li>
      </ul>
    </WelcomeItem>
  </main>
</template>

<style scoped>

</style>