import { Redirect, Router, Route } from 'react-router-dom'

export function IsUserRedirect({user, loggedinpath, children, ...rest}) {
    return (
        <Route {...rest}
            render={() => {
                if (!user) {
                    return children
                }
    
                if (user) {
                    return <Redirect to = {{ pathname: loggedinpath }} />
                }

                return null
            }
        } />
    )
}

export function ProtectedRoute ({ user, children, ...rest}) {
    return (
        <Route 
            { ...rest }
            render = {({ location}) => {
                if (user) {
                    return children
                }
                if (!user) {
                    return <Redirect to = {{pathname: 'signin', state: { from:location } }} />
                }

                return null
                
            }}/>
    )
}