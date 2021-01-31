import '../comps/header/styles/header.css'
import { Header } from "../comps"
import Faqs from "../comps/Faqs/Faqs"
import JumbotronContainer from "../containers/jumbotron"
import Mailbox from '../comps/Mailbox/Mailbox'
import { Link } from 'react-router-dom'

function Home() {

    return (
        < >
            <Header>
                <div className="Header_Container">
                    <Link to = "/"><img src="https://lh3.googleusercontent.com/N1kU9VAf73C51uMG79cAtfn5bKSE92yfWhgcNivSSjYlJ7Qd60buc0D22FWDCifeMnEoJIyqNbCNiqbfb82MR4CTy5bIDHcBniItMjuaaj3i7zWAdT_qgUgpJQUerhB43N6jEpwZsRZZI0lZqEgPJpgC84GVlB9gDCwGRZtWvW0kf1Nyk1rbY8As3kK-5LxSaX8Vi3Aekvf0O6MiqvoIVGjbdRD9VRK0vpWZVyNQrvkJ7pP_jiDbVZ91JYv-FH5uV1aI0u5Mf0yQ48ZhNOsoiEUmmEJHZvEjyN9ce_znGzSDqZKzh6vihmQIZzQbLvlUZlEtTrDWTPBLPxTrrhDS-0tGIQLzKrrFyO5xgp8td4Rg37rUUeJXrwqVnJxW94zm_ZBelxxc36ZGPeUNIqE50Tv6TlMmnjyYXOmSrKsCEASqVKYWJuIHpTuhgknB0fL9labikLYgOVWI6Mu9LSVZUhfkL3eYr9YPSO_fs1_NKT95fKKswCoxkokEymBXEhs3zddeOp6jFWpLDV5_mj5YIplqm5cFW8ycvEaOSHnSHYVaWaHKt6LuQKJqryUwtUfTx0-oT-OLPQr0O0Vo3Qupu-PIV9F5w1SsJ-fmTWZTVXwK-rHKAjMPa5yd6KgW-2WDsBrstnAK-KalpOu6eQPXl--JOs8tf18hmPecHQJ1J7QLw_DYiOLJS-4ZM-P35w=w200-h54-no?authuser=0" className="Header_Logo" alt="logo" /></Link>
                    <Link className="Button_Link" to="/signin">Đăng nhập</Link>
                </div>
                <div className="faqs_container" style={{ 'color': 'white' }}>
                    <div className="Header_Title">
                        <h1><strong>Chương trình truyền hình, phim không giới hạn và nhiều nội dung khác.</strong></h1>
                        <h3>Xem ở mọi nơi. Hủy bất kỳ lúc nào.</h3>

                    </div>
                    <Mailbox />
                </div>
            </Header>
            <JumbotronContainer />
            <Faqs />
        </>
    )
}

export default Home