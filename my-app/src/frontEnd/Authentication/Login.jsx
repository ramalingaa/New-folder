import axios from 'axios'
import React from 'react'
import "../Address/Address.css"
import { useState } from "react"
import { useAuthContext } from '../Context/AuthContext'
import { useNavigate } from "react-router-dom"

export default function Login() {
    const [userData, setUserData] = useState({email:"", password:""})
    const {  setJwtToken } = useAuthContext()
    const navigate = useNavigate() 
    const updateUserData = (e) => {
        const { name } = e.target
        setUserData((prev) => ({...prev, [name]:e.target.value}))
    }
    const loginUser = async () => {
        try {
            
            const response = await axios.post("/api/auth/login",userData)
            localStorage.setItem("JWT_TOKEN",response.data.encodedToken)
            setJwtToken(() =>response.data.encodedToken)
            navigate("/Product")

        }catch(e) {
            console.log(e)
        }
    }
  return (
    <div className = "login-page-wrapper">
        <div className = "login-card-wrapper">
            <p className = "text-large login-header">Login</p>
            <label className = "input-label">
                <input type = "email" placeholder = " " name = "email"className = "i-text input-name login-input" onChange = {updateUserData}/>
                <span className = "input-placeholder">Email Address</span>
            </label>
            <label className = "input-label">
                <input type = "password" placeholder = " " name = "password" className = "i-text input-name login-input" onChange = {updateUserData}/>
                <span  className = "input-placeholder">Password</span>
            </label>
            <div className = "rememberMe-wrapper">
                <label><input type = "checkbox" className = "remember-checkbox"/>Remember me</label>
                <p className = "login-forgotPassword">Forgot password ?</p>
            </div>
            <button className = "btn primary" onClick = {loginUser}>Login</button>
            <p className = "login-header create-account">Create new Account</p>
        </div>
    </div>
  )
}
