<template>
  <section class="jumbotron">
    <h3 class="jumbotron-heading">Search Github Users</h3>
    <div>
      <input type="text" placeholder="enter the name you search" v-model="keyWord"/>&nbsp;
      <button @click="searchUsers">Search</button>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'Search',
    data() {
      return {
        keyWord: ''
      }
    },
    methods: {
      searchUsers() {
        this.$bus.$emit('updateListData' ,{isFirst: false , isLoading: true , errMsg: '' , users: []});

        // vue-resource插件库给vm、vc身上都加了$http属性用于发ajax请求（与axios发送请求相同）
        this.$http.get(`https://api.github.com/search/users?q=${this.keyWord}`).then(
          response => {
            this.$bus.$emit('updateListData' ,{isLoading: false , errMsg: '' , users: response.data.items});
          },
          error => {
            this.$bus.$emit('updateListData' ,{isLoading: false , errMsg: error.message , users: []});
          }
        );
      }
    },
  }
</script>