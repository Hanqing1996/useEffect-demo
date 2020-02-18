import React, { useState, useEffect,useLayoutEffect } from 'react'

const afterRender = useEffect

function App() {


  console.log(`ccc:${Date.now()}`)

  console.log(`aaa:${Date.now()}`)

  useEffect(() => {
    console.log(`useEffect:${Date.now()}`)
  })

  useLayoutEffect(() => {
    console.log(`useLayoutEffect:${Date.now()}`)
  })

  console.log(`bbb:${Date.now()}`)
  const [n, setN] = useState(0);

  const add = () => {
    setN(n + 1)
  }

  return (
    <div>
      {n}
      <button onClick={add}>+1</button>
      <div>{Date.now()}</div>
    </div>
  );
}

export default App