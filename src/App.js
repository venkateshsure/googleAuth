import { signInWithPopup, GoogleAuthProvider,signOut } from "firebase/auth";

import {auth} from './firebase'

import {useState,useEffect} from 'react'


const App=()=>{
  const [user,setUser]=useState(null)
  useEffect(()=>{
    auth.onAuthStateChanged(person=>{
      if(person){
        setUser(person)
      }
      else{
        setUser(null)
      }
    })
  },[])


  const signIn=async()=>{
      try{
          await signInWithPopup(auth, new GoogleAuthProvider())
        }
      catch(error){
        console.log(error)
      } 
    }



  const handleSignOut = async () => { 
    try {
      await signOut(auth); 
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <div>
      <center>
       {
       user?<div><h1>welcome to home</h1><button onClick={handleSignOut}>sign out</button></div>:<button onClick={signIn}>Sign In With Google</button>}
      </center>
    </div>
  )
}

export default App