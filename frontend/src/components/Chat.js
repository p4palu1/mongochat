import React from 'react'
import { Container } from "react-bootstrap"
import Message from "./Message"


const Chat = () => {

    const messages = [
        {
            content: 'hey my name is reem',
            author: 'reem'
        },
        {
            content: 'hey my name is reem',
            author: 'reem'
        },
        {
            content: 'hey my name is reem',
            author: 'reem'
        }
    ]

  return (
    <div style={{width: '100%', height: '100vh'}}>
        <Container>
            {
                messages.map(m => <Message side="left" author={m.author} content={m.content} /> )
            }
        </Container>
    </div>
  )
}

export default Chat