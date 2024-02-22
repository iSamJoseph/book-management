<script setup>
</script>
<template>
    <div class="container-fluid bg-success home">
   
        <div class=" text-center mb-5"><h2 class="pt-4 text-center">Welcome  </h2>
            <p style="font-size: 17px; font-weight: 300;" class="text-white">Manage And Track All your Book Datas</p>
        </div>
    
        <div class="maindiv mt-4">
            <div class="leftdiv">
             <p class="mt-5 p-4">You Can <b class="text-white">CREATE</b> , <b class="text-white">READ</b>, <b class="text-white">UPDATE</b> ,
                 <b class="text-white">DELETE</b> <br>
                Books Data in ONE place
            </p>
            
            </div>
            <div class="rightdiv">
                <div>
                    <img src="../public/images/library-books.png" alt="Image cant load right now" class="w-100 h-100 mt-3 img-fluid rounded">
                </div>

            </div>

        </div>
       
     </div>
</template>
<style scoped>
.home{
    width: 100%;
    height: 100vh;
}
.maindiv{
    display: flex;
    justify-content: space-between;
    font-weight: 500;  
}
.leftdiv{
   
    width: 50%;
    height: 70vh;
   
}

.leftdiv p{
  font-size: 60px;
   
}
.rightdiv{
    width: 50%;
    height: 70vh;
}
</style>
