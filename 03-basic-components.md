# basic components

## React native comes bundled with some pre-made components:

We use `<View>` and `<Text>` components to render content

### View

- a bit like a `<div>` component in `html`

- used to wrap other components

- can nest `<View>` within `<View>`

### Text

- used to output text (text nodes like in `html` don't apply here)

- text strings MUST be rendered within a `<Text>` component

### StyleSheet

- can call `StyleSheet.create()` and pass an object of camelCased style rules to then pass into a component's `style` prop

- React-Native doesn't really use CSS but we can emulate it here

- styles are NOT inherited; must attach directly (`<Text>` nested in `<Text>` is an exception)