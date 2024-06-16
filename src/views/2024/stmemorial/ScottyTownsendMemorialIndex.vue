<script setup>
import WelcomeItem from '@/components/WelcomeItem.vue'
import IconFinals from "@/components/icons/IconFinals.vue";
</script>

<template>
  <main>
    <h2>Scotty Townsend Memorial 2024</h2>
    <WelcomeItem>
      <template #icon>
        <IconFinals />
      </template>
      <template #heading>9 Ball</template>
      <ul>
        <li>
          <router-link to="/2024/scottytownsendmemorial/9-ball/part-1">Part 1</router-link>
        </li>
        <li>
          <router-link to="/2024/scottytownsendmemorial/9-ball/part-2">Part 2</router-link>
        </li>
        <li>
          <router-link to="/2024/scottytownsendmemorial/9-ball/part-3">Part 3</router-link>
        </li>
        <li>
          <router-link to="/2024/scottytownsendmemorial/9-ball/part-4">Part 4</router-link>
        </li>
        <li>
          <router-link to="/2024/scottytownsendmemorial/9-ball/part-5">Part 5</router-link>
        </li>
        <li>
          <router-link to="/2024/scottytownsendmemorial/9-ball/hot-seat">Hot Seat</router-link>
        </li>
        <li>
          <router-link to="/2024/scottytownsendmemorial/9-ball/part-6">Part 6</router-link>
        </li>
        <li>
          <router-link to="/2024/scottytownsendmemorial/9-ball/semi-final">Semi Final</router-link>
        </li>
        <li>
          <router-link to="/2024/scottytownsendmemorial/9-ball/final">Final</router-link>
        </li>
      </ul>
    </WelcomeItem>
  </main>
</template>

<style scoped>

</style>