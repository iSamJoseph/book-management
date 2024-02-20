<script setup>
import store from '@/Store/store'


 let tit = '';
 let auth = '';
 let desc = '';
 let pub 
 function handleSubmit(){
    var payload ={
        title:tit,
        author:auth,
        description:desc,
        publishyear:pub
    }
 store.dispatch('createBook',payload)


 
}
</script>
<template>
    

    <div class="addbook container-fluid">
        <form @submit.prevent="handleSubmit()" class="d-flex flex-column  w-50 border border-2 p-4 rounded">
            <span class="text-center mb-1"><h3>Add New Book</h3></span>
            <div class="p-2" ><input type="text" placeholder="title" v-model="tit" class="p-1 w-100" required>
            </div>
            <div class="p-2" ><input type="text" placeholder="author" v-model="auth"  class="p-1 w-100" required></div>
            <div class="p-2"  ><input type="text" placeholder="description" v-model="desc"  class="p-1 w-100" required></div>
            <div class="p-2" ><input type="number" placeholder="Publishyear" v-model="pub"  class="p-1 w-100" required></div>
            <button style="border-radius: 20px;"   class="p-1">Submit</button>
        </form>
    </div> 
</template>
<style scoped>
.addbook{
    height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #c2e9fb;
}

form{
    background-color: #e2ebf0;
}
button:hover{
  color:white;
  background-color: black;
}
</style>