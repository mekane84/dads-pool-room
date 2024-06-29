<script setup>

import WelcomeItem from "@/components/WelcomeItem.vue";
import IconFinals from "@/components/icons/IconFinals.vue";
import OneIcon from "@/components/icons/IconOne.vue";
</script>

<template>
  <main>
    <div>
      <h2>Buffalo&lsquo;s Pro Classic 2024</h2>
      <WelcomeItem>
        <template #icon>
          <OneIcon />
        </template>
        <template #heading>One Pocket + Misc Events</template>
        <ul>
          <li>
            <router-link to="/2024/buffalospc/onepocket/tuesday">Tuesday</router-link>
          </li>
          <li>
            <router-link to="/2024/buffalospc/onepocket/wednesday-events-1">Wednesday + Misc Events Part 1</router-link>
          </li>
          <li>
            <router-link to="/2024/buffalospc/onepocket/wednesday-events-2">Wednesday/Thursday/Friday + Misc Events Part 2</router-link>
          </li>
          <li>
            <router-link to="/2024/buffalospc/onepocket/saturday-1">Saturday - Part 1</router-link>
          </li>
          <li>
            <router-link to="/2024/buffalospc/onepocket/saturday-2">Saturday - Part 2</router-link>
          </li>
          <li>
            <router-link to="/2024/buffalospc/onepocket/sunday-1">Sunday - Part 1</router-link>
          </li>
          <li>
            <router-link to="/2024/buffalospc/onepocket/sunday-2">Sunday - Part 2</router-link>
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
            <router-link to="/2024/buffalospc/nineball">9 Ball Parts 1 &amp; 2</router-link>
          </li>
        </ul>
      </WelcomeItem>
    </div>
  </main>
</template>

<style scoped>

</style>