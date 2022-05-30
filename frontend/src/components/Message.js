import React from 'react'

const Message = ({side, content, author}) => {
  return (
    <div style={{margin: '15px', padding: '10px',borderRadius: '10px 10px', backgroundColor: 'rgb(20, 20, 20)'}}>
        <h3>{author}</h3>
        <p>{content}</p>
    </div>
  )
}

export default Message