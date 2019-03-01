import React from 'react'
import AUTH_API from '../services/Auth'
const info = {}

function Signup(props) {
  function handleChange(e) {
    const key = e.target.name
    info[key] = e.target.value
  }

  function signUp() {
    AUTH_API.signup(info)
      .then(res => {
        props.history.push('/login')
      })
      .catch(err => {
        console.log(err)
      })
  }

  return (
    <div>
      <input
        type="text"
        name="username"
        placeholder="Username"
        onChange={handleChange}
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        placeholder="password"
        onChange={handleChange}
      />
      <button onClick={signUp}>Sign Up</button>
    </div>
  )
}

export default Signup
