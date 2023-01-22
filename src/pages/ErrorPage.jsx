import React from 'react'
import { useRouteError } from 'react-router-dom'

function ErrorPage() {
  const error = useRouteError()
  console.log(error)
  return (
    <div>
      <h1>Oops!!!</h1>
      <p>Somthing wrong...</p>
      <hr />
      <h4 style={{color: 'red'}}> {error.statusText || error.message} </h4>
    </div>
  )
}

export default ErrorPage