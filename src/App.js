import './App.css';
import Navbar from "./components/Navbar/Navbar"
import Home from './components/Home/Home';
import Applicatons from './components/Applications/Applicatons';
import { Route, Routes } from 'react-router-dom';
import Products from './components/Products/Products';
import Contact from './components/Products/Contact/Contact';

function App() {
  return (
    <div className="App">
       <Navbar/>
       <Home/>
       <Applicatons/>
       <Products/>
       <Contact/>
       
    </div>
  );
}

export default App;
