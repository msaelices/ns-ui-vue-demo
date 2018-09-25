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
        <StackLayout ~drawerContent
                     class="drawer"
                     backgroundColor="white"
                     drawerContentSize="150">
          <Image src="~/assets/images/NativeScript-Vue.png"
                 class="sideLogo" width="100" height="100" />
          <Label text="Primary" class="sideLabel sideLightGrayLabel"></Label>
          <Label text="Social" class="sideLabel"></Label>
          <Label text="Promotions" class="sideLabel"></Label>
          <Label text="Labels" class="sideLabel sideLightGrayLabel"></Label>
          <Label text="Important" class="sideLabel"></Label>
          <Label text="Starred" class="sideLabel"></Label>
          <Label text="Sent Mail" class="sideLabel"></Label>
          <Label text="Drafts" class="sideLabel"></Label>
        </StackLayout>
        <StackLayout ~mainContent class="page-content">
          <item-list
            ref="list"
            :items="itemList"
            @itemTap="onItemTap"
            @itemDeleted="onItemDeleted"
            @pulling="onPulling">
          </item-list>
        </StackLayout>
      </RadSideDrawer>
    </StackLayout>
  </Page>
</template>

<script>
import { simpleItemList } from '../data'

export default {
  data() {
    return {
      itemList: simpleItemList,
      itemsPulled: 0,
    }
  },
  methods: {
    onItemTap({ item }) {
      console.log(`Tapped on ${item.name}`)
    },
    onPulling (listview) {
      this.itemsPulled++

      setTimeout(() => {
        this.itemList.unshift({
          name: `Item ${this.itemsPulled} pulled`,
          description: 'This item was pulled',
          image: '~/assets/images/pulled.jpg',
        });
        listview.notifyPullToRefreshFinished()
        listview.refresh()
      })
    },
    onItemDeleted (item) {
      this.itemList.splice(this.itemList.indexOf(item), 1)
      this.$refs.list.refresh()
    }
  },
};
</script>

<style scoped>
</style>
