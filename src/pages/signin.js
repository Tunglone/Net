import { useState, useContext } from "react"
import '../comps/Login/Login.css'
import { useHistory } from 'react-router-dom'
import { FirebaseContext } from '../context/firebase'
import { Header } from "../comps"
import Login from "../comps/Login/Login"
import { Link } from 'react-router-dom'
import * as ROUTES from '../const/routes'

function Signin () {
    const history = useHistory()
    const { firebase } = useContext(FirebaseContext)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const isInvalid = password === '' || email === ''
    const handleSignin = (event) => {
        event.preventDefault()

        // firebase
        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then(() => {
                // push to browse page
                alert("Đăng Nhập Thành Công")
                history.push(ROUTES.BROWSE)
            })
            .catch((error) => {
                setEmail('')
                setPassword('')
                setError(error.message)
            })
    }
    return (
        <div>
            <Header>
                <div className="Header_Container">
                    <Link to = "/"><img src="https://lh3.googleusercontent.com/N1kU9VAf73C51uMG79cAtfn5bKSE92yfWhgcNivSSjYlJ7Qd60buc0D22FWDCifeMnEoJIyqNbCNiqbfb82MR4CTy5bIDHcBniItMjuaaj3i7zWAdT_qgUgpJQUerhB43N6jEpwZsRZZI0lZqEgPJpgC84GVlB9gDCwGRZtWvW0kf1Nyk1rbY8As3kK-5LxSaX8Vi3Aekvf0O6MiqvoIVGjbdRD9VRK0vpWZVyNQrvkJ7pP_jiDbVZ91JYv-FH5uV1aI0u5Mf0yQ48ZhNOsoiEUmmEJHZvEjyN9ce_znGzSDqZKzh6vihmQIZzQbLvlUZlEtTrDWTPBLPxTrrhDS-0tGIQLzKrrFyO5xgp8td4Rg37rUUeJXrwqVnJxW94zm_ZBelxxc36ZGPeUNIqE50Tv6TlMmnjyYXOmSrKsCEASqVKYWJuIHpTuhgknB0fL9labikLYgOVWI6Mu9LSVZUhfkL3eYr9YPSO_fs1_NKT95fKKswCoxkokEymBXEhs3zddeOp6jFWpLDV5_mj5YIplqm5cFW8ycvEaOSHnSHYVaWaHKt6LuQKJqryUwtUfTx0-oT-OLPQr0O0Vo3Qupu-PIV9F5w1SsJ-fmTWZTVXwK-rHKAjMPa5yd6KgW-2WDsBrstnAK-KalpOu6eQPXl--JOs8tf18hmPecHQJ1J7QLw_DYiOLJS-4ZM-P35w=w200-h54-no?authuser=0" className="Header_Logo" alt="logo" /></Link>
                </div>
                <Login>
                    <Login.Title>Đăng Nhập</Login.Title>
                    {error && <Login.Error>{error}</Login.Error>}

                    <Login.Base onSubmit = {handleSignin} >
                        <Login.Input 
                            placeholder = "Địa chỉ Email"
                            value = {email}
                            onChange = {({ target }) => setEmail(target.value)}/>

                        <Login.Input
                            placeholder = "Mật khẩu"
                            value = {password}
                            onChange = {({ target }) => setPassword(target.value)}/>

                        <Login.Submit
                            disable = {isInvalid} type = "submit">
                                Đăng Nhập
                        </Login.Submit>

                        <br/><p style = {{color:"gray"}}>Bạn mới tham gia Netflix? <Link className = "Login_Link" to = "/signup">Đăng ký ngay.</Link></p>

                    </Login.Base>
                </Login>
            </Header>
        </div>
    )
}

export default Signin