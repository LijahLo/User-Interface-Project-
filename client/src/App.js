import LoginForm from "./components/LoginForm.js"
import RegisterForm from "./components/RegisterForm.js"
import Profile from "./components/Profile.js"
import profile from "./components/Navbar.js"
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <RegisterForm />
        <LoginForm /> 
        <Profile/>
        <profile />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
