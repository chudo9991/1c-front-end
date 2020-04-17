<style scoped>
            div {
                display: inline-block;
                background: yellow;
            }
        </style>
        
        <template>
            <div>
                <p>par-cap.vue</p>
                <p>{{ pText.toUpperCase() }}</p>
                <p><input type="text" v-bind:value="pText" v-on:input="send"></p>
            </div>
        </template>
        
        <script>
            module.exports = {
                props: ["pText"],
                methods: {
                    send: function(event) {
                        this.$emit("update", event.target.value);
                    }
                }
            };
        </script>