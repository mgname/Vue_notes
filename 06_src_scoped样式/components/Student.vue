<template>
  <div class="demo">
    <h2 class="title">学生姓名：{{name}}</h2>
    <h2>学生性别：{{sex}}</h2>
  </div>
</template>

<script>
  export default {
    name: 'Student',
    data() {
      return {
        name: '张三',
        sex: '男'
      }
    }
  }
</script>

<style lang="less" scoped>
  /* 
    lang属性指定所使用语言（css编写方式），属性值为css、less等，不写lang默认值为css，写了此属性就必须写属性值
      但脚手架处理不了less等，需要安装第三方包 
      webpack目前版本为5，但Vue官方脚手架使用webpack时不是使用的5版本（查看版本方法：node_modules->webpack->package.json->"version": "4.46.0"）
      less-loader不能直接安装，需要指定版本为8以下，8版本以上是为webpack5服务的（npm view less-loader versions查看less-loader所有版本）
      指定版本安装：npm i less-loader@6（默认安装6的最新版）
  */


  /* 编码时组件中的样式会汇总到一起，可能出现类名冲突 */
  /* 在App组件中，后引入的组件的样式覆盖先引入的组件样式 */
  .demo {
    background-color: orange;
  }
</style>