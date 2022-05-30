import React, { useState, useEffect } from "react";
import { Container, Form, FormControl, Button, Modal, Tabs, Tab } from "react-bootstrap";
function CanBo() {
    //fetch dữ liệu database
    const [danhSachCanBo,setDanhSachCanBo]= useState([]);
    useEffect(()=>{
        fetch('http://localhost:3003/thongTinCanBo')
        .then(res => {
            return res.json();
        })
        .then(data =>{
            setDanhSachCanBo(data);
        })
    },[])
    //search item
    const [query, setQuery] = useState("");
    // click->dialog
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = (post) => {
        setShow(true);
        setDataCanBo(post);
    }
    const [dataCanBo, setDataCanBo]= useState({cmnd:"",ten:"",ngaySinh:"",gioiTinh:"",chucVu:"",
    diaChiCongTac:"",queQuan:"",ketHon:"",img:"",quocTich:"",idCanBo:"",tieuSu:""});
    return (
        <>
            <div className="divv" style={{textAlign: "center"}}><h1>Thông tin cán bộ</h1></div>
            <Container>
            <div >
            <Form className="d-flex divv" style={{width:1000}}>
                <FormControl
                type="search"
                placeholder="Tìm kiếm"
                className="me-2"
                aria-label="Search"
                onChange={event => setQuery(event.target.value)}
                />
                {/* <Button variant="outline-success">Search</Button> */}
            </Form>
            {danhSachCanBo?
            danhSachCanBo.filter(post => {
                if (query === ''||post.ten.toLowerCase().includes(query.toLowerCase())) {
                    return post;
                }
                return null;
                }).map((post, index) => (
                <div className="box2 box-width-1 divv" 
                    key={index} 
                    onClick={()=>{
                        handleShow(post);
                }}>
                    <div className="d-flex flex-row justify-content-start">
                    <div className="divv">
                        <img src={post.img} alt="ai mà biết được" width={100} height={100} />
                    </div>
                    <div className="divv">
                        <p>Tên: {post.ten}</p>
                        <p>Địa chỉ công tác: {post.diaChiCongTac}</p>
                        <p>Chức vụ: {post.chucVu}</p>
                    </div>
                    </div>
                </div>
                )):<></>
            }
            </div>

            <Modal show={show} onHide={handleClose} className="mauDen">
                <Tabs defaultActiveKey="home">
                    <Tab eventKey="home" title="Thông tin cơ bản">
                    <Modal.Header closeButton>
                    <Modal.Title>Thông tin cán bộ</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div>
                            <p>Số hiệu công chức:{dataCanBo.idCanBo}</p>
                            <p>Họ tên: {dataCanBo.ten}</p>
                            <p>Ngày sinh: {dataCanBo.ngaySinh}</p>
                            <p>Quê quán: {dataCanBo.queQuan}</p>
                            <p>Giới tính: {dataCanBo.gioiTinh?"nam":"nữ"}</p>
                            <p>Chức vụ: {dataCanBo.chucVu}</p>
                            <p>địa chỉ công tác: {dataCanBo.diaChiCongTac}</p>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                    <Button variant="primary" onClick={handleClose}>
                    Đóng
                    </Button>
                    </Modal.Footer>
                    </Tab>
                    <Tab eventKey="profile" title="Tiểu sử">
                    <Modal.Header closeButton>
                    <Modal.Title>Tiểu sử cán bộ</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div>{dataCanBo.tieuSu}</div>
                    </Modal.Body>
                    <Modal.Footer>
                    <Button variant="primary" onClick={handleClose}>
                    Đóng
                    </Button>
                    </Modal.Footer>
                    </Tab>
                </Tabs>
            </Modal>
            
            </Container>
        </>
    );
}

export default CanBo;