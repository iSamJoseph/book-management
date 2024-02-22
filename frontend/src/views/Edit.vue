<script setup>
import store from '@/Store/store'
import { onMounted } from 'vue'
import { useRoute } from 'vue-router'
import Spinners from './Spinners.vue'

const paramData = useRoute()

var id = paramData.params.id
var tit = paramData.params.title
var desc = paramData.params.description
var auth = paramData.params.author
var pub = paramData.params.publishyear

onMounted(() => {
  console.log(paramData)
  id = paramData.params.id
  tit = paramData.params.title
  desc = paramData.params.description
  auth = paramData.params.author
  pub = paramData.params.publishyear
})

function editData() {
  var data = {
    id,
    tit,
    desc,
    auth,
    pub
  }
  console.log(data)
  store.dispatch('patchData', data)
}
</script>
<template>
  <div style="background-color: #ff9a9e">
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

    <div class="editbook container-fluid">
      <form
        @submit.prevent="editData()"
        class="d-flex flex-column w-50 border border-2 p-4 rounded"
      >
        <div v-if="store.getters.getLoader"><Spinners /></div>
        <span class="text-center mb-1"><h3>Edit Book</h3></span>

        <div class="p-2">
          <label for="titl"> title</label>
          <input type="text" id="titl" v-model="tit" required class="p-1 w-100" />
        </div>

        <div class="p-2">
          <label for="aut">Author</label>
          <input type="text" id="aut" v-model="auth" class="p-1 w-100" required />
        </div>

        <div class="p-2">
          <label for="de">Description</label>
          <input type="text" id="de" v-model="desc" class="p-1 w-100" required />
        </div>

        <div class="p-2">
          <label for="pu">Publish Year</label>
          <input type="text" id="pu" v-model="pub" class="p-1 w-100" required />
        </div>

        <button class="p-1" :disabled="store.getters.getLoader" style="border-radius: 20px">Submit</button>
      </form>
    </div>
  </div>
</template>
<style scoped>
.editbook {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ff9a9e;
}

form {
  background-color: aliceblue;
}

button:hover {
  color: white;
  background-color: black;
}

.bkbtn {
  width: 120px;
  height: 35px;
}
</style>
