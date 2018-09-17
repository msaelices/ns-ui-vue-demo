<template>
  <RadListView ref="listView"
               for="item in items"
               pullToRefresh="true"
               itemReorder="true"
               swipeActions="true"
               @itemTap="onItemTap"
               @pullToRefreshInitiated="onPullToRefreshInitiated"
               @itemReordered="onItemReordered"
               @itemSwipeProgressStarted="onSwipeStarted">
    <v-template>
      <GridLayout columns="50, *" rows="*" class="item">
        <Image :src="item.image" col="0" class="thumbnail" />
        <StackLayout col="1">
          <label :text="item.name" class="h2" col="1"/>
          <label :text="item.description" class="p" col="1"/>
        </StackLayout>
      </GridLayout>
    </v-template>

    <v-template name="itemswipe">
      <GridLayout columns="auto, *, auto" backgroundColor="White">
        <StackLayout id="mark-view" col="0" class="swipe-item left"
                     orientation="horizontal" @tap="onLeftSwipeClick">
          <Label text="mark" verticalAlignment="center" horizontalAlignment="center"/>
        </StackLayout>
        <StackLayout id="delete-view" col="2" class="swipe-item right"
                     orientation="horizontal" @tap="onRightSwipeClick">
          <Label text="delete" verticalAlignment="center" horizontalAlignment="center" />
        </StackLayout>
      </GridLayout>
    </v-template>
  </RadListView>
</template>

<script>
export default {
  name: 'item-list',
  props: {
    items: {
      type: Array,
      default: [],
    },
  },
  methods: {
    onItemTap (event) {
      this.$emit('itemTap', event)
    },
    onPullToRefreshInitiated ({ object }) {
      console.log('Pulling...')
      this.$emit('pulling', object)
    },
    onItemReordered({ index, data, object }) {
      console.log(`Item reordered from index ${index} to ${data.targetIndex}`)
    },
    onSwipeStarted ({ data, object }) {
      console.log(`Swipe started`)
      const swipeLimits = data.swipeLimits
      const swipeView = object
      const leftItem = swipeView.getViewById('mark-view')
      const rightItem = swipeView.getViewById('delete-view')
      swipeLimits.left = leftItem.getMeasuredWidth()
      swipeLimits.right = rightItem.getMeasuredWidth()
      swipeLimits.threshold = leftItem.getMeasuredWidth() / 2
    },
    onLeftSwipeClick ({ object }) {
      console.log('left action tapped')
      this.$emit('itemMarked', object.bindingContext)
      this.$refs.listView.notifySwipeToExecuteFinished()
    },
    onRightSwipeClick ({ object }) {
      console.log('right action tapped')
      // remove item
      this.$emit('itemDeleted', object.bindingContext)
      this.$refs.listView.notifySwipeToExecuteFinished()
    },
    refresh () {
      this.$refs.listView.refresh()
    }
  },
}
</script>

<style lang="scss">
</style>

