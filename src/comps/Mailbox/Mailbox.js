import { Button } from 'react-bootstrap';


function Mailbox ({ children, ...restProps }) {
    return (
        <div className = "mailbox_container">
            <strong className = "mailbox_title">Bạn đã sẵn sàng xem chưa? Nhập email để tạo hoặc kích hoạt lại tư cách thành viên của bạn.</strong>
            <input className = "mailbox_input" placeholder="Email address"></input>
            <button type="button" className="btn btn-danger mailbox_btn"><strong>Get Started</strong></button>
        </div>
    )
}



export default Mailbox