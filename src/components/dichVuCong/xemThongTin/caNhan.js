import React, { useEffect, useState } from "react";
import { Container, Table } from "react-bootstrap";
import { useSelector } from "react-redux";
import { selectCongDan } from "../../../store/userSlice";

function CaNhan() {

    const {info:{cmnd, fullname, birthday, country, gender, avatar, folk, id, married,address},token} = useSelector(selectCongDan);
    const soHoKhau=1;
    const cmnd1=883137342;
    //fetch dữ liệu database
    const [nhanThan,setNhanThan]= useState(null);
    useEffect(()=>{
        fetch('http://localhost:3003/thongTinCaNhan')
        .then(res => {
            return res.json();
        })
        .then(data =>{
            setNhanThan(data.filter(n=>n.soHoKhau==soHoKhau&& n.cmnd!=cmnd1));
        })
    },[])

    const [tienAn,setTienAn]= useState([]);
    useEffect(()=>{
        fetch('http://localhost:3003/tienAnTienSu')
        .then(res => {
            return res.json();
        })
        .then(data =>{
            setTienAn(data.filter(n=>n.cmnd==cmnd1));
        })
    },[])

    return (
        <>
            <div className="divv" style={{textAlign: "center"}}><h1>Thông tin cá nhân</h1></div>
            <Container>
                <div>
                    <h5 className="divv">Thông tin công dân:</h5>
                    <div className="d-flex flex-row justify-content-around divv">
                        <div>
                            <img src={avatar} alt="Logo"  width="150" height="200"/>
                        </div>
                        <div>
                            <p>Họ tên: <strong>{fullname}</strong></p>
                            <p>Ngày sinh: <strong>{birthday}</strong></p>
                            <p>Quê quán: <strong>{country}</strong></p>
                            <p>Tình trạng hôn nhân: <strong>{married?"Đã kết hôn":"Chưa kết hôn"}</strong></p>
                        </div>
                        <div>
                            <p>Giới tính: <strong>{gender?"Nam":"Nữ"}</strong></p>
                            <p>Dân tộc: <strong>{folk}</strong></p>
                            <p>Địa chỉ: <strong>{address}</strong></p>
                            <p>CMND: <strong>{cmnd}</strong></p>
                        </div>
                    </div>    
                </div>
                <div className="divv">
                    <h5 className="divv">Thông tin nhân thân:</h5>
                    <div className="d-flex flex-column justify-content-around divv">
                        {nhanThan?nhanThan.map((nhan)=>(
                            <div className="d-flex flex-row justify-content-around divv" key={nhan.cmnd}>
                                <div>
                                <img src={nhan.img} alt="Logo"  width="150" height="200"/>
                                </div>
                                <div>
                                    <p>Họ tên: <strong>{nhan.ten}</strong></p>
                                    <p>Ngày sinh: <strong>{nhan.ngaySinh}</strong></p>
                                    <p>Quê quán: <strong>{nhan.queQuan}</strong></p>
                                    <p>Tình trạng hôn nhân: <strong>{nhan.ketHon?"Đã kết hôn":"Chưa kết hôn"}</strong></p>
                                </div>
                                <div>
                                    <p>Giới tính: <strong>{nhan.gioiTinh?"Nam":"Nữ"}</strong></p>
                                    <p>Dân tộc: <strong>{nhan.danToc}</strong></p>
                                    <p>Dịa chỉ: <strong>{nhan.diaChi}</strong></p>
                                    <p>CMND: <strong>{nhan.cmnd}</strong></p>
                                </div>
                            </div> 
                        )):<></>}
                        
                    </div>
                    
                </div>
                <div className="divv">
                    <h5 className="divv">Tiền án tiền sự:</h5>
                    <Table striped bordered hover variant="dark" >
                    <thead>
                        <tr>
                        <th>Ngày vi phạm</th>
                        <th>Loại hình phạt</th>
                        <th>Lỗi vi phạm</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tienAn.map((toi,key)=>(
                            <tr key={key}>
                            <td>{toi.ngayViPham}</td>
                            <td>{toi.loaiViPham}</td>
                            <td>{toi.loiViPham}</td>
                            </tr>
                        ))}
                    </tbody>
                    </Table> 
                </div>
            </Container>
        </>
    );
}

export default CaNhan;