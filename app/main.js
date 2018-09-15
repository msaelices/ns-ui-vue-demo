import Vue from 'nativescript-vue';
import RadListView from 'nativescript-ui-listview/vue';

// TODO: Change to Vue.use(RadSideDrawer) when next version was released
import RadSideDrawer from 'nativescript-ui-sidedrawer/vue';

Vue.use(RadListView);

import * as views from './views';

import './styles.scss';

// Prints Vue logs when --env.production is *NOT* set while building
Vue.config.silent = (TNS_ENV === 'production');

new Vue({
  render: h => h('frame',[h(views.Home)]),
}).$start();
