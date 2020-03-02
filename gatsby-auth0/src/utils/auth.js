import auth0 from "auth0-js"
import { navigate } from "gatsby"

//TODO: do some more thorough account check here?
//TODO: don't allow user access until they validate their email
//TODO: look into how to use Auth0 to access APIs hosted on GCP

//Check window object loaded
const isBrowser = typeof window !== "undefined"

//If loaded then return auth0 object
const auth = isBrowser
  ? new auth0.WebAuth({
      domain: process.env.AUTH0_DOMAIN,
      clientID: process.env.AUTH0_CLIENTID,
      redirectUri: process.env.AUTH0_CALLBACK,
      responseType: "token id_token",
      scope: "openid profile email",
    })
  : {}

const tokens = {
  accessToken: false,
  idToken: false,
  expireAt: false,
}

let user = {}

//Check if previously authenticated
export const isAuthenticated = () => {
  if (!isBrowser) {
    return
  }

  return localStorage.getItem("isLoggedIn") === "true"
}

//TODO: add logic here to check if user is verified
export const isVerified = () => {
  if (!isBrowser) {
    return
  }

  console.log(user.email_verified)
}

//Called login user
export const login = (email, password) => {
  //TODO: handle a unauthenticated login return or in setSession
  if (!isBrowser) {
    return
  }

  auth.login({
    email: email,
    password: password,
    realm: process.env.AUTH0_DATABASE,
  })
}

//Sets all the session magic that auth0 handles
//TODO: look into this later
const setSession = (cb = () => {}) => (err, authResult) => {
  if (err) {
    navigate("/")
    cb()
    return
  }

  if (authResult && authResult.accessToken && authResult.idToken) {
    //Calculate expiration
    let expireAt = authResult.expiresIn * 1000 + new Date().getTime()

    //get the auth tokens here
    tokens.accessToken = authResult.accessToken
    tokens.idToken = authResult.idToken
    tokens.expireAt = expireAt

    //Get user
    user = authResult.idTokenPayload

    localStorage.setItem("isLoggedIn", true)
    navigate("/account/home")
    cb()
  }
}

//Parse token from location hash
export const handleAuthentication = () => {
  if (!isBrowser) {
    return
  }

  auth.parseHash(setSession())
}

//Get user profile is exist
export const getProfile = () => {
  return user
}

//Checks if authenticated and get appropriate token
export const silentAuth = callback => {
  if (!isAuthenticated()) return callback()
  auth.checkSession({}, setSession(callback))
}

export const logout = () => {
  localStorage.setItem("isLoggedIn", false)
  auth.logout()
}

//Sign up new user
export const signup = (email, password) => {
  if (!isBrowser) {
    return
  }

  auth.signup(
    {
      connection: process.env.AUTH0_DATABASE,
      email: email,
      password: password,
    },
    err => {
      if (err) return alert("Something wrong" + err)
      return alert("success")
    }
  )
}
