<script setup>
import { computed } from 'vue';

const tournaments = [
  { name: "Hanoi Open Pool Championship", path: "/2025/hanoi-open", year: 2025, date: "Oct 7-12" },
  { name: "US Open Pool Championship", path: "/2025/usopen", year: 2025, date: "Aug 18-23" },
  { name: "Buffalo's Pro Classic", path: "/2024/buffalospc", year: 2024, date: "Nov 25-29" },
  { name: "Champions Challenge", path: "/2024/champions-challenge", year: 2024, date: "Oct 15-17" },
  { name: "Scotty Townsend Memorial", path: "/2024/scottytownsendmemorial", year: 2024, date: "Aug 29 - Sep 1" },
  { name: "Big Tyme Classic", path: "/2024bigtymeclassic", year: 2024, date: "Jun 12-16" },
  { name: "The Rack One Pocket Classic", path: "/2024therack", year: 2024, date: "Mar 11-13" },
  { name: "US Open", path: "/2023usopen", year: 2023, date: "Oct 23-28" },
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
      <h2>Tournaments:</h2>
      <div v-for="year in sortedYears" :key="year">
        <h3>{{ year }}</h3>
        <ul>
          <li v-for="tournament in groupedTournaments[year]" :key="tournament.path">
            <router-link :to="tournament.path">{{ tournament.name }}</router-link>
            <span v-if="tournament.date" class="tournament-date"> &ndash; {{ tournament.date }}</span>
          </li>
        </ul>
      </div>
    </div>
  </main>
</template>

<style scoped>
.tournament-date {
  font-family: "Georgia", serif;
  font-style: italic;
  font-size: 0.9em;
  color: #888;
}
</style>