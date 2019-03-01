import React from 'react'
import AUTH_API from '../services/Auth'

class Profile extends React.Component {
  state = {
    user: {}
  }

  componentWillMount() {
    const user = JSON.parse(window.localStorage.getItem('user'))
    if (!user) return this.props.history.push('/login')
    AUTH_API.profile()
      .then(res => {
        this.setState({ user: res })
      })
      .catch(err => {
        console.log(err)
      })
  }

  render() {
    const { user } = this.state
    if (!user) return <p>Loading ...</p>
    return (
      <div>
        <h2>Welcome my lord {user.username}</h2>
      </div>
    )
  }
}

export default Profile
