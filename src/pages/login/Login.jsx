import './login.css';

function Login() {
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
                    <div className="loginBox">
                        <input placeHolder="Email" type="Email" className="loginInput" />
                        <input placeHolder="Password" type="password" className="loginInput"></input>
                        <button className="loginButton">Log In</button>
                        <span className="loginForgot">Forgot Password?</span>
                        <button className="loginRegisterButton">Create a New Account</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Login;