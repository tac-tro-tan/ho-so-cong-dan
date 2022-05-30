import React, { useState, useEffect } from "react";
import { Container, Form, FormControl, Button, Modal, Tabs, Tab, Table } from "react-bootstrap";
import "../../css/canbo.css"
function CanBo() {
    const [data1,setData1]= useState([]);
    useEffect(()=>{
        fetch('http://localhost:3003/thongTinCanBo')
        .then(res => {
            return res.json();
        })
        .then(data =>{
            setData1(data);
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
    // click2->dialog2
    const [show2, setShow2] = useState(false);

    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => {
        setShow2(true);
    }
    
    const [dataCanBo, setDataCanBo]= useState({cmnd:"",ten:"",ngaySinh:"",gioiTinh:"",chucVu:"",
    diaChiCongTac:"",queQuan:"",ketHon:"",img:"",quocTich:"",idCanBo:"",tieuSu:""});
    // chỉnh sửa cán bộ
    const handleChange = e => {
        const { name, value } = e.target;
        setDataCanBo(prevState => ({
            ...prevState,
            [name]: value
        }));
    };
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
                <Button variant="outline-success" onClick={handleShow2}>Thêm cán bộ</Button>
            </Form>
            {
            data1.filter(post => {
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
                ))
            }
            </div>

            <Modal show={show} onHide={handleClose} className="mauDen" >
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
                            <p>Giới tính: {dataCanBo.gioiTinh}</p>
                            <p>Chức vụ: {dataCanBo.chucVu}</p>
                            <p>địa chỉ công tác: {dataCanBo.diaChiCongTac}</p>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                    <Button variant="primary" onClick={handleShow2}>
                    Chỉnh sửa
                    </Button>
                    <Button variant="primary" onClick={()=>{handleClose(); alert("mật khẩu đã được reset: 111");}}>
                    reset mật khẩu
                    </Button>
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
                        <div>I am not a king</div>
                        <div>I am not a god</div>
                        <div>I am ...</div>
                        <h1 style={{textAlign:"center"}}>Tấc Tro Tàn</h1>
                        <p>{dataCanBo.tieuSu}</p>
                    </Modal.Body>
                    <Modal.Footer>
                    <Button variant="primary" onClick={handleClose}>
                    Đóng
                    </Button>
                    </Modal.Footer>
                    </Tab>
                </Tabs>
            </Modal>
            <Modal show={show2} onHide={handleClose2} className="mauDen" >
                <Modal.Header closeButton>
                    </Modal.Header>
                    <Modal.Body>
                        <Table striped bordered hover variant="dark" >
                            <tbody>
                                <tr>
                                    <td>Số hiệu công chức:</td>
                                    <td><input value={dataCanBo.sohieu} type="text"
                                    onChange={handleChange} name="sohieu"></input></td>
                                </tr>
                                <tr>
                                    <td>Họ tên:</td>
                                    <td><input value={dataCanBo.name}type="text"
                                    onChange={handleChange} name="name"></input></td>
                                </tr>
                                <tr>
                                    <td>Giới tính:</td>
                                    <td><input type="radio" value={false} name="gender" /> Male
                                        <input type="radio" value={true} name="gender" /> Female
                                    </td>
                                </tr>
                                <tr>
                                    <td>Quê quán:</td>
                                    <td><input value={dataCanBo.quequan}type="text"
                                    onChange={handleChange} name="quequan"></input></td>
                                </tr>
                                <tr>
                                    <td>Ngày sinh:</td>
                                    <td><input type={"date"}></input></td>
                                </tr>
                                <tr>
                                    <td>Chức vụ:</td>
                                    <td><input value={dataCanBo.chucvu} type="text"
                                    onChange={handleChange} name="chucvu"></input></td>
                                </tr>
                                <tr>
                                    <td>Đơn vị công tác:</td>
                                    <td><input value={dataCanBo.diachicongtac} type="text"
                                    onChange={handleChange} name="diachicongtac"></input></td>
                                </tr>
                                <tr>
                                    <td>Quyền hạn:</td>
                                    <td>
                                        <input type="radio" value={0} name="gender" /> Cán bộ 1
                                        <input type="radio" value={1} name="gender" /> Cán bộ 2
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                    </Modal.Body>
                    <Modal.Footer>
                    <Button variant="primary" onClick={handleClose2}>
                    Đóng
                    </Button>
                </Modal.Footer>
            </Modal>
            </Container>
        </>
    );
}

export default CanBo;