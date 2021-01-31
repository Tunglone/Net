import { useState, useContext } from "react"
import { useHistory, Link } from 'react-router-dom'
import { FirebaseContext } from '../context/firebase'
import { Header } from "../comps"
import Registration from '../comps/Registration/Registration'
import * as ROUTES from '../const/routes'

function Signup () {
    const history = useHistory()
    const { firebase } = useContext(FirebaseContext)
    const [ fname, setFname ] = useState('')
    const [ email, setEmail ] = useState('')
    const [ passw, setPassw ] = useState('')
    const [ error, setError ] = useState('')

    const isInvalid = passw === '' || email === '' || fname === ''
    const handleSignup = (event) => {
        event.preventDefault()

        // firebase
        firebase
            .auth()
            .createUserWithEmailAndPassword(email, passw)
            .then((result) =>
                result.user
                .updateProfile({
                    displayName: fname,
                    photoURL: Math.floor(Math.random() * 5) + 1
                }).then(() => {
                    alert('Đăng Ký Thành Công')
                    history.push(ROUTES.BROWSE)
                })
            )
            .catch((error) => {
                setFname('')
                setEmail('')
                setPassw('')
                setError(error.message)
            })
        
    }
    return (
        <div>
            <Header>
                <div className="Header_Container">
                    <Link to = "/"><img src="https://lh3.googleusercontent.com/N1kU9VAf73C51uMG79cAtfn5bKSE92yfWhgcNivSSjYlJ7Qd60buc0D22FWDCifeMnEoJIyqNbCNiqbfb82MR4CTy5bIDHcBniItMjuaaj3i7zWAdT_qgUgpJQUerhB43N6jEpwZsRZZI0lZqEgPJpgC84GVlB9gDCwGRZtWvW0kf1Nyk1rbY8As3kK-5LxSaX8Vi3Aekvf0O6MiqvoIVGjbdRD9VRK0vpWZVyNQrvkJ7pP_jiDbVZ91JYv-FH5uV1aI0u5Mf0yQ48ZhNOsoiEUmmEJHZvEjyN9ce_znGzSDqZKzh6vihmQIZzQbLvlUZlEtTrDWTPBLPxTrrhDS-0tGIQLzKrrFyO5xgp8td4Rg37rUUeJXrwqVnJxW94zm_ZBelxxc36ZGPeUNIqE50Tv6TlMmnjyYXOmSrKsCEASqVKYWJuIHpTuhgknB0fL9labikLYgOVWI6Mu9LSVZUhfkL3eYr9YPSO_fs1_NKT95fKKswCoxkokEymBXEhs3zddeOp6jFWpLDV5_mj5YIplqm5cFW8ycvEaOSHnSHYVaWaHKt6LuQKJqryUwtUfTx0-oT-OLPQr0O0Vo3Qupu-PIV9F5w1SsJ-fmTWZTVXwK-rHKAjMPa5yd6KgW-2WDsBrstnAK-KalpOu6eQPXl--JOs8tf18hmPecHQJ1J7QLw_DYiOLJS-4ZM-P35w=w200-h54-no?authuser=0" className="Header_Logo" alt="logo" /></Link>
                </div>
                <Registration>
                    <Registration.Title>Đăng Ký</Registration.Title>
                    {error && <Registration.Error>{error}</Registration.Error>}
                    <Registration.Base onSubmit = {handleSignup} method = "POST">
                        <Registration.Input 
                            placeholder = "Địa chỉ Email"
                            value = {email}
                            onChange = {({ target }) => setEmail(target.value)}/>

                        <Registration.Input
                            type = "password"
                            placeholder = "Mật khẩu"
                            value = {passw}
                            onChange = {({ target }) => setPassw(target.value)}/>

                        <Registration.Input 
                            placeholder = "Tên (2 đến 8 ký tự)"
                            value = {fname}
                            onChange = {({ target }) => setFname(target.value)}/>

                        <Registration.Submit
                            disable = {isInvalid} type = "submit">
                                Đăng Ký
                        </Registration.Submit>

                        <br/><p style = {{color:"gray"}}>Bạn đã có tài khoản? <Link className = "Registration_Link" to = "/signin">Đăng nhập ngay.</Link></p>

                    </Registration.Base>
                </Registration>
            </Header>
        </div>
    )
}

export default Signup