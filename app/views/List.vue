<template>
  <Page class="page">
    <ActionBar
      color="white"
      backgroundColor="#53ba82"
      class="action-bar"
      title="RadListView demo">
    </ActionBar>
    <StackLayout>
      <item-list
        ref="list"
        :items="itemList"
        @itemTap="onItemTap"
        @itemDeleted="onItemDeleted"
        @pulling="onPulling">
      </item-list>
    </StackLayout>
  </Page>
</template>

<script>
import { simpleItemList } from '../data'

export default {
  name: 'list-view',
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
          image: '~/assets/images/pulled.png',
        });
        listview.notifyPullToRefreshFinished()
        listview.refresh()
      })
    },
    onItemDeleted (item) {
      this.itemList.splice(this.itemList.indexOf(item), 1)
      this.$refs.list.refresh()
    },

  },
};
</script>

<style scoped>
</style>
