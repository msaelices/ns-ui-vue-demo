import { Color } from 'tns-core-modules/color'
import { CalendarEvent } from 'nativescript-ui-calendar'

export const getEvents = (count) => {
  let now = new Date()
  let startDate, endDate, event
  let colors = [
    new Color(200, 188, 26, 214),
    new Color(220, 255, 109, 130),
    new Color(255, 55, 45, 255),
    new Color(199, 17, 227, 10),
    new Color(255, 255, 54, 3),
  ]
  let events = new Array()
  for (let i = 1; i < count; i++) {
    startDate = new Date(
      now.getFullYear(), now.getMonth(), i * 2, 1
    )
    endDate = new Date(
      now.getFullYear(), now.getMonth(), (i * 2), 3
    )
    event = new CalendarEvent(
      `event ${i}`, startDate, endDate, false, colors[i * 10 % (colors.length - 1)]
    )
    events.push(event)
    if (i % 3 === 0) {
        const event = new CalendarEvent(`second ${i}`, startDate, endDate, true, colors[i * 5 % (colors.length - 1)])
        events.push(event)
    }
  }
  return events
}

export const getItemList = (count) => {
  let itemList = []
  for (let i = 1; i <= count; i++) {
    itemList.push({
      id: i,
      name: `Item ${i}`,
      description: `Item ${i} description`,
      image: `~/assets/images/${i % 6}.png`,
    })
  }
  return itemList
}

export const simpleItemList = getItemList(20)
