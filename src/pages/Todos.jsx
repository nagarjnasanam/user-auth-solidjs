import { currentUser } from "../auth/auth";
import {onMount} from 'solid-js'
function Todos() {
    onMount(()=>{
        console.log("userrrrrrrrrrrrr",currentUser())
    })
    return (
        <div>
            <h2>Todos</h2>
            <p>UserName :{JSON.stringify(currentUser()[0])}</p>
        </div>
    )
}

export default Todos;