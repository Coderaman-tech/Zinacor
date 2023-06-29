import './App.css';
import Navbar from "./components/Navbar/Navbar"
import Home from './components/Home/Home';
import Applicatons from './components/Applications/Applicatons';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <Applicatons/>
    </div>
  );
}

export default App;
