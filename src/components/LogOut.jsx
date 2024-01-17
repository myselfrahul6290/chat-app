import React from 'react'
import { Auth } from '../Firebase'


const signOut=()=>{
    signOut(Auth)
}

function LogOut() {
  return (
    <div>
      <button onClick={()=>Auth.signOut()}>LogOUT</button>
    </div>
  )
}

export default LogOut
