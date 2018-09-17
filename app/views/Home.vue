<template>
  <Page class="page">
    <ActionBar
      color="white"
      backgroundColor="#53ba82"
      class="action-bar"
      title="NS-ui with Vue demo">
      <ActionItem icon="res://ic_menu"
                  @tap="$refs.drawer.nativeView.showDrawer()"/>
    </ActionBar>
    <StackLayout>
      <RadSideDrawer ref="drawer">
        <StackLayout ~drawerContent backgroundColor="white">
          <Label text="Drawer" />
        </StackLayout>
        <StackLayout ~mainContent class="page-content">
          <item-list
            :items="itemList"
            @itemTap="onItemTap"
            @pulling="onPulling">
          </item-list>
        </StackLayout>
      </RadSideDrawer>
    </StackLayout>
  </Page>
</template>

<script>
import { simpleItemList } from '../data';

export default {
  data() {
    return {
      itemList: simpleItemList,
      itemsPulled: 0,
    };
  },
  methods: {
    onItemTap({ item }) {
      console.log(`Tapped on ${item.name}`);
    },
    onPulling (listview) {
      this.itemsPulled++;

      setTimeout(() => {
        this.itemList.unshift({
          name: `Item ${this.itemsPulled} pulled`,
          description: 'This item was pulled',
          image: '~/assets/images/pulled.png',
        });
        listview.notifyPullToRefreshFinished();
        listview.refresh();
      })
    }
  },
};
</script>

<style scoped>
</style>
