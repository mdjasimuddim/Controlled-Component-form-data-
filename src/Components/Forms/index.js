import React, { useState } from 'react'
import style from './form.module.css'

export default function Index() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [user, setUser] = useState({name: '', email : '', password : ''})


    const handleNameChange = (e) => {
        setName(e.target.value);
    }
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }
    const handleSubmit = (e) => {
        console.log('form is submitted');
        let userInfo = {
             name,
             email,
             password
        }
        console.log(userInfo);
        e.preventDefault();
    }
  return (
    <div>
        <h1>Registration</h1>
        <form action='' onSubmit={handleSubmit}>
            <div className={style.formGroup}>
                <label htmlFor='name'>Name: </label>
                <input type='text' name='name' value = {name} id='name' onChange={handleNameChange} required></input>
            </div>
            <div className={style.formGroup}>
                <label htmlFor='name'>Email: </label>
                <input type='email' name='email' value = {email} id='email' onChange={handleEmailChange} required></input>
            </div>
            <div className={style.formGroup}>
                <label htmlFor='password'>Password: </label>
                <input type='password' name='password' value = {password} id='password' onChange={handlePasswordChange} required></input>
            </div>
            <div className={style.formGroup}>
                <button type = 'submit'>Register</button>
            </div>
        </form>
    </div>
  )
}
