import './register.css';

export default function Register() {
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
                    <div className="registerBox">
                        <input placeHolder="Username" type="Text" className="registerInput" />
                        <input placeHolder="Email" type="Email" className="registerInput" />
                        <input placeHolder="Password" type="password" className="registerInput"></input>
                        <input placeHolder="Password Again" type="password" className="registerInput" />
                        <button className="registerButton">Sign up</button>
                        <button className="registerRegisterButton">Log into Account</button>
                    </div>
                </div>
            </div>
        </div>
    )
}