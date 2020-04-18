<style scoped>
    .gallery {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
    }
</style>

<template>
    <div class="gallery">
        <router-link v-for="(item, index) in movies"
           v-bind:to="'/items/' + index">
           <movie v-bind:name="item.name"
               v-bind:year="item.year"
               v-bind:poster-url="item.posterUrl">
           </movie>
       </router-link>
    </div>
</template>

<script>
    var Movie = require("../movie.vue");
    var Database = require("../database.js");
    module.exports = {
        data: function() {
            return {
                movies: Database
            };
        },
        components: {
            movie: Movie
        }
    };
</script>