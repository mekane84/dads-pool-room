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
          The Hanoi Open returns for its third edition from 7–12 October, once again lighting up Vietnam’s capital
          with world-class nineball action.
        </p>
        <p>
          With the prize fund rising to $200,000 and a boosted $40,000 top prize, the stakes have never been higher.
          Defending champion Johann Chua will aim to retain his crown after his thrilling win over Ko Pin Yi last year.
          But with the world’s best on the hunt, can Chua go back-to-back—or will a new king emerge in Hanoi?
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
          <li>
            <router-link to="/2025/hanoi-open/day3">Day 3</router-link>
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
