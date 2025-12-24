<script setup>
import WelcomeItem from '../../../components/WelcomeItem.vue'
import OneIcon from '../../../components/icons/IconOne.vue'
// Import other icons as needed, similar to 2023USOpen.vue
</script>

<template>
  <main>
    <h2>US Open 2025 &ndash; 9 Ball &ndash; August 18th-23rd</h2>
    <WelcomeItem>
      <template #icon>
        <OneIcon />
      </template>
<!--      <template #heading>Day One &ndash; Table One</template>-->
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
