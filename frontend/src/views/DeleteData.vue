<script setup>
import { onMounted } from 'vue';
import router from '@/router'
import store from '../Store/store'
import { useRoute } from 'vue-router';

const paramData = useRoute();

var id = paramData.params.id;

    onMounted(()=>{
        const answer = window.confirm(
        'Do you really want to Delete?'
      )
      if (!answer){
        router.push('/table')
      }else{
        store.dispatch('deleteData',id)

      }
    });


</script>
<template>
<div class="ddata bg-success">

  <div class="d-flex justify-content-center">
  <div class="spinner-border p-5" role="status">
  </div>
</div>

</div>
</template>

<style scoped>
.ddata{
  height: 100vh;
  width: 100%;
  display:flex;
  justify-content: center;
  align-items: center;
}
</style>