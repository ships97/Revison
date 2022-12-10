import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrementcounter, incrementcounter } from '../store/action';

export const Counter = () => {
    const count=useSelector((state)=>state.count);
    const dispatch=useDispatch()
  return (
    <div>
        <h1>Counter:{count}</h1>
        <hr />
      <div>
      <button onClick={()=>dispatch(incrementcounter)}>  -  </button>
        <button onClick={()=>dispatch(decrementcounter)}>  +  </button>
      </div>
    </div>
  )
}
