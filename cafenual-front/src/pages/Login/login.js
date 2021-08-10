import React from "react";
import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import "./index.css";
import axios from "axios";
import { useHistory } from "react-router-dom";
function Login() {
  const history = useHistory();

  const [form, setform] = useState({
    email: "",
    password: "",
  });
  const { email, password } = form;

  const onChange = (e) => {
    const nextForm = {
      ...form, //form 은 아니지만 form과 동일한 애가 복사됨
      [e.target.name]: e.target.value,
    };
    setform(nextForm);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(form);
    const body = {
      email,
      password,
    };

    try {
      const response = await axios.post(
        "http://localhost:5000/api/user/login",
        body
      );
      history.push("/dash");
    } catch (e) {
      alert(e.response.data.message);
    }
  };
  return (
    <div className="login-box">
      <div className="title">로그인</div>
      <Form onSubmit={onSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email 주소</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
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
