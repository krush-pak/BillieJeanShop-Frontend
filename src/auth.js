import Cookies from 'js-cookie'
import axios from 'axios'

const COOKIE_AUTH_TOKEN = 'sid'

const auth = {
  login: (token) => {
    auth.setToken(token)
    auth.setRequestHeaders(token)
  },

  logout: () => {
    auth.resetToken()
    auth.resetRequestHeaders()
  },

  setToken: val => Cookies.set(COOKIE_AUTH_TOKEN, val),

  resetToken: () => auth.setToken(null),

  getToken: () => Cookies.get(COOKIE_AUTH_TOKEN),

  isLoggedIn: () => !!auth.getToken(),

  setRequestHeaders: () => {

    const authorizationToken = auth.getToken()

    if (authorizationToken === null) {
      auth.resetRequestHeaders()
    } else {
      axios.defaults.headers.common.Authorization = `Bearer ${authorizationToken}`
    }
  },

  resetRequestHeaders: () => {
    delete axios.defaults.headers.commonAuthorization
  }
}

export default auth
