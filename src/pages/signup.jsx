import React , {useState} from "react";



const    Signup = (props) => {
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
                    stateObj[name] = "ایمیل خود را وارد کنید";
                }
            break;
            case "username":
                if (!value) {
                    stateObj[name] = "یوزر نیم خود را وارد کنید";
                }
            break;
 
            case "password":
                if (!value) {
                    stateObj[name] = "رمز عبور خود را وارد کنید";
                } else if (input.confirmPassword && value !== input.confirmPassword) {
                    stateObj["confirmPassword"] = "!رمز عبور و تکرار رمز عبور یکی نیستن";
                } else {
                    stateObj["confirmPassword"] = input.confirmPassword ? "" : error.confirmPassword;
                }
            break;
 
            case "confirmPassword":
                if (!value) {
                    stateObj[name] = "تکرار رمز عبور خود را وارد کنید";
                } else if (input.password && value !== input.password) {
                    stateObj[name] = "!رمز عبور و تکرار رمز عبور یکی نیستن";
                }
            break;
            
            case "checkbox":
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
            <h2 className="headerText">ثبت نام</h2>
        <form className="register-form" onSubmit={handleSubmit}>

            <label htmlFor="email">ایمیل</label>
            <input value={input.email} onChange={OnInputChange} onBlur={validateInput} type="email" placeholder="ایمیل خود را وارد کنید" id="email" name="email"/>
            <div className="error">{error.email && <span className='err'>{error.email}</span>}</div>
            
            <label htmlFor="username">نام کاربری</label>
            <input value={input.username} onChange={OnInputChange} onBlur={validateInput} type="text" placeholder="نام کاربری خود را وارد کنید" id="username" name="username"/>
            <div className="error">{error.username && <span className='err'>{error.username}</span>}</div>
            
            <label htmlFor="password">رمز عبور</label>
            <input value={input.password} onChange={OnInputChange} onBlur={validateInput} type="password" placeholder="رمز عبور خود را وارد کنید" id="password" name="password"/>
            <div className="error">{error.password && <span className='err'>{error.password}</span>}</div>
            
            <label htmlFor="confirmPassword">تکرار رمز عبور</label>
            <input value={input.confrimPassword} onChange={OnInputChange} onBlur={validateInput} type="password" placeholder="رمز عبور خود را دوباره وارد کنید" id="confirmPassword" name="confirmPassword"/>
            <div className="error">{error.confrimPassword && <span className='err'>{error.confrimPassword}</span>}</div>

            <label htmlFor="checkbox" > مربی هستم
                <input className="checkbox" type="checkbox" onChange={e => setInput(!input.isCoach)} name="checkbox" id="checkbox"/>
            </label>

            <button className="submitButton" type="submit">ثبت نام</button>

        </form>
        <button className="link-btn link-btn-hover" onClick={() => props.FormSwitch('login')}>.اکانت دارید؟ وارد شوید</button>
        </div>
    )
}
export default Signup;