import { GoogleAuthProvider, signInWithRedirect } from 'firebase/auth'
import React from 'react'
import GoogleButton from 'react-google-button'
import { Auth } from '../Firebase'

// login logic
const googleSignIn=()=>{
    const provider= new GoogleAuthProvider();
    signInWithRedirect(Auth, provider)
} 

function SignIn() {
  return (
    <div style={{ display:"flex", justifyContent:"center", width:"200px" }}>
      <GoogleButton onClick={googleSignIn} />
    </div>
  )
}

export default SignIn
