<script setup>
import { onMounted } from 'vue'
import store from '@/Store/store'

onMounted(() => {
  store.dispatch('getData')
});
</script>
<template>
  <div class="container-fluid p-5 maintable">
    <div class="mb-3 "> <RouterLink class="text-decoration-none text-success " to="/Addbook">Add New Book</RouterLink>
</div>

    <div>
      <table class="table" >
        <thead class="thead-dark">
          <tr>
            <th scope="col">No</th>
            <th scope="col">Title</th>
            <th scope="col">Author</th>
            <th scope="col">Puplish Year</th>
            <th scope="col" class="ml-auto">Actions</th>
          </tr>
        </thead>
        <tbody v-for="(item, index) in store.state.bookDetails" :key="index">
          <tr>
            <th scope="row">{{ index + 1 }}</th>
            <td>{{ item.title }}</td>
            <td>{{ item.author }}</td>
            <td>{{ item.publishyear }}</td>
            <td>
              <RouterLink class="text-decoration-none" style="padding-right:10px ;" :to="{name: 'edit',params: {id: item._id,
              title:item.title,  description:item.description, author:item.author, publishyear: item.publishyear
              }}">Edit</RouterLink>
              <RouterLink class="text-decoration-none" :to="{name: 'modals',params: {id: item._id}}">Delete</RouterLink>
            </td>

          
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<style scoped>
.maintable{
  height: 100vh;
  width: 100%;
  background-color: #ffecd2;
}
</style>
