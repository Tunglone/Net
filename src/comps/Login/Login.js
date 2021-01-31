import './Login.css'

function Login ({ children, ...restProps }) {
    return <div className = "Login_Container">{ children }</div>
}

Login.Title = function title ({ children, ...restProps }) {
    return <h1 className = "Login_Title">{ children }</h1>
}


Login.Base = function base ({ children, ...restProps }) {
    return <form className = "Login_Base" {...restProps} >{ children }</form>
}

Login.Input = function input ({ children, ...restProps }) {
    return <input className = "Login_Input" {...restProps} />
}

Login.Submit = function submit ({ children, ...restProps }) {
    return <button className = "Login_Submit" {...restProps} >{ children }</button>
}

Login.Error = function error ({ children, ...restProps }) {
    return <div className = "Login_Error" {...restProps}>{ children }</div>
}

export default Login