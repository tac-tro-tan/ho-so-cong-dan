import React from "react";
import { Button, Container, FloatingLabel, Form } from "react-bootstrap";

function GopY() {
    return(<>
        <div style={{textAlign: "center"}}><h1>Hòm thư góp ý</h1></div>
        <Container>
            <div className="box2 box-width-1 mx-auto">
            <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Tiêu đề</Form.Label>
                <Form.Control type="input" placeholder="Tiêu đề" />
            </Form.Group>
            <Form.Label>Nội dung cụ thể:</Form.Label>
            <FloatingLabel controlId="floatingTextarea2" label="Nội dung">
                <Form.Control
                as="textarea"
                placeholder="Leave a comment here"
                style={{ height: '150px' }}
                />
            </FloatingLabel>
            <div style={{alignItems:"center", textAlign:"center", margin:20}}>
                <Button variant="primary" type="submit" onClick={()=>{alert("Gửi thành công")}}>
                    Gửi
                </Button>
            </div>
            
            </Form>
            </div>
        </Container>
    </>)
}
export default GopY;