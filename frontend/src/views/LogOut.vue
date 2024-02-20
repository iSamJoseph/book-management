<script setup>
import { onMounted } from 'vue'
import store from '@/Store/store'
import router from '@/router'

onMounted(() => {
  store.dispatch('loginStateFal')
  router.push('/login')
});
</script>

<template>
  <div>
    <h1>Succesfully Logout</h1>
  </div>
</template>
<style scoped></style>
