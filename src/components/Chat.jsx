import React, { useEffect, useRef, useState } from 'react'
import Message from './Message'
import { collection, onSnapshot, orderBy, query } from "firebase/firestore"
import {db} from "../Firebase"
import SendMsg from './SendMsg';

function Chat() {

    const [message, setMessage]=useState([]);
    const scroll=useRef();
    
    //real time data read from firestore
    
    useEffect(()=>{
        const qry=query(collection(db,"message"), orderBy('timestamp'));
        const unSubscribe=onSnapshot(qry,(querrySnapshot)=>{
            let messages=[];
            querrySnapshot.forEach((doc)=>{
                messages.push({...doc.data(), id:doc.id});
            });
            setMessage(messages);
        })
        return() =>unSubscribe();
    },[])

  return (
    <div className='Main'>
     {message && message.map((msg)=>{
        // console.log(msg);
          return <Message key={msg.id} msge={msg} />
     }) 
     }
      <SendMsg scroll={scroll} />
      <span ref={scroll}></span> 
      
    </div>
  )
}

export default Chat
