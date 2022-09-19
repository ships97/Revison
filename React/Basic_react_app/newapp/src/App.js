import logo from './logo.svg';
import './App.css';
import { Test } from './components/Test';
import { MainRoutes } from './components/page/MainRoutes';
import { Navbar } from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <MainRoutes/>
      
    </div>
  );
}

export default App;
