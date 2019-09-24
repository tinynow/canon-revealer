# Revealer

Hide and show content by animating height smoothly.

## Features

This component is meant to be used with Vue's v-if or v-show.  It does not take any options or props. Its main feature is its simplicity.

## Usage

### Install via npm or yarn

```bash
npm install --save canon-revealer
```

### Add to your Vue application

In your entry point file, usually `main.js` or `index.js`...

```js
import Vue from "vue";
import CanonRevealer from "canon-revealer";

Vue.use(CanonRevealer);

new Vue({
// [...]
})
```

### Wrap content that has a `v-if` or `v-show`

Don't forget about accessibility.

```html
<button :aria-expanded="expanded ? 'expanded' : 'collapsed'"  type="button" @click="expanded = !expanded">
    <span aria-hidden="true">
        {{ expanded ? 'Hide' : 'Show' }}
    </span>
    Content
</button>
<canon-revealer>
<div v-show="expanded">
    <h1>Whatever content you want!</h1>
    <p>Content that you need, but most people do not need to read is the most common legit reason you should hide content in this way. Think hard before hiding content. Does it need to be there at all? Are you hiding it because of "screen real estate" even thought HTML can be infinitely long? These are not good reasons.</p>
</div>
</canon-revealer>
```
