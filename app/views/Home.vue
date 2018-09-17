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
          <RadListView ref="listView"
                       for="item in itemList"
                       @itemTap="onItemTap">
            <v-template>
              <StackLayout class="item" orientation="vertical">
                <Label class="big" :text="item.name"></Label>
                <Label :text="item.description"></Label>
              </StackLayout>
            </v-template>
          </RadListView>
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
  }
};
</script>

<style scoped>
</style>
