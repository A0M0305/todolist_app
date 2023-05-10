import "./App.css";
import React, { useState } from 'react';
import Title from "./components/Title";
import AddTodo from "./components/AddTodo";
import Todo from "./components/Todo";

import {//importing firebase
  collection,
  query,
  onSnapshot,
  doc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import { db } from "./firebase";

function App() {
  const [todos, setTodos] = React.useState([]);
  const [showDiv, setShowDiv] = useState(false);

  const toggleDiv = () => {
    setShowDiv(!showDiv);
  }

  React.useEffect(() => {
    const q = query(collection(db, "todos"));
    const unsub = onSnapshot(q, (querySnapshot) => {
      let todosArray = [];
      querySnapshot.forEach((doc) => {
        todosArray.push({ ...doc.data(), id: doc.id });
      });
      setTodos(todosArray);
    });
    return () => unsub();
  }, []);

  const handleEdit = async (todo, title) => {
    await updateDoc(doc(db, "todos", todo.id), { title: title });
  };
  const toggleComplete = async (todo) => {
    await updateDoc(doc(db, "todos", todo.id), { completed: !todo.completed });
  };
  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "todos", id));
  };
  return (
    <div className="App">
      <div id="myToDoApp">
        <img id="iconToDo" src="/tasksImage.png" alt="to do" onClick={toggleDiv} />
        {showDiv && <div id="toDoForm">
          <div>
            <Title />
          </div>
          <div>
            <AddTodo />
          </div>
          <div className="todo_container">
            {todos.map((todo) => (
              <Todo
                key={todo.id}
                todo={todo}
                toggleComplete={toggleComplete}
                handleDelete={handleDelete}
                handleEdit={handleEdit}
              />
            ))}
          </div>
        </div>}
      </div>
      <div id="moduleForum">
        <h4>Module Forum</h4>
      </div>
    </div>
  );
}
export default App;