 
import React from "react";
import { Table, Button } from "react-bootstrap";
const RequestList = () => {
  return (
    <>
      <section>
        <div className="container">
          <h1 style={{ textAlign: "center", marginBottom: "20px" }}>
            Danh sách yêu cầu lịch hẹn
          </h1>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Họ tên công dân</th>
                <th>Vấn đề cần giải quyết</th>
                <th>Chi tiết</th>
                <th>Đặt lịch</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Lê Đình Hoà</td>
                <td>Tranh chấp đất đai</td>
                <td><Button className = "btn btn-primary">Chi tiết</Button></td>
                <td><Button className = "btn btn-primary">Đặt Lịch </Button></td>
              </tr>
              <tr>
                <td>Lê Đình Hoà</td>
                <td>Tranh chấp đất đai</td>
                <td><Button className = "btn btn-primary">Chi tiết</Button></td>
                <td><Button className = "btn btn-primary">Đặt Lịch </Button></td>
              </tr>
              <tr>
                <td>Lê Đình Hoà</td>
                <td>Tranh chấp đất đai</td>
                <td><Button className = "btn btn-primary">Chi tiết</Button></td>
                <td><Button className = "btn btn-primary">Đặt Lịch </Button></td>
              </tr>
              <tr>
                <td>Lê Đình Hoà</td>
                <td>Tranh chấp đất đai</td>
                <td><Button className = "btn btn-primary">Chi tiết</Button></td>
                <td><Button className = "btn btn-primary">Đặt Lịch </Button></td>
              </tr>
              <tr>
                <td>Lê Đình Hoà</td>
                <td>Tranh chấp đất đai</td>
                <td><Button className = "btn btn-primary">Chi tiết</Button></td>
                <td><Button className = "btn btn-primary">Đặt Lịch </Button></td>
              </tr>

            </tbody>
          </Table>
        </div>
      </section>
    </>
  );
};

export default RequestList;
