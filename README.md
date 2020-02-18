#### demo1
> 由于相较于 react,我对 vue 更加熟悉，所以我是用 vue 的生命周期来理解 useEffect 的。 
* useEffect 可以代替
1. 作为 componentDidMount（mounted）使用。[]作第二个参数
2. 作为 componentDidUpdate 使用，可指定依赖（watch）,不指定依赖则任何 state 更新都会触发 useEffect（watch）
3. 作为 componentWillUnmount（beforeDestroyed）使用，通过 return