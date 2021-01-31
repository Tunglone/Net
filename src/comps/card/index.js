import { createContext, useState, useContext } from "react"
import {
     Group, 
     Title, 
     Container, 
     Sub, 
     Text, 
     Meta, 
     Image, 
     Item,
     Feature,
     FeatureTitle,
     Entities,
     Maturity,
     Content,
     FeatureClose,
     FeatureText
} from './Card'
export const FeatureContext = createContext(null)

function Card({ children, ...restProps }){
    const [showFeature, setShowFeature] = useState(false)
    const [itemFeature, setItemFeature] = useState({})
    return (
        <FeatureContext.Provider value = {{showFeature, setShowFeature, itemFeature, setItemFeature}}>
            <Container { ...restProps}>{ children }</Container>
        </FeatureContext.Provider>
    )
}

Card.Group = function Card_Group({ children, ...restProps }){
    return <Group { ...restProps}>{ children }</Group>
}

Card.Title = function Card_Title({ children, ...restProps }){
    return <Title { ...restProps}>{ children }</Title>
}

Card.Sub = function Card_Sub({ children, ...restProps }){
    return <Sub { ...restProps}>{ children }</Sub>
}

Card.Text = function Card_Text({ children, ...restProps }){
    return <Text { ...restProps}>{ children }</Text>
}

Card.Entities = function Card_Entities({ children, ...restProps }){
    return <Entities { ...restProps}>{ children }</Entities>
}

Card.Meta = function Card_Meta({ children, ...restProps }){
    return <Meta { ...restProps}>{ children }</Meta>
}

Card.Item = function Card_Item({ item, children, ...restProps }){
    const { setShowFeature, setItemFeature } = useContext(FeatureContext)
    return <Item onClick = {() => {setItemFeature(item); setShowFeature(true)}}
    { ...restProps}>{ children }</Item>
}

Card.Image = function Card_Image({...restProps}){
    return <Image {...restProps} />
}

Card.Feature = function Card_Feature({ children, category, ...restProps }){
    const { showFeature, itemFeature, setShowFeature } = useContext(FeatureContext)
    return showFeature ? (
        <Feature {...restProps} src = {'/images/misc/large.jpg'}>
            <Content>
                <FeatureTitle>{itemFeature.title}</FeatureTitle>
                <FeatureText>{itemFeature.description}</FeatureText>
                <FeatureClose onClick = {() => setShowFeature(false)} ><strong>[X]</strong></FeatureClose>
                
                <Group margin="30px 0" flexDirection="row" alignItems="center">
                    <Maturity rating = {itemFeature.maturity}>{itemFeature.maturity < 12 ? 'PG':itemFeature.maturity}</Maturity>
                    <FeatureText fontWeight="bold">{itemFeature.genre.charAt(0).toUpperCase() + itemFeature.genre.slice(1)}</FeatureText>
                </Group>  
                {children}
            </Content>
        </Feature>
    ) : null
}
export default Card


