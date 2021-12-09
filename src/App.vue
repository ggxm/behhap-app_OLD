<template>
  <div id="app">

    <HeaderApp/>
    
    <main>

      <router-view :key="$route.fullPath"></router-view>

      <FooterApp/>
      
    </main>

  </div>
</template>

<script>
  import HeaderApp from './views/sections/HeaderApp'
  import FooterApp from './views/sections/FooterApp'

  export default {
    name: 'App',
    components: {
      HeaderApp,
      FooterApp
    },
    data(){
      return{}
    },
    methods:{},
    
    created(){},
    mounted(){},
    destroyed(){}
  }
</script>