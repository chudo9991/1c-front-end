<style scoped>
    img {
        float: left;
        width: 200px;
        margin: 0 20px 20px 0;
    }
</style>

<template>
    <div>
        <h1><b>{{ item.name }}</b></h1>
        <img v-bind:src="item.posterUrl">
        <p>{{ item.description }}</p>
    </div>
</template>

<script>
    var Database = require("../database.js");
    module.exports = {
        data: function() {
            return { item: Database[this.$route.params.index] };
        }
    };
</script>