import { useState } from "react";
import "./app.css";

function App() {
  const [todos, setTodos] = useState(["Script lesen", "Hausaufgabe machen"]);
  const [newTodo, setNewTodo] = useState("");

  // Funktion um ToDos der Liste hinzufügen
  const addTodo = (todo) => {
    setTodos([...todos, todo]);
    setNewTodo(""); // Leert das Input-Feld
  };

  const removeTodo = (indexToDelete) => {
    const remainingTodos = todos.filter(
      (todo, index) => index !== indexToDelete,
    );
    setTodos(remainingTodos);
  };

  return (
    <div id="app">
      <header>Übung WID 3 - Array State (Lösung)</header>
      <h2> Todo-Liste</h2>
      <div id="container">
        {/* Eingabe für weitere ToDos  */}
        <div id="eingabe">
          <input
            type="text"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
          />
          <button onClick={() => addTodo(newTodo)}>Hinzufügen</button>
        </div>
        <hr />
        {/* ToDo Liste  */}
        <ol>
          {todos.map((todo, index) => (
            <li key={index}>
              <div className="todo">
                <p>{todo}</p>
                <button onClick={() => removeTodo(index)}> Löschen</button>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export default App;
