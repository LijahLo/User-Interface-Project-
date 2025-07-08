import {BrowserRouter, Routes, Route} from "react-router-dom";
import LoginForm from "./components/LoginForm.js"
import RegisterForm from "./components/RegisterForm.js"
import Profile from "./components/Profile.js"
import Navbar from "./components/Navbar.js"
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <BrowserRouter> 
      <Routes>
      <Route path = "/" element={<Navbar />}>
      <Route index element ={<Profile />}></Route>
      <Route path = "Login" element={<LoginForm login={login}/>}/> 
      <Route path = "Register" element={<RegisterForm />}/>
      </Route> 
      </Routes>  
      </BrowserRouter> 
      </header>
    
    </div>
  );
}

export default App;
