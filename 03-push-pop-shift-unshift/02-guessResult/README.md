ผลจากการรันคำสั่งในบรรทัด * คืออะไร

```js
const arr = ["a", "b"];

arr.push(function() {
  alert(this);
})

arr[2](); // * alert a,b,function()
```