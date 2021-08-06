import React, { usestate } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";

import "./index.css";

const Header = () => {
  return (
    <div>
      <Navbar className="TopNavber">
        <Container>
          <Navbar.Brand href="/">Cafenual</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/dash">대시보드</Nav.Link>
            <Nav.Link href="/recipe">메뉴레시피</Nav.Link>
            <Nav.Link href="/notice">공지사항</Nav.Link>
            <Nav.Link href="/transition">인수인계</Nav.Link>
            <Nav.Link href="/manual">업무메뉴얼</Nav.Link>
            <Nav.Link href="/management">직원관리</Nav.Link>
            <Nav.Link href="/join">회원가입</Nav.Link>
            <Nav.Link href="/login">로그인</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;

// import { FaCoffee } from "react-icons/fa";
// import { BiAlarmExclamation } from "react-icons/bi";
// import { MdLocalDrink } from "react-icons/md";
// import { GiPlayerNext, GiBlackBook } from "react-icons/gi";
// import { ImMenu } from "react-icons/im";

// return (
//   <div id="header">
//     <div id="top">
//       <div className="header-left">
//         <FaCoffee size="28px" />
//         <span className="header-logo-string">cafenual</span>
//       </div>
//       <div id="header-right">
//         <div className="header-main">
//           <div className="header-dashboard">
//             <ImMenu size="24px" />
//             <span>대시보드</span>
//           </div>
//           <div className="header-notice">
//             <BiAlarmExclamation size="24px" />
//             <span>공지사항</span>
//           </div>
//           <div className="header-menu">
//             <MdLocalDrink size="24px " />
//             <span>메뉴레시피</span>
//           </div>
//           <div className="header-handover">
//             <GiPlayerNext size="24px" />
//             <span>인수인계</span>
//           </div>
//           <div className="header-manual">
//             <GiBlackBook size="24px" />
//             <span>업무매뉴얼</span>
//           </div>
//         </div>
//         <div id="header-loginbox">
//           <div className="header-login">
//             <span>로그인</span>
//           </div>
//           <div className="header-signup">
//             <span>회원가입</span>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// );
