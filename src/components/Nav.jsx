import { NavLink } from "solid-app-router";
import { Show, onMount } from "solid-js";
import { auth, setAuth,SignOut } from "../auth/auth";
function Nav() {
//   const toggle = () => setAuth(!auth());
  onMount(() => {
    console.log("auth", auth());
  });
  return (
    <div class="bg-dark">
     
      <Show when={auth()}  fallback={
          <NavLink href="/" class="btn btn-primary m-3">
          Sign up
        </NavLink>
        }>
     
      </Show>
    
      <Show
        when={auth()}
        fallback={
          <NavLink href="/Signin" >
            <button  class="btn btn-success">Sign In</button>
          </NavLink>
        }
      >
        {/* <button onClick={toggle}>Log out</button> */}
        <NavLink href="/Signin" >
          <button class="btn btn-danger" onClick={SignOut} >LogOut</button>
        </NavLink>
      </Show>
    </div>
  );
}

export default Nav;
