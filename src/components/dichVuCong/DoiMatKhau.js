import React from "react";
import { Button, Container, Form} from "react-bootstrap";

function DoiMatKhau() {
    return(<>
        <div style={{width:"100vw"}}>
            <div style={{textAlign: "center"}}><h1>Đổi mật khẩu</h1></div>
            <Container>
                <div className="box2 box-width-2 mx-auto col d-flex justify-content-center" >
                <Form >
                    <Form.Group className="mb-3">
                        <Form.Label>Mật khẩu cũ</Form.Label>
                        <Form.Control type="password" placeholder="Nhập mật khẩu cũ"/>
                    </Form.Group>
                    
                    <Form.Group className="mb-3">
                        <Form.Label>Mật khẩu mới</Form.Label>
                        <Form.Control type="password" placeholder="Nhập mật khẩu mới"/>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Xác nhận mật khẩu mới</Form.Label>
                        <Form.Control type="password" placeholder="Xác nhận mật khẩu mới"/>
                    </Form.Group>
                    <div style={{alignItems:"center", textAlign:"center", margin:20}}>
                        <Button variant="primary" type="submit">
                            Xác nhận
                        </Button>
                    </div>
                </Form>
                </div>
            </Container>
        </div>
    </>)
}

export default DoiMatKhau;