<script setup>
import { RouterLink } from 'vue-router'
import RoutTemplate from './views/RoutTemplate.vue'

</script>

<template>
  <div>

  <nav class="p-3 d-flex justify-content-evenly col-12 col-sm-12">
    <div v-if="!$store.state.login"><RouterLink class="text-decoration-none" to="/">Home</RouterLink></div>
    <div v-if="$store.state.login">
      <RouterLink class="text-decoration-none" to="/logout">Log out </RouterLink>
    </div>
    <div v-else="!$store.state.login">
      <RouterLink class="text-decoration-none" to="/login">Log in</RouterLink>
    </div>
  </nav>
  

  <RoutTemplate /> </div>
</template>

<style scoped>
nav {
  width: 100%;

  text-align: center;
  background-color: #a1c4fd;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
}
</style>
