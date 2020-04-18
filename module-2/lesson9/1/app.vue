<template>
   <movie name="Фильм" year="1970"
      poster-url="https://placehold.it/500"></movie>
</template>

<script>
    var Movie = require("./movie.vue");
    module.exports = {
        components: {
            movie: Movie
        }
    };
</script>