## State in React Components

regular variable does not trigger re-rendering automatically after the value changes (unlike the default Angular two-way binding). So, in React we need to use `useState` to register which variable the change needs to be watched by React.

```js
const [counter, setCounter] = useState(0);
```

`setCounter` here is the function we use to update the `counter` state. Keep in mind that `setCounter` will not right away update the state once you call it.

```ts
setCounter(counter + 1);
console.log(counter); // 0
```

so, if we want to update the state to the value that depends on the previous value, it should be like this.

```ts
setCounter((prevCounter) => {
  setCounter(prevCounter + 1);
});
console.log(counter); // 1
```
