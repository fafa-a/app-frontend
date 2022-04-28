import React from "react"

export class UserSignupPage extends React.Component {
  state = {
    username: "",
    displayName: "",
    password: "",
    passwordRepeat: "",
    pendingApiCall: false,
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
  onClickSignup = () => {
    const user = {
      username: this.state.username,
      displayName: this.state.displayName,
      password: this.state.password,
    }
    this.setState({ pendingApiCall: true })
    this.props.actions.postSignup(user)
  }
  render() {
    return (
      <div className="container">
        <h1 className="text-center">Sign Up</h1>
        <div className="col-12 mb-3">
          <label htmlFor="">Display Name</label>
          <input
            className="form-control"
            type="text"
            placeholder="Your display name"
            value={this.state.displayName}
            onChange={this.onChangeDisplayName}
          />
        </div>
        <div className="col-12 mb-3">
          <label htmlFor="">Username</label>
          <input
            className="form-control"
            type="text"
            placeholder="Your username"
            value={this.state.username}
            onChange={this.onChangeUsername}
          />
        </div>
        <div className="col-12 mb-3">
          <label htmlFor="">Password</label>
          <input
            className="form-control"
            type="password"
            placeholder="Your password"
            value={this.state.password}
            onChange={this.onChangePassword}
          />
        </div>
        <div className="col-12 mb-3">
          <label htmlFor="">Repeat your password</label>
          <input
            className="form-control"
            type="password"
            placeholder="Repeat your password"
            value={this.state.passwordRepeat}
            onChange={this.onChangePasswordRepeat}
          />
        </div>
        <div className="text-center">
          <button
            className="btn btn-primary"
            onClick={this.onClickSignup}
            disabled={this.state.pendingApiCall}
          >
            {this.state.pendingApiCall && (
              <div className="spinner-border text-light spinner-border-sm mr-1">
                <span className="visually-hidden">Loading...</span>
              </div>
            )}
            Sign Up
          </button>
        </div>
      </div>
    )
  }
}
UserSignupPage.defaultProps = {
  actions: {
    postSignup: () =>
      new Promise((resolve, reject) => {
        resolve({})
      }),
  },
}
export default UserSignupPage
