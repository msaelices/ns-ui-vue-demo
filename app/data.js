export const getItemList = (count) => {
  let itemList = []
  for (let i = 0; i < count; i++) {
    itemList.push({
      id: i + 1,
      name: `Item ${i + 1}`,
      description: `Item ${i + 1} description`,
      image: `~/assets/images/${i % 6}.jpg`,
    })
  }
  return itemList
}

export const simpleItemList = getItemList(20)
