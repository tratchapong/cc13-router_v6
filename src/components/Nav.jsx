import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <>
      <br />
      <nav>
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/services">Services</Link>
        <Link to="/about">About</Link>
      </nav>
      <br />
    </>
  )
}

export default Nav