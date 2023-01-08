import React from 'react'


export const Card = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      <p>{props.info}</p>
    </div>
  )
}


export const Footer = () => {
  return (
    <>
    <div>Footer</div>
    <div>
    <Card title='card1' info='i am first card'/>
    </div>
    </>
  )
}
