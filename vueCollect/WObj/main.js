//es导入模块
import Vue from './vue.js'
import App from './App.js'


new Vue({
  el:'#app',
  components:{App},
  template:`<App/>`
})


/*

 利用webpack打包，具体思想是把多个js css html image 等文件整合成一个文件，并进行一次优化



 参考文章: https://www.cnblogs.com/wendj/p/10069882.html
 https://blog.csdn.net/dypnlw/article/details/89412978
 https://www.jianshu.com/p/c25022590d0a


 1. 安装webpack，
    全局安装 npm i webpack -g
    查看 webpack -v
    npm install --save-dev webpack-cli (版本高的提示安装这个)

  2. 初始化，第一次执行打包需要初始化
     npm init

     当前文件夹下执行
     npm install webpack --save-dev


  3. 在package.json中的script属性对象中添加属性
     "dev": "webpack --mode development",
     "build": "webpack --mode production"

  4. 手动添加一个webpack.config.js文件
     主要是用于指示打包文件和被打包文件的路径，以及模式。
     每个项目都必须这个文件，它的作用如同常规的 gulpfile.js/Gruntfile.js ，就是一个配置项，告诉 webpack 它需要做什么。

  5. 打包
    webpack ./main.js ./build.js

    如果不成功，看报错情况，可能还需要执行一次 npm install webpack --save-dev



     一次打包一个文件可以实现，一次打包多个文件？？？
     如何思考这个问题？？？？




*/

