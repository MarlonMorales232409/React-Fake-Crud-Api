import React from 'react'

export const Message = ({msg, color}) => {
  let style = {
    backgroundColor: color,
    textAlign: 'center',
    padding: '1rem',
    margin: '3%',
    color:'#fff',
    textShadow: '1px 1px #000'
  };
  console.log(msg)
  return (
    <div style={style}>
      <h1>{msg.status}</h1>
      <h2>{msg.statusText}</h2>
    </div>
  )
}
