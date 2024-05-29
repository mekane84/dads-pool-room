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
    <h2>The Rack 2024 &ndash; One Pocket Classic &ndash; April 3-7th</h2>
    <WelcomeItem>
      <template #icon>
        <OneIcon />
      </template>
      <template #heading>Early Rounds</template>
      <ul>
        <li>
          <router-link to="/2024therack/part1">Part 1</router-link>
        </li>
        <li>
          <router-link to="/2024therack/part2">Part 2</router-link>
        </li>
      </ul>
    </WelcomeItem>
    <WelcomeItem>
      <template #icon>
        <CubesIcon />
      </template>
      <template #heading>Part 3</template>
      <ul>
        <li>
          <router-link to="/2024therack/part3">Part 3</router-link>
        </li>
      </ul>
    </WelcomeItem>
    <WelcomeItem>
      <template #icon>
        <IconEcosystem />
      </template>
      <template #heading>Hot Seat Match</template>
      <ul>
        <li>
          <router-link to="/2024therack/hotseat">Hot Seat Match</router-link>
        </li>
      </ul>
    </WelcomeItem>
    <WelcomeItem>
      <template #icon>
        <IconFolderTree />
      </template>
      <template #heading>Losers Bracket</template>
      <ul>
        <li>
          <router-link to="/2024therack/part4">Part 4</router-link>
        </li>
      </ul>
    </WelcomeItem>
    <WelcomeItem>
      <template #icon>
        <IconFolderTree />
      </template>
      <template #heading>Part 5</template>
      <ul>
        <li>
          <router-link to="/2024therack/part5">Part 5</router-link>
        </li>
      </ul>
    </WelcomeItem>
    <WelcomeItem>
      <template #icon>
        <IconSemi />
      </template>
      <template #heading>Semi Final</template>
      <ul>
        <li>
          <router-link to="/2024therack/semi-final">Semi Final</router-link>
        </li>
      </ul>
    </WelcomeItem>
    <WelcomeItem>
      <template #icon>
        <IconFinals />
      </template>
      <template #heading>Final</template>
      <ul>
        <li>
          <router-link to="/2024therack/final">Final</router-link>
        </li>
      </ul>
    </WelcomeItem>
  </main>
</template>

<style scoped>

</style>