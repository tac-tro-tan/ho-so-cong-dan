import React, { useState } from "react";
import { Button, Container, Form, Table } from "react-bootstrap";


function GuiYeuCau() {
    const [num,setNum]= useState(0);
    return (
        <>
  
        <div className="divv" style={{textAlign: "center"}}><h1>Lập xác nhận</h1></div>
        <Container>
            <div className="d-flex flex-row justify-content-around divv">
                <div className="box2 divv">
                    <Form >
                        <Form.Group className="mb-3">
                            <Form.Label>Loại đơn</Form.Label>
                            <Form.Select >
                            <option>Xác nhận hộ nghèo</option>
                            <option>Xác nhận hộ vừa</option>
                            <option>Xác nhận hộ giàu</option>
                            </Form.Select>
                        </Form.Group>
                        
                        <Form.Group>
                            <Form.Label>Số lượng</Form.Label>
                            <Form.Control
                                type="number"
                                placeholder="Nhập số lượng"
                                min={1} max={10}
                                onChange={(e)=>{
                                    setNum(e.target.value*5000);
                                }}
                            />
                        </Form.Group>
                        
                        <Form.Group className="mb-3">
                            <Form.Label>Lệ phí/đơn</Form.Label>
                            <Form.Control placeholder={`${num} đồng`} disabled />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Xác nhận
                        </Button>
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
                    <th>Số lượng</th>
                    <th>Ngày đề nghị</th>
                    <th>Ngày nhận đơn</th>
                    <th>Trạng thái</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>1</td>
                    <td>Xác nhận hộ nghèo</td>
                    <td>1</td>
                    <td>10/6/1999</td>
                    <td>Đang xử lý</td>
                    <td>Đang xử lý</td>
                    </tr>
                    <tr>
                    <td>2</td>
                    <td>Xác nhận hộ nghèo</td>
                    <td>1</td>
                    <td>10/6/1999</td>
                    <td>Đang xử lý</td>
                    <td>Đang xử lý</td>
                    </tr>
                    <tr>
                    <td>3</td>
                    <td>Xác nhận hộ nghèo</td>
                    <td>1</td>
                    <td>10/6/1999</td>
                    <td>Đang xử lý</td>
                    <td>Đang xử lý</td>
                    </tr>
                </tbody>
                </Table>
                </div>
            </div>  
        </Container>
        </>
    );
}

export default GuiYeuCau;