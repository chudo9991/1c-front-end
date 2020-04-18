<style scoped>
    .feed {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
    }
    .photo {
        max-width: 500px;
        margin-bottom: 50px;
    }
    .photo__header {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .photo img {
        width: 100%;
        height: 100%;
    }
</style>

<template>
    <div class="page">
        <navigation></navigation>
        <div class="feed">
            <div class="feed__row">
                <div v-for="photo in photos" class="photo panel panel-default">
                    <div class="photo-heading">
                        <div class="photo__header">
                            <span class="panel-titel">{{ photo.user }}</span>
                            <span class="glyphicon glyphicon-user"></span>
                        </div>
                        <div class="panel-body">
                            <img v-bind:src="'/uploads/' + photo.image">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    module.exports = {
        data: function() {
            return { photos: [] };
        },
        mounted: function() {
            this.$http.get("/feed", { bearer: true })
                .then(function(response) {
                    this.photos = response.body;
                });
        },
        components: { navigation: require("./navigation.vue")}
    };
</script>