<script setup>
import WelcomeItem from './WelcomeItem.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
import ToolingIcon from './icons/IconTooling.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'
import CommunityIcon from './icons/IconCommunity.vue'
import SupportIcon from './icons/IconSupport.vue'
</script>

<template>
  <main>
    <WelcomeItem>
      <template #icon>
        <DocumentationIcon />
      </template>
      <template #heading>Day One</template>
      <ul>
        <li>
          <router-link to="/preview">Preview</router-link>
        </li>
        <li>
          <router-link to="/day1-round1">Part One</router-link>
        </li>
        <li>
          <router-link to="/day1-round2">Part Two</router-link>
        </li>
      </ul>
    </WelcomeItem>

    <WelcomeItem>
      <template #icon>
        <ToolingIcon />
      </template>
      <template #heading>Day Two</template>
      <ul>
        <li>
          <router-link to="/day2-round1">Part One</router-link>
        </li>
        <li>
          <router-link to="/day2-round2">Part Two</router-link>
        </li>
      </ul>
    </WelcomeItem>

    <WelcomeItem>
      <template #icon>
        <EcosystemIcon />
      </template>
      <template #heading>
        <router-link to="/day3">Day Three</router-link>
      </template>

    </WelcomeItem>

    <WelcomeItem>
      <template #icon>
        <CommunityIcon />
      </template>
      <template #heading>
        <router-link to="/day4">Day Four</router-link>
      </template>
    </WelcomeItem>

    <WelcomeItem>
      <template #icon>
        <SupportIcon />
      </template>
      <template #heading>
        <router-link to="/day5">Day Five: Round of 16</router-link>
      </template>
    </WelcomeItem>

    <WelcomeItem>
      <template #icon>
        <SupportIcon />
      </template>
      <template #heading>
        <router-link to="/day6">Day Six: Quarterfinals</router-link>
      </template>
    </WelcomeItem>
  </main>
</template>
