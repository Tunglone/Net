import { createContext, useState, useContext } from "react"
import { Container, Item, Header, Body, Frame, Title, Inner } from "./styles/accordion"

const ToggleContext = createContext()

function Accordion ({ children, ...restProps }){
    return (
        <Container {...restProps}>
            <Inner>{children}</Inner>
        </Container>
    )
}

Accordion.Title = function A ({ children, ...restProps }) {
    return <Title {...restProps}>{children}</Title>
}

Accordion.Frame = function B ({ children, ...restProps }) {
    return <Frame {...restProps}>{children}</Frame>
}

Accordion.Item = function C ({ children, ...restProps }) {
    const [toggleShow, setToggleShow] = useState(false)
    return <ToggleContext.Provider value = {{ toggleShow, setToggleShow }}>
                <Item {...restProps}>{children}</Item>
                </ToggleContext.Provider>
}

Accordion.Header = function D ({ children, ...restProps }) {
    const {toggleShow, setToggleShow} = useContext(ToggleContext)
    return <Header onClick = {() => setToggleShow((toggleShow) => !toggleShow)} {...restProps}>
                {children}
                {toggleShow ? (<strong>x</strong>):(<strong>+</strong>)}
           </Header>
}

Accordion.Body = function E ({ children, ...restProps }) {
    const { toggleShow } = useContext(ToggleContext)
    return toggleShow ? <Body { ...restProps }>{ children }</Body> : null
}

export default Accordion