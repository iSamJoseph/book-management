<script setup>
import store from '@/Store/store'
import Spinners from './Spinners.vue'
import { RouterLink } from 'vue-router'

let tit = ''
let auth = ''
let desc = ''
let pub

function handleSubmit() {
  var payload = {
    title: tit,
    author: auth,
    description: desc,
    publishyear: pub
  }
  store.dispatch('createBook', payload)
}
</script>
<template>
  <div style="background-color: #c2e9fb">
    <div
      style="
        display: flex;
        justify-content: flex-end;
        align-items: end;
        padding-top: 12px;
        padding-right: 20px;
      "
    >
      <button type="button" class="btn btn-primary bkbtn">
        <RouterLink class="text-decoration-none" to="/table" style="color: azure">Back</RouterLink>
      </button>
    </div>

    <div class="addbook container-fluid">
      <form
        @submit.prevent="handleSubmit()"
        class="d-flex flex-column w-50 border border-2 p-4 rounded"
      >
        <div v-if="store.getters.getLoader"><Spinners /></div>
        <span class="text-center mb-1"><h3>Add New Book</h3></span>
        <div class="p-2">
          <input type="text" placeholder="title" v-model="tit" class="p-1 w-100" required />
        </div>
        <div class="p-2">
          <input type="text" placeholder="author" v-model="auth" class="p-1 w-100" required />
        </div>
        <div class="p-2">
          <input type="text" placeholder="description" v-model="desc" class="p-1 w-100" required />
        </div>
        <div class="p-2">
          <input type="number" placeholder="Publishyear" v-model="pub" class="p-1 w-100" required />
        </div>
        <button style="border-radius: 20px" :disabled="store.getters.getLoader" class="p-1">Submit</button>
      </form>
    </div>
  </div>
</template>
<style scoped>
.addbook {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #c2e9fb;
}

form {
  background-color: #e2ebf0;
}
form button:hover {
  color: white;
  background-color: black;
}

.bkbtn {
  width: 120px;
  height: 35px;
}
</style>
