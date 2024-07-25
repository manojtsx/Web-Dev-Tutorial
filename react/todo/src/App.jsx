import { useEffect, useState } from "react";
import './App.css'; // Import CSS file

function App() {
  // Existing code remains unchanged
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    const TODOS = JSON.parse(localStorage.getItem("todo"));
    if (TODOS !== null) {
      setTodos(TODOS);
    }
  }, []);
  const [todo, setTodo] = useState("");

  //method for handling input changes
  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  // method for adding todo
  const handleSubmit = () => {
    const newTodos = [...todos, todo];
    setTodos(newTodos);
    setTodo("");
    localStorage.setItem("todo", JSON.stringify(newTodos));
  };

  // method for deleting todo
  const handleDelete = (id) => {
    let filteredArray = todos.filter((item, index) => {
      return index !== id;
    });
    setTodos(filteredArray);
    localStorage.setItem("todo", JSON.stringify(filteredArray));
  };

  //method for editing todo
  const editTodo = (id) => {
    const filteredTodo = todos.filter((item, index) => {
      return index === id;
    });
    setTodo(filteredTodo);
    handleDelete(id);
  };
  return (
    <>
      <div className="app-container">
        <div className="todo-input">
          <input type="text" onChange={handleChange} value={todo} />
          <button onClick={handleSubmit}>Add</button>
        </div>
        {todos.map((item, index) => {
          return (
            <ul key={index} className="todo-item">
              <li>
                <span>{item}</span>
                <button onClick={() => editTodo(index)} className="todo-button">Edit</button>
                <button onClick={() => handleDelete(index)} className="todo-button">Delete</button>
              </li>
            </ul>
          );
        })}
      </div>
    </>
  );
}

export default App;