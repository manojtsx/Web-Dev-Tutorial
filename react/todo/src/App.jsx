import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState(null);

  //method for handling input changes
  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  // method for adding todo
  const handleSubmit = () => {
    setTodos([...todos, todo]);
    setTodo("");
  };

  // method for deleting todo
  const handleDelete = (id) => {
    let filteredArray = todos.filter((item, index) => {
      return index !== id;
    });
    setTodos(filteredArray);
  };

  //method for editing todo
  const editTodo = (id) => {
    const filteredTodo = todos.filter((item,index)=>{
      return index === id;
    });
    setTodo(filteredTodo);
    handleDelete(id);
  };
  return (
    <>
      <div>
        <input type="text" onChange={handleChange} value={todo} />
        <button onClick={handleSubmit}>Add</button>
      </div>
      {todos.map((item, index) => {
        return (
          <ul key={index}>
            <li>
              <span>{item}</span>
              <button onClick={() => editTodo(index)}>Edit</button>
              <button onClick={() => handleDelete(index)}>Delete</button>
            </li>
          </ul>
        );
      })}
    </>
  );
}

export default App;
