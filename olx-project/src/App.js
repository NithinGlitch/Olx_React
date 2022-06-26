
import './App.css';
import Home from './Components/pages/Home';
import Navbarr from './Components/Navbarr';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './Components/pages/Login';
import Sell from './Components/pages/Sell';
import Products from './Components/pages/Products';
import SignUp from './Components/pages/SignUp';


function App() {
  return (
    <>
    <BrowserRouter>
    
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/home' element={<Home/>}/> 
      <Route path='/products' element={<Products/>}/>
      
      <Route path='/sell' element={<Sell/>}/>
      <Route path='/sign-up' element={<SignUp/>}/>
    </Routes>
    </BrowserRouter>
    {/* <Home /> */}
    </>
  );
}

export default App;
