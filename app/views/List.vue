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

      // in order to avoid race conditions (only on iOS),
      // in which the UI may not be completely updated here
      // we use this.$nextTick call
      this.$nextTick(() => {
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
    },

  },
};
</script>

<style scoped>
</style>
