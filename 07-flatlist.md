# `<FlatList>`

[docs](https://reactnative.dev/docs/flatlist)

`<FlatList>` can abstract some boilerplate of rendering an array of items

- scrollable by default
- in order to constrain memory and enable smooth scrolling, content is rendered asynchronously offscreen (contrast with `<ScrollView>` and `map()` which renders *everything*)
  - probably better for very large lists
- feed it props instead of calling `map()`
  - pass array into `data` prop (REQUIRED)
  - pass callback function returning JSX into `renderItem` prop (REQUIRED)
- automatically checks for `item.key`, then `item.id`, then list index
 - can also pass a function into `keyExtractor` prop to look for specified keys
- can adjust layout with `numColumns` prop
