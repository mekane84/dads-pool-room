<script setup>
import WelcomeItem from "@/components/WelcomeItem.vue";
import IconTooling from "@/components/icons/IconTooling.vue";
import IconFinals from "@/components/icons/IconFinals.vue";
</script>

<template>
  <main>
    <div class="container">
      <h2>Hanoi Open Pool Championship 2025</h2>
      
      <WelcomeItem>
        <template #icon>
          <IconTooling />
        </template>
        <template #heading>Tournament Info</template>
        <p>
          The Hanoi Open Pool Championship took place in Hanoi, Vietnam, featuring the world's best 9-ball players.
        </p>
      </WelcomeItem>

      <WelcomeItem>
        <template #icon>
          <IconFinals />
        </template>
        <template #heading>Match Coverage</template>
        <ul>
          <li>
            <router-link to="/2025/hanoi-open/day2">Day 2</router-link>
          </li>
        </ul>
      </WelcomeItem>
    </div>
  </main>
</template>

<style scoped>
.container {
  padding: 20px;
}
</style>
