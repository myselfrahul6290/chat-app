import React, { useState } from 'react'
import {Auth,db} from "../Firebase"
import "../App.css"
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';



function SendMsg({scroll}) {
    const [inputVal, setInputVal]=useState('');

    const sentMsghandle=async(e)=>{
        e.preventDefault();
        if(inputVal===''){
            alert("Your Message is empty!..");
            return;
        }
        const {uid,displayName}=Auth.currentUser;
        await addDoc(collection(db,"message"),{
            text:inputVal,
            name:displayName,
            uid,
            timestamp:serverTimestamp()
        })

        setInputVal('');
        // when new message come scroll occur
        scroll.current.scrollIntoView({behaviour:'smooth'})
        

    }

  return (
    <div>
      <form className="sendMsgInput" onSubmit={sentMsghandle}>
        <input type="text" 
        value={inputVal}
        onChange={(e)=>setInputVal(e.target.value)}
        placeholder='Write Msg...' />
        <button type='submit'>Send</button>
      </form>
    </div>
  )
}

export default SendMsg
