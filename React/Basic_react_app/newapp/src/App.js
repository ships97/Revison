import logo from './logo.svg';
import './App.css';
import { Test } from './components/Test';
import { MainRoutes } from './components/page/MainRoutes';
import { Navbar } from './components/Navbar/Navbar';
import { Timer } from './components/Timer/Timer';
import { LiveTodo } from './components/Livecoding/LiveTodo';

function App() {
  return (
    <div className="App">
      {/* <Navbar/> */}
      {/* <Timer/> */}
      {/* <MainRoutes/> */}
      <LiveTodo/>
      
    </div>
  );
}

export default App;
