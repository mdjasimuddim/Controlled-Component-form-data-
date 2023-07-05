import React, { useState } from 'react'
import style from './form.module.css'

export default function Index() {

    const [user, setUser] = useState({name: '', email : '', password : ''})
    const {name, email, password} = user;

    const handleChange = (e) => {
        const fileName = e.target.value;
        if(fileName === 'name')
        {
            setUser({name : e.target.value, email, password});
        }
        else if(fileName === 'email')
        {
            setUser({name, email : e.target.value, password});
        }
        else if(fileName === 'password')
        {
            setUser({name, email, password : e.target.value});
        }
    }
    const handleSubmit = (e) => {
        console.log('form is submitted');
        console.log(user);
        e.preventDefault();
    }

  return (
    <div>
        <h1>Registration</h1>
        <form action='' onSubmit={handleSubmit}>
            <div className={style.formGroup}>
                <label htmlFor='name'>Name: </label>
                <input type='text' name='name' value = {name} id='name' onChange={handleChange} required></input>
            </div>
            <div className={style.formGroup}>
                <label htmlFor='name'>Email: </label>
                <input type='email' name='email' value = {email} id='email' onChange={handleChange} required></input>
            </div>
            <div className={style.formGroup}>
                <label htmlFor='password'>Password: </label>
                <input type='password' name='password' value = {password} id='password' onChange={handleChange} required></input>
            </div>
            <div className={style.formGroup}>
                <button type = 'submit'>Register</button>
            </div>
        </form>
    </div>
  )
}
