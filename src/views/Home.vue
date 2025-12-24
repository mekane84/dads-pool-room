<script setup>
import { computed } from 'vue';

const tournaments = [
  { name: "US Open", path: "/2025usopen", year: 2025 },
  { name: "Buffalo's Pro Classic", path: "/2024/buffalospc", year: 2024 },
  { name: "Champions Challenge", path: "/2024/champions-challenge", year: 2024 },
  { name: "Scotty Townsend Memorial", path: "/2024/scottytownsendmemorial", year: 2024 },
  { name: "Big Tyme Classic", path: "/2024bigtymeclassic", year: 2024 },
  { name: "The Rack One Pocket Classic", path: "/2024therack", year: 2024 },
  { name: "US Open", path: "/2023usopen", year: 2023 },
];

const groupedTournaments = computed(() => {
  return tournaments.reduce((groups, tournament) => {
    const year = tournament.year;
    if (!groups[year]) {
      groups[year] = [];
    }
    groups[year].push(tournament);
    return groups;
  }, {});
});

const sortedYears = computed(() => {
  return Object.keys(groupedTournaments.value).sort((a, b) => b - a);
});
</script>

<template>
  <main>
    <div class="container">
      Tournaments:
      <div v-for="year in sortedYears" :key="year">
        <h3>{{ year }}</h3>
        <ul>
          <li v-for="tournament in groupedTournaments[year]" :key="tournament.path">
            <router-link :to="tournament.path">{{ tournament.name }}</router-link>
          </li>
        </ul>
      </div>
    </div>
  </main>
</template>

<style scoped>
</style>