#### demo1
> 由于相较于 react,我对 vue 更加熟悉，所以我是用 vue 的生命周期来理解 useEffect 的。 
* useEffect 可以代替
1. 作为 componentDidMount（mounted）使用。[]作第二个参数
2. 作为 componentDidUpdate 使用，可指定依赖（watch）,不指定依赖则任何 state 更新都会触发 useEffect（watch）
3. 作为 componentWillUnmount（beforeDestroyed）使用，通过 return

#### demo2
> 测试 useEffect,useLayoutEffect 执行时间，可以发现这两个函数是异步的，执行时间晚于 virtual DOM 形成时间
```
App()->virtual DOM->DOM树->浏览器渲染节点（render）
```
* useEffect：afterRender，在 render 之后执行
* useLayoutEffect:beforeRender,在 render 之前执行 
* 优先使用 useEffect（优先渲染，让用户尽快看到渲染好的页面，提升用户体验）
