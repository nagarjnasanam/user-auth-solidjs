import { createSignal } from "solid-js";

const [auth,setAuth] = createSignal(false);
const [users,setUsers]=createSignal([{username:"1",password:'1'}]);
const [currentUser,setCurrentUser]=createSignal([])
const SignOut = ()=>{
    console.log("Signout",currentUser())
    console.log("auth",auth())
    setCurrentUser([])
    setAuth(!auth())
}


export {auth,setAuth,users,setUsers,currentUser,setCurrentUser,SignOut};

