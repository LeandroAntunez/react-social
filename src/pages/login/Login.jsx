import './login.css';
import { useContext, useRef } from "react";
import { loginCall } from '../../apiCalls';
import { AuthContext } from '../../context/AuthContext';
import { CircularProgress } from "@material-ui/core";

function Login() {
    const email = useRef();
    const password = useRef();
    const { user, isFetching, error, dispatch } = useContext(AuthContext);

    const handleClick = (e) => {
        e.preventDefault();
        loginCall({ email: email.current.value, password: password.current.value }, dispatch);
    }

    return (
        <div className='login'>
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">Leansocial</h3>
                    <span className="loginDesc">
                        Connect with friends and the world around you on Leansocial.
                    </span>
                </div>
                <div className="loginRight">
                    <form className="loginBox" onSubmit={handleClick}>
                        <input placeHolder="Email" required type="Email" className="loginInput" ref={email} />
                        <input placeHolder="Password" minLength="6" required type="password" className="loginInput" ref={password} ></input>
                        <button className="loginButton" type='submit' disabled={isFetching}>{isFetching ? <CircularProgress color="white" size="20px" /> : "Log In"}</button>
                        <span className="loginForgot">Forgot Password?</span>
                        <button className="loginRegisterButton">
                            {isFetching ? <CircularProgress color="white" size="20px" /> : "Create a New Account"}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Login;