<template>
  <Page class="page">
    <ActionBar class="action-bar" title="Home">
    </ActionBar>
    <StackLayout>
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
  .hello-world {
    margin: 20;
  }

  Label {
    color: red;
  }
</style>
