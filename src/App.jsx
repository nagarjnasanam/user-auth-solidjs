import logo from "./logo.svg";
import styles from "./App.module.css";
import { Router, Routes, Route, Link } from "solid-app-router";
import  {auth} from "./auth/auth";
import { lazy } from "solid-js";
const Signup = lazy(()=>import('./pages/Signup'));
const Signin = lazy(()=>import('./pages/Signin'));
const Todos = lazy(()=>import('./pages/Todos'));
const Redirect = lazy(()=>import('./pages/Redirect'))
import Nav from "./components/Nav"
function App() {
  return (
    <>
      <Router>
        <div class={styles.App}>
       <Nav />
          <Routes>
            <Route path="/" element={<Signup />} />
            <Route path="/signin" element={<Signin />} />
            {
                 auth() && (
                  <Route path="/todos" element={<Todos />} />
                 )
            }
            <Route path="*" element={<Signup />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
