<template>
  <div class="toolbox container-full">
    <h2 class="toolbox__title heading h2">Tools</h2>
    <ListTool :toolCollection="toolCollection" />
  </div>
</template>

<script>
  import ListTool from './sections/ListTool';

  export default {
    name: "Toolbox",
    components: {
      ListTool
    },
    data(){
      return {
        toolCollection: undefined
      }
    },
    methods:{},

    created(){
      // Fetch tool from the API
      this.$store.dispatch('fetchToolList');

      // Subscribe to store mutations
      this.$store.subscribe((mutations) => {
        // Update tool list
        if( mutations.type === "TOOLLIST" ){ this.toolCollection = mutations.payload.data }
      })
    },
    mounted(){},
    destroyed(){}
  };
</script>