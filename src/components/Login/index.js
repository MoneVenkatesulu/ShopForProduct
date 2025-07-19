import {useState} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'

import './index.css'

const Login = props => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [showErrorMsg, setErrorMsg] = useState(false)

  const changeUsername = event => {
    setUsername(event.target.value)
  }

  const changePassword = event => {
    setPassword(event.target.value)
  }

  const onSubmitForm = event => {
    const {history} = props
    event.preventDefault()
    if (username === '' || password.length < 6) {
      setErrorMsg(true)
    } else {
      setErrorMsg(false)
      Cookies.set('loginCredentials', {username, password}, {expires: 1})
      history.replace('/')
    }
  }

  const loginCredentials = Cookies.get('loginCredentials')

  if (loginCredentials !== undefined) {
    return <Redirect to="/" replace />
  }

  return (
    <div className="login-container">
      <img
        src="https://res.cloudinary.com/dmlk7cxkm/image/upload/Screenshot_2025-07-12_144456_dqemuw.png"
        alt="login"
        className="login-form-img"
      />
      <form className="form-container" onSubmit={onSubmitForm}>
        <h1 className="form-login-logo">ShopForProduct</h1>
        <div className="input-containers">
          <label htmlFor="USERNAME" className="form-labels">
            USERNAME
          </label>
          <br />
          <input
            type="text"
            id="USERNAME"
            value={username}
            onChange={changeUsername}
            className="form-input-bars"
          />
        </div>
        <div className="input-containers">
          <label htmlFor="PASSWORD" className="form-labels">
            PASSWORD
          </label>
          <br />
          <input
            type="password"
            id="PASSWORD"
            value={password}
            onChange={changePassword}
            className="form-input-bars"
          />
          <p className="password-hint">
            HINT :- Enter at least any 6 Characters password
          </p>
        </div>

        <button type="submit" className="login-button">
          Login
        </button>
        {showErrorMsg && (
          <p className="error-msg">*Please enter valid Name and Password</p>
        )}
      </form>
    </div>
  )
}

export default Login
