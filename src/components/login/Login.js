import React, { useState } from 'react'
import './Login.css'
import { db, auth } from '../../firebase'
import { login } from '../../features/userSlice'
import { useDispatch } from 'react-redux'


function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [name, setName] = useState("")
    const dispatch = useDispatch()

    const loginToApp = (event) => {
        event.preventDefault()

        auth.signInWithEmailAndPassword(email, password)
            .then(userAuth => {
                dispatch(login({
                    email: userAuth.user.email,
                    uid: userAuth.user.uid,
                    displayName: userAuth.user.displayName,
                    photoURL: ""
                }))
            }).catch(error => {
                alert(error)
            })

    }
    const register = () => {
        if (!name) {
            alert("please enter a full name ")
        }

        auth.createUserWithEmailAndPassword(email, password)
            .then((userAuth) => {
                userAuth.user.updateProfile({
                    displayName: name,
                    photoURL: ""
                })
                    .then(() => {
                        dispatch(login({
                            email: userAuth.user.email,
                            uid: userAuth.user.uid,
                            displayName: name,
                            photoURL: ""
                        }))
                    })
            }).catch(error => {
                alert(error.message)
            })
    }

    return (
        <div className="login">
            <img src="linkedin.png" alt="" />

            <form>
                <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                    placeholder="Full Name (required if registering)" />
                <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    placeholder="Email" />
                <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    placeholder="Password" />
                <button type="submit" onClick={loginToApp}>Sign in</button>
            </form>
            <p>
                Not a member?{" "}
                <span className="login__register" onClick={register}>
                    Register Now
                </span>
            </p>
        </div>
    )
}

export default Login
