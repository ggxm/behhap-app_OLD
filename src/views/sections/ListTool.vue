<template>
  <section class="list-tool container-lg">

    <ul class="list-tool__items">

      <li class="list-tool__item" v-for="item of toolCollection" :key="item._id">

        <a class="list-tool__item-url" :href="item.url" target="_blank" rel="noopener noreferrer">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g data-name="Layer 2"><g data-name="external-link"><rect width="24" height="24" opacity="0"/><path d="M20 11a1 1 0 0 0-1 1v6a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h6a1 1 0 0 0 0-2H6a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3v-6a1 1 0 0 0-1-1z"/><path d="M16 5h1.58l-6.29 6.28a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0L19 6.42V8a1 1 0 0 0 1 1 1 1 0 0 0 1-1V4a1 1 0 0 0-1-1h-4a1 1 0 0 0 0 2z"/></g></g></svg>
        </a>

        <h3 class="list-tool__item-title heading h3">{{item.name}}</h3>

        <div class="list-tool__item-wrap-categories" v-if="item.categories">
          <ul class="list-tool__item-categories">
            <li class="list-tool__item-category" v-for="itemCategory of item.categories" :key="itemCategory._id">{{itemCategory.name}}</li>
          </ul>
        </div>
        
        <div class="list-tool__item-wrap-tags" v-if="item.tags">
          <p class="list-tool__item-tags-title">Tags&nbsp;:</p>
          <ul class="list-tool__item-tags">
            <li class="list-tool__item-tag" v-for="itemTag of item.tags" :key="itemTag._id">{{itemTag.name}}</li>
          </ul>
        </div>

        <div class="list-tool__item-wrap-description" v-if="item.description">
          <p class="list-tool__item-description">{{item.description}}</p>
        </div>

        <!-- <router-link :to="'/tool/'+ item._id" class="button">Voir plus</router-link> -->

      </li>

    </ul>

  </section>
</template>

<script>
  export default {
    name: "ListTool",
    components: {},

    // Bind parent component data with properties
    props: ['toolCollection'],
    
    data(){
      return {}
    },

    methods:{},

    created(){},
    mounted(){},
    destroyed(){}
  };
</script>