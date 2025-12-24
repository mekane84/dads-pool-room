<script setup>
import WelcomeItem from '../../../components/WelcomeItem.vue'
import OneIcon from '../../../components/icons/IconOne.vue'
// Import other icons as needed, similar to 2023USOpen.vue
</script>

<template>
  <main>
    <div class="header-container">
      <h2>US Open Pool Championship</h2>
      <h3 class="subtitle">August 18th-23rd 2025</h3>
    </div>
    <WelcomeItem>
      <template #icon>
        <OneIcon />
      </template>
      <ul>
        <li>
          <router-link to="/2025/usopen/day1">Day One &ndash; Table One</router-link>
        </li>
        <li>
          <router-link to="/2025/usopen/day2">Day Two &ndash; Table One</router-link>
        </li>
      </ul>
    </WelcomeItem>
  </main>
</template>

<style scoped>
.header-container {
  text-align: center;
  margin-bottom: 2rem;
}

h2 {
  margin-bottom: 0.2rem;
}

.subtitle {
  font-weight: normal;
  color: #888;
  font-size: 1.1rem;
  margin-top: 0;
}
</style>