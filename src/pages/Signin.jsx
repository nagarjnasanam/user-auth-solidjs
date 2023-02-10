import { createSignal, onMount,createEffect } from "solid-js";
import Todos from "./Todos";
import { useNavigate } from "solid-app-router";
import {
  auth,
  setAuth,
  users,
  setUsers,
  currentUser,
  setCurrentUser,
} from "../auth/auth";
function Signin() {
    const navigate = useNavigate();


  const [username, setUsername] = createSignal("");
  const [password, setPassword] = createSignal("");
  createEffect(() => {
    console.log('auth',auth())
  })
  const signin = () => {
    // console.log(username(),password())
    try {
      const checkUser = users().find((item) => {
        if ((item.username == username()) & (item.password == password())) {
          console.log(item);
          return item;
        }
      });
      console.log("checkUser", checkUser);

      if (checkUser) {
        setAuth(true);
        setCurrentUser([checkUser]);
        console.log(currentUser());
        if (auth()) {
            navigate("/todos", { replace: true ,resolve:true});
          }
      } else {
        console.log("no user found");
      }
    } catch (error) {
      console.log(error);
    }
  };
  onMount(() => {
    console.log("allusers", users());
  });
  return (
    <div>
        
      <h1>Sign In Page</h1>
        <div>
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
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
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
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>
          </form>
          <button onClick={signin} type="submit" class="btn btn-primary">
            SignIN
          </button>
        </div>
      
    </div>
  );
}

export default Signin;
