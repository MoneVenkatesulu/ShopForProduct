import {Redirect, Route} from 'react-router-dom'
import Cookies from 'js-cookie'

const ProtectedRoute = props => {
  const loginCredentials = Cookies.get('loginCredentials')
  if (loginCredentials === undefined) {
    return <Redirect to="/login" />
  }

  return <Route {...props} />
}

export default ProtectedRoute
