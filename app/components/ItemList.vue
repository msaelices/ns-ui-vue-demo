<template>
  <RadListView ref="listView"
               for="item in items"
               @itemTap="onItemTap">
    <v-template>
      <GridLayout columns="50, *" rows="*" class="item">
        <Image :src="item.image" col="0" class="thumbnail" />
        <StackLayout col="1">
          <label :text="item.name" class="h2" col="1"/>
          <label :text="item.description" class="p" col="1"/>
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
  },
}
</script>

<style lang="scss">
</style>

