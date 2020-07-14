#### demo1
> 由于相较于 react,我对 vue 更加熟悉，所以我是用 vue 的生命周期来理解 useEffect 的。 
* useEffect 可以代替
1. 作为 componentDidMount（mounted）使用。[]作第二个参数
2. 作为 componentDidUpdate 使用，可指定依赖（watch）,不指定依赖则任何 state 更新都会触发 useEffect（updated）
3. 作为 componentWillUnmount（beforeDestroyed）使用，通过 return

#### demo2
> 测试 useEffect,useLayoutEffect 执行时间，可以发现这两个函数是异步的，执行时间晚于 virtual DOM 形成时间
```
App()->virtual DOM->DOM树->浏览器渲染节点（render）
```
* useEffect：afterRender，在 render 之后执行（就是 mounted 嘛，只在第一次 render 后触发 useEffect,之后 render 不触发 useEffect）
* useLayoutEffect:beforeRender,在 render 之前执行 
* 优先使用 useEffect（优先渲染，让用户尽快看到渲染好的页面，提升用户体验）

---
```
import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";

function Counter() {
  const [count, setCount] = useState(0);

  console.log(`${count} is count`);
  const [delay, setDelay] = useState(1000);

  useInterval(() => {
    // Your custom logic here
    console.log(`in callback, count is ${count}`);
    setCount(count + 1);
  }, delay);

  function handleDelayChange(e) {
    setDelay(Number(e.target.value));
  }

  return (
    <>
      <h1>{count}</h1>
      <input value={delay} onChange={handleDelayChange} />
    </>
  );
}

function useInterval(callback, delay) {
  // const savedCallback = useRef();

  // savedCallback.current = callback;

  // Remember the latest function.
  // useEffect(() => {
  //   savedCallback.current = callback;
  // }, [callback]);

  // Set up the interval.
  useEffect(() => {
    console.log("delay change");
    function tick() {
      callback();
    }
    if (delay !== null) {
      console.log("setId");
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Counter />, rootElement);

/**
 * const count=0,callback 始终只能访问这个 count
 * 执行 useInterval
 * let callback=()=>{...};let delay=1000
 * function tick(){...}
 * id=setInterval(tick, delay);
 *
 * 1s到了，执行 tick
 * 执行 callback
 * 执行 setCount
 * const count=1
 * 执行 useInterval
 * let callback=()=>{...};let delay=1000
 * 
 * 2s到了，执行tick
 * 执行 callback
 * 执行 setCount
 * const count=1
 * 
 * 3s到了，执行tick
 * 执行 callback
 * 执行 setCount
 * const count=1
 * 
 * ...
 *
 */
```
