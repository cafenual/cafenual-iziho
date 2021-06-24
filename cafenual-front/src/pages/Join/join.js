import React from "react";
import { Form, Button } from "react-bootstrap";
import "./index.css";
function Join() {
  return (
    <div className="join-box">
      <Form>
        <Form.Label>이름</Form.Label>
        <Form.Control type="text" placeholder="Name" />
        <br />
        <Form.Label>전화번호</Form.Label>
        <Form.Control type="number" placeholder="Number" />
        <Form.Text className="text-muted">-없이 작성해주세요</Form.Text>
        <br />
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email 주소</Form.Label>
          <Form.Control type="email" placeholder="Email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>비밀번호</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check
            type="checkbox"
            label="계정을 만들면 서비스 약관 , 개인 정보 취급 방침 및 기본 알림 설정에 동의하는 것 입니다."
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          회원가입
        </Button>
      </Form>
    </div>
  );
}

export default Join;
