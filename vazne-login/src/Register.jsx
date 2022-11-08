import React , {useState} from "react";



export const Register = (props) => {
    const [input , setInput] = useState(
        {
            email : '',
            username : '',
            password : '',
            confrimPassword : '',
            isCoach : false
        }
    );
    
    const [error , setError] = useState(
        {
            email : '',
            username : '',
            password : '',
            confrimPassword : ''
        }
    );
    
    const OnInputChange = e => {
        const { name, value } = e.target;
        setInput(prev => (
            {
                ...prev,
                [name]: value
            }
        )
        );
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
            case "username":
                if (!value) {
                    stateObj[name] = "Please enter Username.";
                }
            break;
 
            case "password":
                if (!value) {
                    stateObj[name] = "Please enter Password.";
                } else if (input.confirmPassword && value !== input.confirmPassword) {
                    stateObj["confirmPassword"] = "Password and Confirm Password does not match.";
                } else {
                    stateObj["confirmPassword"] = input.confirmPassword ? "" : error.confirmPassword;
                }
            break;
 
            case "confirmPassword":
                if (!value) {
                    stateObj[name] = "Please enter Confirm Password.";
                } else if (input.password && value !== input.password) {
                    stateObj[name] = "Password and Confirm Password does not match.";
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
        console.log(input)
        
    }
    return(
        <div className="register-div">
            <h2 className="headerText">Sign in</h2>
        <form className="register-form" onSubmit={handleSubmit}>

            <label htmlFor="email">email</label>
            <input value={input.email} onChange={OnInputChange} onBlur={validateInput} type="email" placeholder="Enter your email address" id="email" name="email"/>
            <div className="error">{error.email && <span className='err'>{error.email}</span>}</div>
            
            <label htmlFor="username">username</label>
            <input value={input.username} onChange={OnInputChange} onBlur={validateInput} type="text" placeholder="Enter your username" id="username" name="username"/>
            <div className="error">{error.username && <span className='err'>{error.username}</span>}</div>
            
            <label htmlFor="password">password</label>
            <input value={input.password} onChange={OnInputChange} onBlur={validateInput} type="password" placeholder="Enter your password" id="password" name="password"/>
            <div className="error">{error.password && <span className='err'>{error.password}</span>}</div>
            
            <label htmlFor="confirmPassword">confirm password</label>
            <input value={input.confrimPassword} onChange={OnInputChange} onBlur={validateInput} type="password" placeholder="Enter your password again" id="confirmPassword" name="confirmPassword"/>
            <div className="error">{error.confrimPassword && <span className='err'>{error.confrimPassword}</span>}</div>


            <label htmlFor="checkbox" >
                <input className="checkbox" type="checkbox" onChange={e => setInput(!input.isCoach)} name="checkbox" id="checkbox"/>I'm a coach
            </label>

            <button className="submitButton" type="submit">Sign up</button>

        </form>
        <button className="link-btn link-btn-hover" onClick={() => props.FormSwitch('login')}>Already have an account? Login.</button>
        </div>
    )
}