import React, {useState} from "react";


export const Login = (props) => {
    const [input, setInput] = useState({
        email: '',
        password: '',
    });

    const [error, setError] = useState({
        username: '',
        password: '',
        confirmPassword: ''
    });
    const onInputChange = e => {
        const { name, value } = e.target;
        setInput(prev => ({
          ...prev,
          [name]: value
        }));
        validateInput(e);
    }
    const validateInput = e => {
        let { name, value } = e.target;
        setError(prev => {
          const stateObj = { ...prev, [name]: "" };
       
          switch (name) {
            case "email":
                if (!value) {
                    stateObj[name] = "Please enter Email.";
                }
            break;
            case "password":
              if (!value) {
                stateObj[name] = "Please enter Password.";
              }
              break;
       
            default:
            break;
          }
       
        return stateObj;
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(input);
    }
    return(
        <div className="login-div">
          <h2 className="headerText">Login</h2>
        <form className="login-form" onSubmit={handleSubmit}>
            <label htmlFor="email">email</label>
            <input value={input.email} onChange={onInputChange} type="email" placeholder="Enter your email address" id="email" name="email"/>
            <div className="error">{error.email && <span className='err'>{error.email}</span>}</div>

            <label htmlFor="password">password</label>
            <input value={input.password} onChange={onInputChange} type="password" placeholder="Enter your email password" id="password" name="password"/>
            <div className="error">{error.password && <span className='err'>{error.password}</span>}</div>

            <button className="submitButton" type="submit">Login</button>
        </form>
        <button className="link-btn link-btn-hover" onClick={() => props.FormSwitch('register')}>Don't have an account? Sign up.</button>
        </div>
    )
}