import { onMount, createEffect,createSignal } from "solid-js";
import { auth, setAuth ,users,setUsers} from "../auth/auth";
const [username, setUsername] =createSignal("")
const [password, setPassword] =createSignal("")
import { useNavigate } from "solid-app-router";

function Signup() {

  onMount(() => {
    console.log("mounted");
    // console.log('signup',auth())
  });
  const navigate= useNavigate()
  const signup = () => {
    setUsers([...users(),{username:username(), password:password()}])
    setUsername("")
    setPassword('')
    console.log("Sign Up success")
    navigate("/signin",{replace:true,replace:true})
  };


  createEffect(() => {
    console.log("signup", users());
  });
  return (
    <div>
        <h1>SignUp Page</h1>
      <form>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Email address
          </label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={(e)=>{setUsername(e.target.value)}}
          />
          <div id="emailHelp" class="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">
            Password
          </label>
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
            onChange={(e)=>{setPassword(e.target.value)}}
          />
        </div>

        
      </form>
      <button onClick={signup} type="submit" class="btn btn-primary">
          Sign Up
        </button>
    </div>
  );
}

export default Signup;
