# Creating a Vue app

```js
const app = Vue.createApp({})
```

The `{}` means *Options object*

# Attribute binding
- `v-bind`: Dinamically bind an attribute to an expression

    - Example:
        ```html
        <img v-bind:src="image">
        ```
        + attribute --> `src`
        + expression --> `"image"`
    - Shorthand:
        ```html
        <img :src="image">
        ```
    
