<template>
  <RadSideDrawer ref="drawer">
    <StackLayout ~drawerContent
                 class="drawer"
                 backgroundColor="white"
                 drawerContentSize="150">
      <Image src="~/assets/images/NativeScript-Vue.png"
             class="sideLogo" width="100" height="100" />
      <Label text="Home" class="sideLabel sideLightGrayLabel"></Label>
      <Label text="List" class="sideLabel"
            @tap="goToList">
      </Label>
      <Label text="Calendar" class="sideLabel"
            @tap="goToCalendar">
      </Label>
    </StackLayout>
    <Frame ~mainContent>
      <home-view></home-view>
    </Frame>
  </RadSideDrawer>
</template>

<script>
import { Calendar, Home, List } from '../views'

export default {
  name: 'root-view',
  methods: {
    goToHome () {
      this.$navigateTo(Home)
    },
    goToList () {
      this.$navigateTo(List)
    },
    goToCalendar () {
      this.$navigateTo(Calendar)
    },
  },
}
</script>

<style scoped>
</style>
