<script setup>
import Spinners from './Spinners.vue'
import { ref } from 'vue'
import axios from 'axios'
import router from '@/router'
import store from '../Store/store'
import { useToast } from "vue-toastification";


const toast = useToast();

     
var text = ref('')
var psd = ref('')
var spnner = ref(false)

async function submitdata() {
  spnner.value = true
  //console.log(text.value, psd.value)

  let data = {
    username: text.value,
    password: psd.value
  }

  await axios
    .post('https://book-managementapi.onrender.com/login', data, { withCredentials: true })
    .then((resp) => {
    
      //console.log(resp)

      if (resp.status === 200) {
        store.dispatch('loginState')
        spnner.value = false;
        toast.success("Login Success", {
        timeout: 2000
      });

        return router.push('/table')
      }
    })
    .catch((err) => {
      //console.log(err)
      spnner.value = false;
      toast.error("Try Loging in Later", {
        timeout: 2000
      });
      toast.error(err.response.data.message, {
            timeout: 2000
          });
      //alert(err.response.data.message)
    })
}
</script>

<template>
  <div class="container-fluid login">
    <form
      @submit.prevent="submitdata"
      method="post"
      class="d-flex flex-column w-50 border border-2 p-4 rounded"
    >
      <div v-if="spnner"><Spinners /></div>
      <span class="text-center mb-1"><h3>Log in</h3></span>

      <div class="p-2">
        <label for="Username">Username</label>
        <input
          type="text"
          v-model="text"
          name="usrname"
          id="Username"
          required
          class="p-1 w-100"
          placeholder="UserName"
        />
      </div>

      <div class="p-2">
        <label for="Password">Password</label>
        <input
          type="password"
          v-model="psd"
          name="pwd"
          id="Password"
          placeholder="Password"
          required
          class="p-1 w-100"
        />
      </div>

      <button class="p-1" :disabled="store.getters.getLoader" style="border-radius: 20px" type="submit">Submit</button>

      <p>username:admin</p>
      <p>password:admin</p>
    </form>
  </div>
</template>
<style scoped>
.login {
  background-color: #fad0c4;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

form {
  background-color: aliceblue;
}

button:hover {
  color: white;
  background-color: black;
}
</style>
