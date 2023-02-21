import { currentUser } from "../auth/auth";
import { onMount } from "solid-js";
import { todos,setTodos } from "../Store/todos";
function Todos() {
  let input ;
  let todoId = 0;

  const addTodo = (text) => {
    setTodos([...todos, { id: ++todoId, text, completed: false }]);
  };

  const toggleTodo = (id) => {
    setTodos(
      (todo) => todo.id === id,
      "completed",
      (completed) => !completed
    );
  };
  onMount(() => {
    console.log("userrrrrrrrrrrrr", currentUser());
  });
  return (
    <div>
      <h2>Todos</h2>
      <p>UserName :{JSON.stringify(currentUser()[0])}</p>
      <div>
        <input ref={input} />
        <button
          onClick={(e) => {
            if (!input.value.trim()) return;
            addTodo(input.value);
            input.value = "";
          }}
        >
          Add Todo
        </button>
      </div>
      <For each={todos}>
        {(todo) => {
          const { id, text } = todo;
          console.log(`Creating ${text}`);
          return (
            <div>
              <input
                type="checkbox"
                checked={todo.completed}
                onchange={[toggleTodo, id]}
              />
              <span
                style={{
                  "text-decoration": todo.completed ? "line-through" : "none",
                }}
              >
                {text}
              </span>
            </div>
          );
        }}
      </For>
    </div>
  );
}

export default Todos;
