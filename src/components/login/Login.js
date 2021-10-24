import React from 'react'
import './Login.css'

function Login() {

    const loginToApp = (event) => { 
        event.preventDefault()
    }
    const register = () => {}

    return (
        <div className="login">
            <img src="linkedin.png" alt="" />

            <form>
                <input type="text" placeholder="Full Name (required if registering)" />
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <button type="submit" onClick={loginToApp}>Sign in</button>
            </form>
            <p>
                Not a member?
                <span className="login__register" onClick={register}>Register Now</span>
            </p>
        </div>
    )
}

export default Login
