import { Link as ReactRouterLink } from 'react-router-dom'
import './styles/header.css'

function Header(props) {
    
    return (
        <div className="Header_Background">
            <div className="Header_Shield">
                { props.children }
            </div>
        </div>

    )
}


export default Header