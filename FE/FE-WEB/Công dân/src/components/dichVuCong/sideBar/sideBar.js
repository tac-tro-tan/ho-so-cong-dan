import React, { useState, useEffect } from "react";
import { ProSidebar, Menu, MenuItem, SubMenu} from 'react-pro-sidebar';
import { Link } from "react-router-dom";
import { FaList, FaPassport, FaPhone, FaDoorClosed, FaGripHorizontal } from "react-icons/fa";

function SideBer() {
    const [collap,setCollap]=useState(true);
    const showDropdown = (e)=>{
        setCollap(false);
    }
    const hideDropdown = e => {
        setCollap(true);
    }
    const [scrolls, setScrolls]= useState('140')
    useEffect(()=>{
        const handleScroll=()=>{
            if(window.scrollY> 70){
                setScrolls('70');
            }
            else setScrolls('140');
        }
        window.addEventListener('scroll',handleScroll);
        //Cleanup function
        // xóa event khi hàm unmounted
        return(()=>{
            window.removeEventListener('scroll',handleScroll);
        })
    },[]);
    let toptop={ top: `${scrolls}px`, backgroundColor:(collap)?"transparent":"#111"};
    return (
        <>  
        <div className="sidenav"  style={toptop} id="header2">
            <ProSidebar collapsed={collap} onMouseEnter={showDropdown} onMouseLeave={hideDropdown}>
                <Menu >
                    <SubMenu title="Xem thông tin" open={true} icon={<FaList/>}>
                        <MenuItem>Thông tin cá nhân<Link to="/thongtincanhan" /></MenuItem>
                        <MenuItem>Thông tin cán bộ<Link to="/thongtincanbo" /></MenuItem>
                    </SubMenu>
                    <MenuItem icon={<FaPhone/>}>Đặt lịch hẹn<Link to="/datlichhen" /></MenuItem>
                    <MenuItem icon={<FaDoorClosed/>}>Gửi yêu cầu<Link to="/guiyeucau" /></MenuItem>
                    <MenuItem icon={<FaGripHorizontal/>}>Góp ý<Link to="/gopy" /></MenuItem>
                    <MenuItem icon={<FaPassport/>}>Đổi mật khẩu<Link to="/doimatkhau" /></MenuItem>
                   
                </Menu>
            </ProSidebar>
        </div>
        </>
    );
}

export default SideBer;