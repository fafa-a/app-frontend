import React from "react"

export class UserSignupPage extends React.Component {
  state = {
    username: "",
    displayName: "",
    password: "",
    passwordRepeat: "",
  }
  onChangeDisplayName = e => {
    const value = e.target.value
    this.setState({
      displayName: value,
    })
  }
  onChangeUsername = e => {
    const value = e.target.value
    this.setState({
      username: value,
    })
  }
  onChangePassword = e => {
    const value = e.target.value
    this.setState({
      password: value,
    })
  }
  onChangePasswordRepeat = e => {
    const value = e.target.value
    this.setState({
      passwordRepeat: value,
    })
  }
  render() {
    return (
      <div>
        <h1>Sign Up</h1>
        <div>
          <input
            type="text"
            placeholder="Your display name"
            value={this.state.displayName}
            onChange={this.onChangeDisplayName}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Your username"
            value={this.state.username}
            onChange={this.onChangeUsername}
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Your password"
            value={this.state.password}
            onChange={this.onChangePassword}
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Repeat your password"
            value={this.state.passwordRepeat}
            onChange={this.onChangePasswordRepeat}
          />
        </div>
        <div>
          <button>Sign Up</button>
        </div>
      </div>
    )
  }
}

export default UserSignupPage
