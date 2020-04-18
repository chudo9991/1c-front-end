<style scoped>
   img {
       width: 200px;
       border-radius: inherit;
   }
   .thumbnail {
       display: inline-block;
   }
</style>

<template>
   <div class="thumbnail">
       <img v-bind:src="posterUrl">
       <div class="caption">
           <h4 class="text-center"><b>{{ name }}</b></h4>
           <p class="text-center"><i>{{ year }}</i></p>
       </div>
   </div>
</template>

<script>
   module.exports = {
      props: ["name", "year", "posterUrl"]
   };
</script>