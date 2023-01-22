import React from 'react'
import { useParams } from 'react-router-dom'
import items from '../db/items'


function Products() {
  const params = useParams()
  return (
    <>
    <div>Products</div>
      <br />
    <p>You select : {items[params.idx]}</p>
    </>
  )
}

export default Products