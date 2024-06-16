<script setup>

import WelcomeItem from "@/components/WelcomeItem.vue";
import IconFinals from "@/components/icons/IconFinals.vue";
import OneIcon from "@/components/icons/IconOne.vue";
</script>

<template>
  <main>
    <div>
      <h2>Tony Chohan vs Billy Thorpe</h2>
      <WelcomeItem>
        <template #icon>
          <OneIcon />
        </template>
        <template #heading>1st Match</template>
        <ul>
          <li>
            <a href="https://poolactiontv.com/programs/tony-chohan-v-billy-thorpe-champions-challenge-one-pocket-2024-day-1-871e1b?category_id=200424" target="poolmatches">
              Day 1
            </a>
          </li>
          <li>
            <a href="https://poolactiontv.com/programs/tony-chohan-v-billy-thorpe-champions-challenge-one-pocket-2024-day-2-08b170?category_id=200424" target="poolmatches">
              Day 2
            </a>
          </li>
          <li>
            <a href="https://poolactiontv.com/programs/tony-chohan-v-billy-thorpe-champions-challenge-one-pocket-2024-day-3-0166cd?category_id=200424" target="poolmatches">
              Day 3
            </a>
          </li>
        </ul>
      </WelcomeItem>
      <WelcomeItem>
        <template #icon>
          <IconFinals />
        </template>
        <template #heading>Re-Match</template>
        <ul>
          <li>
            <a href="https://poolactiontv.com/programs/the-re-match-billy-vs-tony-2024-friday-26825a?category_id=200424" target="poolmatches">
              Friday / Day 1
            </a>
          </li>
          <li>
            <a href="https://poolactiontv.com/programs/the-re-match-billy-vs-tony-2024-saturday-ac1709?category_id=200424" target="poolmatches">
              Saturday
            </a>
          </li>
          <li>
            <a href="https://poolactiontv.com/programs/the-re-match-billy-vs-tony-2024-final-day-cfeb28?category_id=200424" target="poolmatches">
              Final Day
            </a>
          </li>
        </ul>
      </WelcomeItem>
    </div>
  </main>
</template>

<style scoped>

</style>