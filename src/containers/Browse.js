import '../comps/browse/style.css'
import { Card } from '../comps'
import { useEffect, useState, useContext } from 'react'
import { Player } from '../comps'
import { Link } from 'react-router-dom'
import { FirebaseContext } from '../context/firebase'
import Fuse from 'fuse.js';

function BrowseContainer({ slides }) {
    const [play, setPlay] = useState(false)
    const [category, setCategory] = useState('series')
    const { firebase } = useContext(FirebaseContext)
    const [sliderow, setSliderow] = useState([])
    const [searchTerm, setSearchTerm] = useState('')
    const user = firebase.auth().currentUser || {}

    console.log(user);

    const showTrailer = (strVideo) => {
        if (play === true) {
            return (
                <div className="Trailer">
                    <video src={strVideo} controls={true} autoPlay={true} />
                    <img onClick={() => changePlay()} className="Close" src="/img/close.png" alt="" />
                </div>
            )
        }
        else if (play === false) {
            return false
        }
    }

    const changePlay = () => {
        setPlay(!play)
    }

    useEffect(() => {
        setSliderow(slides[category])
    }, [slides,category])

    useEffect(() => {
        const fuse = new Fuse(sliderow, { keys: ['data.description', 'data.title', 'data.genre'] });
        const results = fuse.search(searchTerm).map(({ item }) => item);
    
        if (sliderow.length > 0 && searchTerm.length > 3 && results.length > 0) {
          setSliderow(results);
        } else {
          setSliderow(slides[category]);
        }
      }, [searchTerm])

    return (
        <div>
            <header className = "Top">
                <Link to="/" className="Browse_Logo"><img src="/img/logo.png" alt="LOGO" /></Link>
                <ul className="Browse_Navigation">
                    <li><Link to = "/"  style = {{fontWeight:"bold"}} className = "Browse_Link">Trang chủ</Link></li>
                    <li><button onClick = {() => setCategory('films')} className = "Browse_Link">Loạt Phim</button></li>
                    <li><button onClick = {() => setCategory('series')} className = "Browse_Link">Chương trình</button></li>
                    <li><button onClick = {() => setCategory('')} className = "Browse_Link">Mới</button></li>
                    <li><button onClick = {() => setCategory('')} className = "Browse_Link"><i className ="Lol">{user.displayName}</i></button></li>
                </ul>
                <div className="Browse_Search">
                    <input value={searchTerm} onChange={({ target }) => setSearchTerm(target.value)} placeholder="Tìm kiếm" data-testid="search-input"/>
                    <i className="fa fa-search" aria-hidden="true" />
                </div>
            </header>
            <div className="Browse_Banner" style = {{backgroundImage: "url(" + "/img/bgg.jpg" + ")"}}>
                <div className="Block">
                    {/*<img src = "https://post-phinf.pstatic.net/MjAyMDEyMDRfMTI2/MDAxNjA3MDYzODExMjYx.zkoiHOtUxZSQuOuwqznJTvJ1LzQGsBjRR-p5kmIAvyEg.7v5xvUO5PedRvRikfyMJuWa-izycwfCFH_bcgRR0UNIg.JPEG/010.jpg?type=w1200" className = "Browse_Background" alt = "" />*/}
                    <div className="Browse_Content">
                        <img className="Browse_Content_Title" src="https://lh3.googleusercontent.com/d_QRASCwEEWzzLHyGna_SIW1EOk4M6xE0kKdYdaZa-S1JUMCNpgJ5wVKM7NOoVHNgpMOzUrnl44HCcb4hZmlb-B7ccsqd6eQZhjAFT1O401aHtPJHRhqk4UpRSWaky0k5lB1EyJ7UBUMZzefFPpwLe6dODLqvkulMacmlJgIO0JcBMDwZW7Ze5x-yRRf2KNVZgj0QsXpLK_EFpaLoK3o60HUO1trjLNOw_oZ8kABCuTEIAR8grOaC8s_gdKdb_56EeuzQcXxGGdOLu860h9JUB9zd2n6Pdi7u3dYHBy___rfgMGuMaqOprzIAtPxIqAX9u7v-EUrXoRJojvbprtb-5HZD0J6U-OMFZwbs68LtbJzUMJEgExwjDUmoBB4Mse4mGIaLWVgNrMbzmpjFsYYyypFTqDV2WjTZszcVQP1ND-BsQsyMObCkFOSrOzjoBLEMjatBPAt4cEYz2d-mXD9NgYSC5pumVrSP9UlPWRHMECXZd99tDLlWVJ5EVFmXDv62qorVlxXM9ZFFDAVpqesan-bF3uzZScDVxfkvRqLAo8d-mwdEyzEwCW6avdNmbfKRWyRI0zXPSb9f8UkGPT1w031pu2zOEGIXmAWszPLV81cglNJi0ABUpIaA7-1yFf4DnvIvtTgnc4ix9Flqmds7BKVCk_onuY9zOmYbOIJdjWF3ubtVl0_zWEunMBs4g=w720-h210-no?authuser=0" alt="" />
                        <h4>
                            <span>2020</span>
                            <span><i>15+</i></span>
                            <span>1h:55m</span>
                            <span>Hành động</span>
                        </h4>
                        <p>
                        Ở thế giới hiện tại, Jang Bong-hwan hiện đang là đầu bếp hàng đầu tại Nhà Xanh cho Tổng thống Hàn Quốc. 
                        Nhưng sau khi gặp phải một tai nạn bất ngờ, linh hồn của anh bằng một cánh nào đó đã nhập vào cơ thể của 
                        Triết Nhân Vương hậu (Shin Hye-sun) ở thời đại Joseon.
                    </p>
                        <div className="Play_Button">
                            <a href="/"><i className="fa fa-play" aria-hidden="true" /> Play</a>
                            <a href="/"><i className="fa fa-plus" aria-hidden="true" /> Add</a>
                        </div>
                    </div>
                    <button type="button" onClick={() => changePlay()} className="Play_Btn"><img className="" src="https://lh3.googleusercontent.com/RoHA5S99CAoV4urQ1XpraAclvzuU2qmBWoZROfy7K_FcbHfSTLgfDt1q9nT8Sddmz9fIhRPzJZe2AtBmXIw4cr9EaITsay4F2qEWg7mQl42BFW_spFA6aj1hI5viezYPAZg7GCoqwPGaJqS_GY9vVuBVCU-AfxzuDY5sfqQy7ZkAnxgtBQifdkIzPyKvj_kyFPqRZfg3dLrQtJPxulKoPCgbRn5Hg4hjDSCI1yVy0WOLdpYmDPkm09aZW2TCpg4Bc9PgXcitNqENrE-fJjRtlAEU8KDq5RVWQIvHjXvKYqB_4Wqct2ODde8BwDHd5YCrBLyTPU0zw4fWwxllct9sEykBoNsLw1z-wHpLDOIZcJOtBAhUGIjS18OE2BVYxzgm9ZHmt7gSlNA6fXqIB9JQXsD5POG6U1tXIwBdgbUehn3L_ibwOfV08dI_qRFg4qW7AHDkpKCa6hJg2g_GpNrnD5Dhu3NzzOhNrgIEZrDEy_36TA_4sfIX3FcFVABTYuTKCEZI9hotJ6uq89Mz6I1sUJBRgLl_gkcRk3mx24ev6uViaf5nC0hMI2wd9MbEz1ZB6RjUNVbLdFISNPl8vufNWHEqAbZ21_qMgVr0x6gyJvJqv29nhOJ-vCJiN2advYvni3RlWsp-F0Mqki_HmB9CpArFnzYOTpq6xCaOd0WXU5LbFj0vsWPPM7mwuyrBgQ=s72-no?authuser=0" alt="" />Xem Trailer</button>
                </div>
            </div>

            {showTrailer('/demo.mp4')}

            {/* <<< CARD LIST */}


            <div className = "br">
                <Card.Group>
                    {sliderow.map((slideItem, index) => (<Card key={index}>
                        <Card.Title>{slideItem.title}</Card.Title>
                        <Card.Entities>{slideItem.data.map((item, id) => <Card.Item key = {id} item = {item}>
                            <Card.Image src = {'/images/misc/small.jpg'} />
                            <Card.Meta>
                                <Card.Sub>{item.title}</Card.Sub>
                                <Card.Text>{item.description}</Card.Text>
                            </Card.Meta>
                        </Card.Item>)}</Card.Entities>

                        <Card.Feature category = {category}>
                            <Player>
                                <Player.Button />
                                <Player.Video src = {'/demo.mp4'} />
                            </Player>

                        </Card.Feature>
                        
                    </Card>))}
                </Card.Group>
            </div>
                

            {/* CARD LIST >>> */}
            
        </div>
    )
}

export default BrowseContainer