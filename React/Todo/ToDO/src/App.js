import logo from "./logo.svg";
import "./App.css";
import { Todo } from "./components/Todo";
import { MainTodo } from "./components/Todos/MainTodo";
import { Apitodo } from "./components/Todos/Apitodo";

function App() {
  return (
    <div className="App">
      {/* <Todo /> */}
      {/* <MainTodo/> */}
      <Apitodo/>
    </div>
  );
}

export default App;
