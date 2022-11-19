import React from 'react'
import logo from '../images/main_logo.png'
import './navbar.css';
import {Component} from "react";

class Navbar extends Component {
    state = {clicked : false};
    handleClick = () => {
        this.setState({clicked : !this.state.clicked})
    }
    render(){
        return (
            <div>
            <nav>
                <a href='../pages/landingpage.jsx'><img className='navbarLogo' src={logo} alt="Dumbbell" /></a>
                <div>
                    <ul id='navbarUnorderedList' className={this.state.clicked ? "#navbarUnorderedList":"#navbarUnorderedList active"}>
                        <li><a href="../pages/shop.jsx">فروشگاه</a></li>
                        <li><a href="../pages/coach.jsx">مربی</a></li>
                        <li><a href="../pages/blog.jsx">مجله</a></li>
                        <li><a href="../pages/aboutus.jsx">درباره ما</a></li>
                        <li><a className='loginULNav' href="../pages/Login.jsx">ورود</a></li>
                        <li><a className='signupULNav' href="../pages/Signup.jsx">ثبت نام</a></li>
                        
                    </ul>
                </div>
                <div id='mobile' onClick={this.handleClick}>
                    <i id='bar' className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
            </nav>
            </div>
        )
    }
};

export default Navbar
