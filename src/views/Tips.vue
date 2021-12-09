<template>
  <div>
    <ListTool :toolCollection="toolCollection" />
  </div>
</template>

<script>
  import ListTool from './components/ListTool';

  export default {
    name: "Home",
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