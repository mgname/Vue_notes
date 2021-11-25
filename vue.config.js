// 脚手架配置文件（自己创建），可以对脚手架进行个性化定制，详情见：https://cli.vuejs.org/zh
// 因为此文件最后会和webpack的配置文件进行合并，将改变了的配置替换webpack配置文件中的默认配置，而webpack是基于nodejs的，所以使用CommonJS规范
// 此文件每次修改都需要重新npm run serve才能生效
module.exports = {
  pages: {
    index: {
      // 入口
      entry: 'src/main.js'
    }
  },
  lintOnSave: false,   // 关闭语法检查

  /*  
    开启代理服务器（修改了配置文件，必须重新启动才能开启代理服务器）
      第一种方法开启代理服务器缺点
        - 不能配置多个代理，例如此时的代理服务器只能将请求转发给5000端口，不能转发给其他服务器
        - 不能灵活控制是否走代理，只能是请求的数据代理服务器没有再转发，如果有则不转发
  */
  /* devServer: {
    // 代理服务器的端口号与目前所处位置相同，不需要配置，这里配置的是向哪个服务器请求数据
    proxy: 'http://localhost:5000'
  } */

  /*  
    开启代理服务器（方式二）
  */
  devServer: {
    proxy: {
      // '/api' 请求前缀，如果请求前缀为/api则走代理转发请求到target指定的服务器，否则不转发请求
      // 
      '/api': {
        target: 'http://localhost:5000',
        // 因为转发给目标服务器的请求路径也有请求前缀，目标服务器找不到在请求前缀下的文件，所有代理服务器需要重写请求路径
        pathRewrite: {
          // 匹配所有以api开头的路径，把api变为空字符串
          '^/api': ''
        },
        // ws: true,     // 用于支持websocke（客户端和服务器通信的一种方式）

        // 不写此配置，默认也为true，在react脚手架中默认值为false
        // changeOrigin: true    // 用于控制请求头中的host值，为true则将host值设置为跟目标服务器相同的值，为false则host值跟当前服务器相同
      },
      '/demo': {
        target: 'http://localhost:5001',
        // 因为转发给目标服务器的请求路径也有请求前缀，目标服务器找不到在请求前缀下的文件，所有代理服务器需要重写请求路径
        pathRewrite: {
          // 匹配所有以api开头的路径，把api变为空字符串
          '^/demo': ''
        },
        // ws: true,     // 用于支持websocke（客户端和服务器通信的一种方式）

        // 不写此配置，默认也为true，在react脚手架中默认值为false
        // changeOrigin: true    // 用于控制请求头中的host值，为true则将host值设置为跟目标服务器相同的值，为false则host值跟当前服务器相同
      }
    }
  }
};