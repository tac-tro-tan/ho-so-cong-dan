import {Link} from "react-router-dom";
import { useEffect, useState } from "react";
//import NotifyMe from 'react-notification-timeline';
import {
    Navbar,
    Nav,
    NavDropdown,
    Container
} from 'react-bootstrap';
import { useSelector } from "react-redux";
import { selectUsername } from "../store/userSlice";
import { useDispatch } from "react-redux";
import { updateUsername } from "../store/userSlice";

function Nabar() {
    //data thông báo
    // const data = [
    //     {
    //       update: 'https://translate.google.com/?hl=vi',
    //       timestamp: 1596119688264,
    //       url:'https://translate.google.com/?hl=vi'
    //     },
    //     {
    //       update: "Time to take a Break, TADA!!!",
    //       timestamp: 1596119688264
    //     },
    //     {
    //       update: "Shaik",
    //       timestamp: 1606733635120
    //     },
    //     {
    //         update: "Shaik22",
    //         timestamp: 1606833635120
    //     }
    //   ];
    const [scrolls, setScrolls]= useState(false);
    useEffect(()=>{
        const handleScroll=()=>{
            if(window.scrollY> 70){
                setScrolls(true);
            }
            else setScrolls(false);
        }
        window.addEventListener('scroll',handleScroll);
        //Cleanup function
        // xóa event khi hàm unmounted
        return(()=>{
            window.removeEventListener('scroll',handleScroll);
        })
    },[]);
    let backgroud={backgroundColor:(scrolls)?"#111":"transparent"};

    // data đăng nhập
    const username = useSelector(selectUsername);
    const dispatch = useDispatch();
    function handleClick() {
        dispatch(updateUsername(""));
    }
    return(
        <>
        <Navbar variant="dark" bg="transparent" expand="lg" >
            <Navbar.Brand href="/">CỔNG QUẢN LÝ HỒ SƠ CÔNG DÂN ĐIỆN TỬ QUẬN LIÊN CHIỂU</Navbar.Brand>
            <NavDropdown.Divider />
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" >
            </Navbar.Collapse>     
        </Navbar>
        {scrolls&&<div style={{height: 70}}></div>}
        <Navbar variant="dark" fixed={scrolls&&"top"} style={backgroud}
        >
            <Container>
            <Nav className="me-auto" >
                <Nav.Link as={Link} to="/">TRANG CHỦ</Nav.Link>
                
                <Nav.Link as={Link} to="/gopy">GÓP Ý</Nav.Link>
                <Nav.Link as={Link} to="/huongdan">HƯỚNG DẪN</Nav.Link>
                <Nav.Link as={Link} to="/users">GIỚI THIỆU</Nav.Link>
            </Nav>
            <Nav pullRight>
                {username?<Navbar.Brand >CHÀO MỪNG LÂM</Navbar.Brand>:<></>}
                <Nav.Link as={Link} to="/sign-in" onClick={handleClick}>ĐĂNG {username? "XUẤT":"NHẬP"}</Nav.Link>
                {/* usestate cái title của nav đăng nhập thành tên user */}
                {/* <NotifyMe
                data={data}
                storageKey='notific_key'
                notific_key='timestamp'
                notific_value='update'
                heading='Thông báo'
                sortedByKey={false}
                showDate={true}
                size={32}
                color="yellow"
                /> */}
            </Nav>
            </Container>
        </Navbar>
        </>
    );
}
export default Nabar;