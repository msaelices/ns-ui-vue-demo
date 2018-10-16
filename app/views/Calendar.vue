<template>
  <Page class="page">
    <ActionBar
      color="white"
      backgroundColor="#53ba82"
      class="action-bar"
      title="RadCalendar demo">
      <ActionItem text="Week" android.position="popup" @tap="onWeekTap"></ActionItem>
      <ActionItem text="Month" android.position="popup" @tap="onMonthTap"></ActionItem>
      <ActionItem text="Month Names" android.position="popup" @tap="onMonthNamesTap"></ActionItem>
      <ActionItem text="Year" android.position="popup" @tap="onYearTap"></ActionItem>
      <ActionItem text="Day" android.position="popup" @tap="onDayTap"></ActionItem>
    </ActionBar>
    <RadCalendar
      :eventSource="events"
      :eventsViewMode="eventsViewMode"
      :viewMode="viewMode">
    </RadCalendar>
  </Page>
</template>

<script>
import { getEvents } from '../data'
import { CalendarViewMode, CalendarEventsViewMode } from 'nativescript-ui-calendar'

export default {
  name: 'calendar-view',
  data() {
    return {
      events: getEvents(20),
      eventsViewMode: CalendarEventsViewMode.Popover,
      viewMode: CalendarViewMode.Month,
    }
  },
  methods: {
    onWeekTap() {
      this.viewMode = CalendarViewMode.Week
    },
    onMonthTap() {
      this.viewMode = CalendarViewMode.Month
    },
    onMonthNamesTap() {
      this.viewMode = CalendarViewMode.MonthNames
    },
    onYearTap() {
      this.viewMode = CalendarViewMode.Year
    },
    onDayTap() {
      this.viewMode = CalendarViewMode.Day
    },
  },
}
</script>

<style scoped>
</style>
