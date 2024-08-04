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

# List rendering
- `v-for`: Render a list of items by iterating over an array
- Setting the key attribute:

    - Example:  
        ```html
            <div v-for="variant in variants" :key="variant.id">{{ variant.color }}</div>
        ```
    - This unique key helps Vue to:
        - Track which items have changed, been added, or removed. Without a unique key, Vue may be not able to correctly indentify which items have changed, leading to inefficient updates and potential bugs
        - Efficiently update the DOM by reusing existing elements instead of re-rendering the entire list

    
