import axios from "axios";
import React, { useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router";
import { authenticate } from "./user/apiCore";
const Login = () => {
  const navigate = useNavigate();
  const [cmnd, setCmnd] = useState("");
  const [matKhau, setMatKhau] = useState("");
  const [account, setAccount] = useState([]);
  const handleChangeCmnd = (e) => {
    setCmnd(e.target.value);
  };
  const handleChangeMatKhau = (e) => {
    setMatKhau(e.target.value);
  };
  useEffect(() => {
    loadData();
  }, []);
  async function loadData() {
    const data = await axios.get("http://localhost:3003/dangNhap");
    setAccount(data.data);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    const acc = account.find((obj) => {
      return obj.cmnd == cmnd && obj.matKhau == matKhau;
    });
    if (acc) {
      authenticate(acc);
      navigate("/Home", { replace: true });
    }else{
      alert("Tài khoản sai!");
    }
    
  };
  return (
    <section>
      <div className="container">
        <Form onSubmit={(e) => handleSubmit(e)}>
          <Form.Group className="mb-3" controlId="formBasiccmnd">
            <Form.Label>cmnd/cccd</Form.Label>
            <Form.Control
              onChange={(e) => handleChangeCmnd(e)}
              type="number"
              min={100000000} max={999999999}
              placeholder="CMND/CCCD"
              required="required"
            />
            <Form.Text className="text-muted">
              We'll never share your cmnd with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>matKhau</Form.Label>
            <Form.Control
              onChange={(e) => handleChangeMatKhau(e)}
              type="password"
              placeholder="matKhau"
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </section>
  );
};

export default Login;
