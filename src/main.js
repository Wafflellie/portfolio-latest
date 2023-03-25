// import { createApp } from 'vue'
// import App from './App.vue'

// import './assets/main.css'

// createApp(App).mount('#app')


import { createApp } from 'vue'
import App from './App.vue'

import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';

import './assets/main.css'


// createApp(App).mount('#app')



const app = createApp(App);



app.use(Antd).mount('#app');

