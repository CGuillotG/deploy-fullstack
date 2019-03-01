import React from 'react'

import AUTH_API from '../services/Auth'
const user = {}

function Login(props) {
  function handleInputs(e) {
    const key = e.target.name
    user[key] = e.target.value
  }

  function logIn() {
    AUTH_API.login(user)
      .then(res => {
        window.localStorage.setItem('user', JSON.stringify(res))
        props.history.push('/profile')
      })
      .catch(err => {
        console.log(err)
      })
  }

  return (
    <div>
      <input
        type="email"
        name="email"
        placeholder="email"
        onChange={handleInputs}
      />
      <input
        type="password"
        name="password"
        placeholder="password"
        onChange={handleInputs}
      />
      <button onClick={logIn}>Login</button>
    </div>
  )
}

export default Login
