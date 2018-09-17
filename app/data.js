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
