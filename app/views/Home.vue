<template>
  <Page class="page">
    <ActionBar
      color="white"
      backgroundColor="#53ba82"
      class="action-bar"
      title="NS-ui with Vue demo">
      <NavigationButton visibility="collapse" />
      <ActionItem text="Menu" @tap="$refs.drawer.nativeView.showDrawer()"/>
    </ActionBar>
    <StackLayout>
      <RadSideDrawer ref="drawer">
        <StackLayout ~drawerContent backgroundColor="white">
          <Label text="Drawer" />
        </StackLayout>
        <StackLayout ~mainContent class="page-content">
          <item-list
            :items="itemList"
            @itemTap="onItemTap"></item-list>
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
    };
  },
  methods: {
    onItemTap({ item }) {
      console.log(`Tapped on ${item.name}`);
    },
  },
};
</script>

<style scoped>
</style>
