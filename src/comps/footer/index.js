import { Container, Row, Col, Link, Title, Text } from './styles/footer'

const Footer = () => {
    return <Container {...restProps}>{children}</Container>
}

Footer.Row = () => {
    return  <Row {...restProps}>{children}</Row>
}

Footer.Col = () => {
    return  <Col {...restProps}>{children}</Col>
}

Footer.Link = () => {
    return  <Link {...restProps}>{children}</Link>
}

Footer.Title = () => {
    return  <Title {...restProps}>{children}</Title>
}

Footer.Text = () => {
    return  <Text {...restProps}>{children}</Text>
}

Footer.Break = () => {
    return  <Break {...restProps}>{children}</Break>
}
export default Footer


