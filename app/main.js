import Vue from 'nativescript-vue'
import VueDevtools from 'nativescript-vue-devtools'
import RadListView from 'nativescript-ui-listview/vue'

// TODO: Change to Vue.use(RadSideDrawer) when next version was released
import RadSideDrawer from 'nativescript-ui-sidedrawer/vue'

Vue.use(VueDevtools)
Vue.use(RadListView)

import * as comps from './components'
import * as views from './views'

import './styles.scss'

const appComponents = [
  comps.ItemList,
]

// Bind own components
for (let c of appComponents) {
  Vue.component(c.name, c)
}

// Prints Vue logs when --env.production is *NOT* set while building
Vue.config.silent = (TNS_ENV === 'production')

new Vue({
  render: h => h('frame',[h(views.Home)]),
}).$start()
