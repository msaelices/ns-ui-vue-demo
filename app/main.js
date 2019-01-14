import Vue from 'nativescript-vue'
import VueDevtools from 'nativescript-vue-devtools'
import RadListView from 'nativescript-ui-listview/vue'
import RadCalendar from 'nativescript-ui-calendar/vue'
import RadDataForm from 'nativescript-ui-dataform/vue'
import RadChart from 'nativescript-ui-chart/vue'
import RadSideDrawer from 'nativescript-ui-sidedrawer/vue'

Vue.use(VueDevtools)
Vue.use(RadListView)
Vue.use(RadCalendar)
Vue.use(RadChart)
Vue.use(RadDataForm)

import * as comps from './components'
import * as views from './views'

import './styles.scss'

const appComponents = [
  comps.ItemList,
  views.Calendar,
  views.Chart,
  views.DataForm,
  views.Home,
  views.List,
  views.Root
]

// Bind own components
for (let c of appComponents) {
  Vue.component(c.name, c)
}

// Prints Vue logs when --env.production is *NOT* set while building
Vue.config.silent = (TNS_ENV === 'production')

new Vue({
  render: h => h(views.Root),
}).$start()
