<template>
  <Page class="page">
    <ActionBar
      color="white"
      backgroundColor="#53ba82"
      class="action-bar"
      title="Chart demo">
    </ActionBar>
    <RadCartesianChart>
      <BarSeries v-tkCartesianSeries
                 categoryProperty="Country"
                 valueProperty="Amount"
                 :items="items" />
      <CategoricalAxis v-tkCartesianHorizontalAxis />
      <LinearAxis v-tkCartesianVerticalAxis />
    </RadCartesianChart>
  </Page>
</template>

<script>
import { getCountriesData } from '../data';

export default {
  name: 'chart-view',
  data() {
    return {
      items: getCountriesData(),
    }
  },
}
</script>

<style scoped>
</style>
