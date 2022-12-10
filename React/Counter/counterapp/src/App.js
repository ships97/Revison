import logo from "./logo.svg";
import "./App.css";
import { Counter } from "./components/Counter";
import { MainRoutes } from "./components/Auth/MainRoutes";
import { Home } from "./components/Auth/Home";

function App() {
  return (
    <div className="App">
      {/* <Counter/> */}

      {/* <MainRoutes /> */}
      <Home/>
    </div>
  );
}

export default App;
