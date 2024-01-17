import React from 'react'
import "../App.css"
import { Auth } from '../Firebase'

function Message({msge}) {
    const messageClass=
    msge.uid===Auth.currentUser.uid? "sender":"reciver";
  console.log(msge.uid);
  console.log(Auth.currentUser.uid);
    return (
    <div className= "message-box">
        <div className={messageClass}>
     <span>{msge.name}</span>
      <p>{msge.text}</p>
      </div>
    </div>
  )
}

export default Message
