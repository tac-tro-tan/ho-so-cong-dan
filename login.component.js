import React, { useState } from "react";
import { useForm } from 'react-hook-form';
import './sign.css';
import { Button, Container, Form, FormGroup} from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateUsername } from "../store/userSlice";

function Login(){
    const [username,setUsername]=useState("");
    //lưu bằng redux
    const dispatch = useDispatch();

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        dispatch(updateUsername(data.CMND));
    };
    function handleClick() {
        dispatch(updateUsername(username));
    }
    return (<>
        <div className="divv" style={{textAlign: "center"}}><h1>Đăng nhập</h1></div>
        <Container>
            <div className="box2 box-width-2 mx-auto col d-flex justify-content-center" >
                <Form onSubmit={handleSubmit(onSubmit)}>   
                    <Form.Group>
                        <Form.Label>CMND/CCCD</Form.Label>
                        <Form.Control
                            type="number"
                            min={100000000} max={999999999}
                            placeholder="CMND/CCCD"
                            required="required"
                            {...register('CMND')}
                            value={username}
                            onChange={e=>setUsername(e.target.value)}
                        />
                    </Form.Group>
                    
                    <Form.Group className="mb-3">
                        <Form.Label>Mật khẩu</Form.Label>
                        <Form.Control type="password" placeholder="Nhập mật khẩu"
                        {...register('PASS', { required: true})}/>
                    </Form.Group>
                    {errors.PASS && <span>bắt buộc nhập mật khẩu</span>}
                    <FormGroup>
                        <Form.Check 
                            type="switch"
                            id="custom-switch"
                            label="Ghi nhớ"
                        />
                    </FormGroup>
                    <div style={{alignItems:"center", textAlign:"center", margin:20}}>
                        
                        <Button variant="primary" type="submit" as={Link} to="/?sign=true" onClick={handleClick}>
                            Xác nhận
                        </Button>
                    </div>
                    <p className="forgot-password text-right">
                        Quên <a href="#a">mật khẩu?</a>
                    </p>
                </Form>
            </div>
        </Container>
        </>
    );
}
export default Login;
 