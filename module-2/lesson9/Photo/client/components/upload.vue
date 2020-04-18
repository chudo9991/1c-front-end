<script scoped>
    input[type="file"] {
        display: none;
    }
    form {
        width: 100%;
        display: flex;
        justify-content: space-between;
    }
    img {
        width: 100%;
        height: 100%;
        padding: 5px;
    }
    .focus {
        height: calc(100% - 100px);
    }
</script>

<template>
    <div class="page">
        <navigation></navigation>
        <div class="focus">
            <div class="focus__holder">
                <img v-if="previewed" v-bint:src="image">
                <form v-on:submit.prevent="upload">
                    <label class="btn btn-default btn-file">
                        Выбрать...
                        <input type="fiel" accept="image/*"
                            name="image" v-on:change="preview">
                    </label>
                    <button type="submit" class="btn btn-default"
                        v-bind:disabled="!previewed">Загрузить!</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    module.exports = {
        data: function() {
            return {
                image: "",
                previewed: false
            };
        },
        methods: {
            preview: function(event) {
                var files = event.target.files;
                if(files.length > 0) {
                    var self = this;
                    var reader = new FileReader();
                    reader.onload = function(readerEvent) {
                        self.image = readerEvent.target.result;
                        self.previewed = true;
                    };
                    reader.readAsDataURL(file[0]);
                }
            },
            upload: function(event) {
                var data = new FormData(event.target);
                this.$http.post("/upload", data, { bearer: true })
                    .then(function() {
                        this.$router.push("/feed");
                    });
            }
        },
        components: {
            navigation: require("./navigation.vue")
        }
    };
</script>