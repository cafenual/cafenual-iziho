import React from "react";
import { Form, Button } from "react-bootstrap";
import "./index.css";
function Login() {
  return (
    <div className="login-box">
      <div className="title">로그인</div>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email 주소</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>비밀번호</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="로그인 정보 저장" />
        </Form.Group>
        <Button variant="primary" type="submit">
          로그인
        </Button>
      </Form>
    </div>
  );
}

export default Login;
