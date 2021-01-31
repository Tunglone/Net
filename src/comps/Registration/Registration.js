import './Registration.css'

function Registration ({ children, ...restProps }) {
    return <div className = "Registration_Container">{ children }</div>
}

Registration.Title = function title ({ children, ...restProps }) {
    return <h1 className = "Registration_Title">{ children }</h1>
}


Registration.Base = function base ({ children, ...restProps }) {
    return <form className = "Registration_Base" {...restProps} >{ children }</form>
}

Registration.Input = function input ({ children, ...restProps }) {
    return <input className = "Registration_Input" {...restProps} />
}

Registration.Submit = function submit ({ children, ...restProps }) {
    return <button className = "Registration_Submit" {...restProps} >{ children }</button>
}

Registration.Error = function error ({ children, ...restProps }) {
    return <div className = "Registration_Error" {...restProps}>{ children }</div>
}

export default Registration
