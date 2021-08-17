import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import "./index.css";
import { EmptyUser } from "modules/users";

const Header = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const onLogout = async () => {
    try {
      await axios.post("http://localhost:5000/api/user/logout");
      sessionStorage.removeItem("user");
      dispatch(EmptyUser());
    } catch (e) {
      alert("로그아웃에 실패했습니다");
    }
  };

  return (
    <div>
      <Navbar className="TopNavber">
        <Container>
          <Navbar.Brand href="/">Cafenual</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">대시보드</Nav.Link>
            <Nav.Link href="/recipe">메뉴레시피</Nav.Link>
            <Nav.Link href="/notice">공지사항</Nav.Link>
            <Nav.Link href="/transition">인수인계</Nav.Link>
            <Nav.Link href="/manual">업무메뉴얼</Nav.Link>
            {user.email && (
              <>
                <Nav.Link onClick={onLogout}>로그아웃</Nav.Link>
                {user.name}님 안녕하세요
              </>
            )}

            {!user.email && (
              <>
                <Nav.Link href="/join">회원가입</Nav.Link>
                <Nav.Link href="/login">로그인</Nav.Link>
              </>
            )}
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;