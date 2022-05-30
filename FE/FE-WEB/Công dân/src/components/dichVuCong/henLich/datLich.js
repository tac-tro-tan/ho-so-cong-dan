import React from "react";
import { Button, Container, FloatingLabel, Form, Table } from "react-bootstrap";

function DatLich() {
    return(<>
            <div className="divv" style={{textAlign: "center"}}><h1>Đặt lịch hẹn</h1></div>
            <Container>
            <div className="d-flex flex-row justify-content-around divv">
                <div className="box2 divv">
                <Form>
                <FloatingLabel controlId="floatingSelect" label="Vấn đề cần giải quyết" >
                <Form.Select aria-label="Floating label select example">
                    <option value="1">Giải quyết sai lệch giấy tờ</option>
                    <option value="2">Xác nhận vay vốn</option>
                    <option value="3">Công chứng giấy tờ</option>
                </Form.Select>
                </FloatingLabel>
                <Form.Label>Nội dung cụ thể:</Form.Label>
                <FloatingLabel controlId="floatingTextarea2" label="Nội dung">
                    <Form.Control
                    as="textarea"
                    placeholder="Leave a comment here"
                    style={{ height: '150px' }}
                    />
                </FloatingLabel>
                <div style={{alignItems:"center", textAlign:"center", margin:20}}>
                    <Button variant="primary" type="submit"  onClick={()=>{alert("Đặt lịch thành công")}}>
                        Gửi
                    </Button>
                </div>
        
                </Form>
                </div>
                <div className="divv">
                    <Table striped bordered hover variant="dark" >
                    <thead>
                        <tr> 
                            <th colSpan={6} style={{textAlign: "center"}}>
                            Thông tin các lần đề nghị
                            </th>
                        </tr>
                        <tr>
                        <th>#</th>
                        <th>Loại đơn</th>
                        <th>Ngày đề nghị</th>
                        <th>Ngày hẹn gặp</th>
                        <th>Trạng thái</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>1</td>
                        <td>Xác nhận vay vốn</td>
                        <td>10/6/1999</td>
                        <td>Đang xử lý</td>
                        <td>Đang xử lý</td>
                        </tr>
                        <tr>
                        <td>2</td>
                        <td>Công chứng giấy tờ</td>
                        <td>10/6/2999</td>
                        <td>Đang xử lý</td>
                        <td>Đang xử lý</td>
                        </tr>
                        <tr>
                        <td>3</td>
                        <td>Xử lý sai lệch</td>
                        <td>10/6/3999</td>
                        <td>Đang xử lý</td>
                        <td>Đang xử lý</td>
                        </tr>
                    </tbody>
                    </Table>
                </div>
            </div>
            </Container>
    </>)
}

export default DatLich;