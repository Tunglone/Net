import { Inner, Container, Title, SubTitle, Image, Pane, Item } from './styles/jumbotron'

function Jumbotron({ children, direction = 'row', ...restProps }){
    return (

        <Item {...restProps}>
            <Inner direction = {direction}>{children}</Inner>
        </Item>
    )
}

export default Jumbotron

// Các hàm render ra các component style (truyền tham số)
Jumbotron.Container = function ({ children, ...restProps }){
    return <Container {...restProps}>{ children }</Container>
}

Jumbotron.Image = function ({ children, ...restProps }){
    return <Pane {...restProps}>{ children }</Pane>
}

Jumbotron.Title = function ({ children, ...restProps }){
    return <Title {...restProps}>{ children }</Title>
}

Jumbotron.SubTitle = function ({ children, ...restProps }){
    return <SubTitle {...restProps}>{ children }</SubTitle>
}

Jumbotron.Image = function ({ ...restProps }){
    return <Image {...restProps} />
}

