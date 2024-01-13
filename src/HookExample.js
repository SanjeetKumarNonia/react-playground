import React, { useCallback, useContext, useEffect, useState, useReducer, useRef, useMemo } from "react"

const MyContext = React.createContext(0)

const myReducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 }
      break;
    case "DECREMENT":
      return { count: state.count - 1 }
      break;
    default:
      break;
  }

}

const MyComponentP = () => {
  const myContext = useContext(MyContext)
  const [cnt, setCnt] = useState(0)

  useEffect(() => {
    document.title = `Count:${cnt}`

    return () => {
      document.title = `React App`
    }
  }, [cnt])
  //const [state, dispatch] = useReducer(myReducer, { count: 0 })
  const [state, dispatch] = useReducer(myReducer, { count: 0 });
  useEffect(() => {
    document.title = `Count:${state.count}`
  }, [state.count])
  

  // const increamet = useCallback(
  //   () => {
  //    dispatch({type:"inc"})
  //   },
  //   [dispatch],
  // )

  const increment = useCallback(() => {
    dispatch({ type: 'INCREMENT' });
  }, [dispatch])



  const decrement = useCallback(() => {
    dispatch({ type: 'DECREMENT' });
  }, [dispatch])

  const inputRef = useRef('Sanjeet');
  
const inputFocus = ()=>{
   inputRef.current.focus()
}

const squreCount = useMemo(() => {
    console.log('Memo Called')
   return  state.count *2
}, [state.count])

const testRender = ()=>{
  console.log("testRender")
  return "SANJEET"
}

  return (
    <div>
      <h1>{state.count}</h1>
      <h2>{myContext}</h2>
      <button onClick={increment} > + </button>
       &nbsp;
      <button onClick={decrement} > - </button>
      <hr></hr>
      <input type="text" ref={inputRef} ></input>       
       <button onClick={inputFocus}>Focus</button>
       <div>squreCount : {squreCount} {testRender()}</div>
    </div>
  )


}

const MyHookComponent = () => {
  return (
    <>
      <MyContext.Provider value={'Sanjeet Text'} >
        <MyComponentP />
      </MyContext.Provider>
    </>
  )
}

export default MyHookComponent