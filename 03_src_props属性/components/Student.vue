<template>
  <div>
    <h1>{{msg}}</h1>
    <h2>学生姓名：{{name}}</h2>
    <h2>学生性别：{{sex}}</h2>
    <!-- age是通过外部传入的值，不能修改age属性值 -->
    <!-- <h2>学生年龄：{{age+1}}</h2> -->
    <h2>学生年龄：{{myAge+1}}</h2>
    <!-- 隐式转换，将字符串age转换为数字 -->
    <!-- <h2>学生年龄：{{age*1+1}}</h2> -->
    <button @click="updateAge">尝试修改收到的年龄</button>
  </div>
</template>

<script>
  export default {
    name: 'Student',
    data() {
      return {
        msg: '我是一个学生',
        // 数据写死了
        /* name: '张三',
        sex: '男',
        age: 22 */
        myAge: this.age
      }
    },
    methods: {
      updateAge() {
        // 外部传入的属性值尽可能不更改，若业务需求确实需要修改，那么请复制props的内容到data中一份，然后去修改data中的数据。
        // this.age = 88;
        this.myAge++;
      }
    },
    // 简单声明接收
    // props: ['name','age', 'sex']    

    // 接收的同时对数据进行类型限制，还是会收数据，只是会报错
    // props: {
    //   name: String,
    //   age: Number,
    //   sex: String
    // }


    // 接收的同时对数据：进行类型限制+默认值的指定+必要性的限制
    props: {
      // data配置项和props配置项中的属性名重名，props中的属性名优先级更高（属性最后都在组件实例身上，所以不能重名）
      name: {
        type: String,     // name的类型是字符串
        required: true    // name必须传值
      },
      age: {
        type: Number,
        default: 99   // 不传值，默认为99
      },
      sex: {
        type: String,
        required: true
      }
    }
    
  }
</script>