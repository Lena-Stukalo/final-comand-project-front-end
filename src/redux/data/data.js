import React from 'react'
import { useDispatch } from 'react-redux'
import { fetchData } from './operations';

export function List() {  

   
   
  const dispatch = useDispatch()
  

  return (
    <div>
     <button onClick={() => dispatch(fetchData())}>Fetch</button>
    </div>
  )
}