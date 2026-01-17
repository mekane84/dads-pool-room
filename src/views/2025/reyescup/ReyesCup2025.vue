<script setup>
import WelcomeItem from "@/components/WelcomeItem.vue";
import IconTooling from "@/components/icons/IconTooling.vue";
import IconFinals from "@/components/icons/IconFinals.vue";
</script>

<template>
  <main>
    <div class="container">
      <h2>Reyes Cup 2025</h2>

      <WelcomeItem>
        <template #icon>
          <IconTooling />
        </template>
        <template #heading>Tournament Info</template>
        <p>
          The Reyes Cup returns for its second edition from 16–19 October 2025, taking place at the Ninoy Aquino
          Stadium in Manila, Philippines.
        </p>
        <p>
          Named after the legendary Efren "Bata" Reyes, this signature event features a team format pitting Asia
          against Europe in a thrilling nine-ball showdown.
        </p>
      </WelcomeItem>

      <WelcomeItem>
        <template #icon>
          <IconFinals />
        </template>
        <template #heading>Match Coverage</template>
        <ul>
          <li>
            <router-link to="/2025/reyes-cup/match1">Match 1 &ndash; Team Asia vs Team ROW</router-link>
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
