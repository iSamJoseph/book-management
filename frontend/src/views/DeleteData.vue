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



</div>
</template>

<style scoped>
.ddata{
  height: 100vh;
  width: 100%;
}
</style>