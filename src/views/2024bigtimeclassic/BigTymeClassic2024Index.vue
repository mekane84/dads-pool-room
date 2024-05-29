<script setup>
import WelcomeItem from '@/components/WelcomeItem.vue'
import OneIcon from "@/components/icons/IconOne.vue";
import IconEcosystem from "@/components/icons/IconEcosystem.vue";
import IconFolderTree from "@/components/icons/IconFolderTree.vue";
import CubesIcon from "@/components/icons/IconCubes.vue";
import IconSemi from "@/components/icons/IconSemi.vue";
import IconFinals from "@/components/icons/IconFinals.vue";
</script>

<template>
  <main>
    <h2>Big Tyme Classic 2024 &ndash; April 24-28th</h2>
    <WelcomeItem>
      <template #icon>
        <OneIcon />
      </template>
      <template #heading>One Pocket</template>
      <ul>
        <li>
          <router-link to="/2024bigtymeclassic/one-pocket/thursday">Wednesday/Thursday Part 1</router-link>
        </li>
<!--        <li>-->
<!--          <router-link to="/2024bigtymeclassic/one-pocket/friday">Friday</router-link>-->
<!--        </li>-->
      </ul>
    </WelcomeItem>
  </main>
</template>

<style scoped>

</style>