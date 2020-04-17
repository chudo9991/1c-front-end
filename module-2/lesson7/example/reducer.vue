 <template>
            <button type="button" v-on:click="reduce">{{ referenced.value }}</button>
        </template>
        <script>
            let globals=require("./globals.js");
            module.exports={
                data: function() {
                    return {referenced: globals};
                },
            methods: {
                reduce: function() {
                    this.referenced.value-=1;
                }
            }
        };
        </script>