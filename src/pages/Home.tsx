import React from 'react'
import { Link } from 'react-router-dom'

export default function Home(): JSXElement {
  return (
    <>
      <h1>Space for awesome stuff...</h1>
      <Link to="/strategies">Strategies</Link>
    </>
  )
}
