import { useState, useContext, createContext } from 'react'
import ReactDOM from 'react-dom'
import { Container, Overlay, Inner, Close, Button } from './style'

export const PlayerContext = createContext(null)

export default function Player({ children, ...restProps }){
    const [showPlayer, setShowPlayer] = useState(false)
    return (
        <PlayerContext.Provider value = {{showPlayer, setShowPlayer}}>
            <Container {...restProps}>{children}</Container>
        </PlayerContext.Provider>
    )
}

Player.Video = function Player_Video({src, ...restProps}){
    const {showPlayer, setShowPlayer} = useContext(PlayerContext)
    return showPlayer ? ReactDOM.createPortal(
        <Overlay onClick = {() => setShowPlayer(false)} {...restProps}>
            <Inner>
                <video id = "netflix-player" controls>
                    <source src = {src} type = "video/mp4" />
                </video><button type ="button" onClick={() => console.log("Next >>>")}>Next</button>
                <Close />
            </Inner>
        </Overlay>, document.body
    ) : null
}

Player.Button = function Player_Button({...restProps}){
    const {showPlayer, setShowPlayer} = useContext(PlayerContext)
    return <Button onClick = {() => setShowPlayer((showPlayer) => !showPlayer)}>Play</Button>
}