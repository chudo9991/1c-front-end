<style scoped>
    .navbar-placeholder {
        height: 100px;
    }
</style>

<template>
    <div>
        <div class="navbar navbar-default navbar-fixed-top">
            <div class="container-fluid">
                <div class="navbar-header">
                    <router-link class="navbar-brand" to="/feed">
                        Фотолента
                    </router-link>
                </div>
                <ul class="nav navbar-nav navbar-right">
                    <li><router-link to="/upload">Загрузить</router-link></li>
                    <li><a href="#" v-on:click="logOut">Выйти</a></li>
                </ul>
            </div>
        </div>
        <div class="navbar-placeholder"></div>
    </div>
</template>

<script>
    module.exports = {
        methods: {
            logOut: function() {
                this.$outh.logOut();
                this.$router.push("/");
            }
        }
    };
</script>