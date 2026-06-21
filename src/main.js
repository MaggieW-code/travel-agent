import { createApp } from 'vue'
import 'vant/lib/index.css'
import './style.css'
import App from './App.vue'
import router from './router'
import { Button, Card, Field, CellGroup } from 'vant'

const app = createApp(App)
app.use(router)
app.use(Button)
app.use(Card)
app.use(Field)
app.use(CellGroup)
app.mount('#app')
