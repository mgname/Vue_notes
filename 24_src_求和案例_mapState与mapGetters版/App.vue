<template>
  <div>
    <Count/>
  </div>
</template>

<script>
  import Count from './components/Count.vue'
  export default {
    name: "App",
    components: {Count},
    mounted() {
      // console.log('App' , this);  // 使用Vuex插件并传入store配置项，vc身上多了$store属性
    }
  };
</script>