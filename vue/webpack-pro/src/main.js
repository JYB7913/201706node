// 导入vuejs
import Vue from 'vue';
// 每一个组件都是.vue文件
import App from './App.vue';
import router from './router'; // 文件名叫index.js则可以省略
new Vue({
  el: '#app',
  template: '<App/>',
  components: {App},
  router // 注册路由
});
