import logo from './logo.svg';
import './App.css';
import { Test } from './components/Test';
import { MainRoutes } from './components/page/MainRoutes';
import { Navbar } from './components/Navbar/Navbar';
import { Timer } from './components/Timer/Timer';

function App() {
  return (
    <div className="App">
      {/* <Navbar/> */}
      <Timer/>
      {/* <MainRoutes/> */}
      
    </div>
  );
}

export default App;
