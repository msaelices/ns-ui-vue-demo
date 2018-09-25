<template>
  <Page class="page">
    <ActionBar
      color="white"
      backgroundColor="#53ba82"
      class="action-bar"
      title="NS-ui with Vue">
    </ActionBar>
    <StackLayout class="page-content">
      <Label text="Home screen" class="big" />
      <Label text="Please swipe the side menu in order to navigate through the demos" :textWrap="true" />
    </StackLayout>
  </Page>
</template>

<script>
import List from '../views/List'
import Calendar from '../views/Calendar'

export default {
  name: 'home-view',
  methods: {
  },
}
</script>

<style scoped>
</style>
