import React, { useState, useEffect } from 'react'

const afterRender = useEffect

function App() {

  const [n, setN] = useState(0);

  // mounted
  afterRender(() => {
    console.log('mounted 执行')
    const id=setInterval(()=>{
    })

    // destroyed
    return ()=>{
      console.log('beforeDestroyed 执行')
      window.clearInterval(id)
    }
  }, [])

  // updated
  afterRender(() => {
    console.log('updated 执行')
  })

  // watch
  afterRender(() => {
    console.log('watch(n) 执行')// 包括第一次渲染App（即 n 被赋予初始值）
  }, [n])

  const add = () => {
    setN(n + 1)
  }

  return (
    <div>
      {n}
      <button onClick={add}>+1</button>
    </div>
  );
}

export default App