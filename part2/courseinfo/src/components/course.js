import React from 'react'
import Content from './content'
import Header from './header'
import Total from './total'

const Course = ({title, parts}) => {
  return (
    <div>
      <Header title={title}/>
      <Content parts={parts}/>
      <Total parts={parts} />
    </div>
  )
}

export default Course