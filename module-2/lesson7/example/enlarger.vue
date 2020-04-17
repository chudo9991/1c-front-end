 <template>
            <h1 v-on:mouseover="enlarge">{{ referenced.value }}</h1>
        </template>
        <script>
            let globals=require("./globals.js");
        
            module.exports={
                data: function() {
                    return {referenced: globals};
                },
                methods: {
                    enlarge: function() {
                        this.referenced.value+=1;
                    }
                }
            };
        </script>