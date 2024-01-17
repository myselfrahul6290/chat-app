import React from 'react'
import { Auth } from '../Firebase';
import {useAuthState} from 'react-firebase-hooks/auth';
import SignIn from './SignIn';
import LogOut from './LogOut';

const styleCSS={
    background:"#111", 
    color:"#fff", 
    padding:"10px", 
    display:"flex", 
    justifyContent:"space-between"
}

function Navbar() {
    const [user] =useAuthState(Auth);
    console.log(user);
  return (
    <div style={ styleCSS }>
      <h2>Chat-Room</h2>
     {user? <LogOut />: <SignIn /> } 
      
    </div>
  )
}

export default Navbar
