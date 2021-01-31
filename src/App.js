
import { useState } from "react"
import Faqs from "./comps/Faqs/Faqs"
import JumbotronContainer from "./containers/jumbotron"
import { BrowserRouter as Router, Switch } from "react-router-dom";
import * as ROUTES from "./const/routes"
import { Home, Browse, Signin, Signup } from './pages'
import { IsUserRedirect, ProtectedRoute } from './helper/routes'
import { useAuthListener } from './hooks'

function App(){

  const { user } = useAuthListener()
  console.log(user)

  return (
    <Router>
      <Switch>
      
        <IsUserRedirect user = {user} loggedinpath = {ROUTES.BROWSE} path = {ROUTES.SIGN_IN} >
            <Signin />
        </IsUserRedirect>

        <IsUserRedirect user = {user} loggedinpath = {ROUTES.BROWSE} path = {ROUTES.SIGN_UP} >
            <Signup />
        </IsUserRedirect>

        <ProtectedRoute user = {user} path = {ROUTES.BROWSE}>
          <Browse />
        </ProtectedRoute>

        <IsUserRedirect user = {user} loggedinpath = {ROUTES.BROWSE} path = {ROUTES.HOME} exact>
          <Home />
        </IsUserRedirect>
        
    </Switch>
    </Router>
  )
}

export default App