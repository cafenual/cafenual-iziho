import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
import "./index.css";
import { useHistory } from "react-router-dom";

function Join() {
  const history = useHistory(); //주소를 바꿔준다
  

  const [form, setform] = useState({
    email: "",
    name: "",
    phoneNumber: "",
    password: "",
    passwordCheck: "",
  });
  const { email, name, phoneNumber, password, passwordCheck } = form;

  const onChange = (e) => {
    const nextForm = {
      ...form, //form 은 아니지만 form과 동일한 애가 복사됨
      [e.target.name]: e.target.value,
    };
    setform(nextForm);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const body = {
      email,
      name,
      phoneNumber,
      password,
      passwordCheck,
    };
    axios
      .post("http://localhost:5000/api/user/register", body)
      .then((response) => {
        console.log(response);
        if (response.data.success){
          history.push("/login")
        }
      });
  };

  return (
    <div className="join-box">
      <div className="title">회원가입</div>
      <Form onSubmit={onSubmit}>
        <Form.Label>이름</Form.Label>
        <Form.Control
          type="text"
          name="name"
          placeholder="Name"
          value={name}
          onChange={onChange}
        />
        <br />
        <Form.Label>전화번호</Form.Label>
        <Form.Control
          type="number"
          name="phoneNumber"
          placeholder="phoneNumber"
          value={phoneNumber}
          onChange={onChange}
        />
        <Form.Text className="text-muted">-없이 작성해주세요</Form.Text>
        <br />
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email 주소</Form.Label>
          <Form.Control
            type="email"
            placeholder="Email"
            name="email"
            value={email}
            onChange={onChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>비밀번호</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={onChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>비밀번호 확인</Form.Label>
          <Form.Control
            type="password"
            placeholder="PasswordCheck"
            name="passwordCheck"
            value={passwordCheck}
            onChange={onChange}
          />
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
