<script setup>
</script>

<template>
  <div class="greetings">
    <h1>
      <router-link to="/">Dad&rsquo;s Pool Room</router-link>
    </h1>
    <h3>
      Relax and kick off your shoes
    </h3>
  </div>
</template>

<style scoped>
h1 {
  font-family: 'Dancing Script', 'Brush Script MT', cursive;
  font-weight: 500;
  font-size: 4.2rem;
  text-transform: none; /* Scripts usually look better without uppercase */
  letter-spacing: normal;
  color: #e0a800;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.8);
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
