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
                    stateObj[name] = "لطفا ایمیل خود را وارد کنید";
                }
            break;
            case "password":
              if (!value) {
                stateObj[name] = "لطفا رمز عبور خود را وارد کنید";
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
          <h2 className="headerText">ورود</h2>
        <form className="login-form" onSubmit={handleSubmit}>
            <label htmlFor="email">ایمیل</label>
            <input value={input.email} onChange={onInputChange} type="email" placeholder="" id="email" name="email"/>
            <div className="error">{error.email && <span className='err'>{error.email}</span>}</div>

            <label htmlFor="password">رمز عبور</label>
            <input value={input.password} onChange={onInputChange} type="password" placeholder="" id="password" name="password"/>
            <div className="error">{error.password && <span className='err'>{error.password}</span>}</div>

            <button className="submitButton" type="submit">ورود</button>
        </form>
        <button className="link-btn link-btn-hover" onClick={() => props.FormSwitch('register')}>آیا در وزنه اکانت ندارید؟ ثبت نام کنید</button>
        </div>
    )
}