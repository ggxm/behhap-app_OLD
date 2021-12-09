<template>
  <div>
    <HeroBanner />
  </div>
</template>

<script>
  import HeroBanner from './sections/HeroBanner';

  export default {
    name: "Home",
    components: {
      HeroBanner
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