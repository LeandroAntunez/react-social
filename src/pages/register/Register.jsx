import './register.css';
import { useRef } from 'react';
import { useNavigate } from 'react-router';
import axios from "axios";

export default function Register() {
    const username = useRef();
    const email = useRef();
    const password = useRef();
    const passwordAgain = useRef();
    const history = useNavigate();

    const handleClick = async (e) => {
        e.preventDefault();
        console.log("handleclick")
        if (passwordAgain.current.value !== password.current.value) {
            password.current.setCustomValidity("Passwords don't match.");
            console.log("passwords doesnt match")
        } else {
            const user = {
                username: username.current.value,
                email: email.current.value,
                password: password.current.value,
            }
            try {
                console.log("axios post")
                await axios.post("/auth/register", user);
                history("/login");
            } catch (err) {
                console.log(err)
            }
        }
    }


    return (
        <div className='register'>
            <div className="registerWrapper">
                <div className="registerLeft">
                    <h3 className="registerLogo">Leansocial</h3>
                    <span className="registerDesc">
                        Connect with friends and the world around you on Leansocial.
                    </span>
                </div>
                <div className="registerRight">
                    <form className="registerBox" onSubmit={handleClick}>
                        <input placeholder="Username" ref={username} required type="Text" className="registerInput" />
                        <input placeholder="Email" type="email" ref={email} required className="registerInput" />
                        <input placeholder="Password" minLength="6" type="password" ref={password} required className="registerInput"></input>
                        <input placeholder="Password Again" minLength="6" type="password" ref={passwordAgain} required className="registerInput" />
                        <button className="registerButton" type='submit'>Sign up</button>
                        <button className="registerRegisterButton">Log into Account</button>
                    </form>
                </div>
            </div>
        </div>
    )
}