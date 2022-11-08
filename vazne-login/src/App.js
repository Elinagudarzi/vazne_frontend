import React , {useState} from "react"
import {Login} from "./Login"
import {Register} from "./Register"
import "./App.css";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


function App() {
  const [curretnForm , setCurrentForm] = useState('login');
  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }
  return (
    <div className="App">
      {
        curretnForm == 'login' ? <Login FormSwitch = {toggleForm} /> : <Register FormSwitch={toggleForm}/>
      }
    </div>
  );
}

export default App;
