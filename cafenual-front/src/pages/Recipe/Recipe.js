import React from "react";
import {Nav} from 'react-bootstrap'
import "./index.css"
function Recipe() {
  return (
    <div className="recipe-box">
      <Nav fill variant="tabs" defaultActiveKey="/recipe">
        <Nav.Item>
          <Nav.Link href="/recipe/all">전체보기</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1" href="/recipe/coffee">커피</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2"href="/recipe/latte">라떼</Nav.Link>
        </Nav.Item>
        <Nav.Item>
        <Nav.Link eventKey="link-3" href="/recipe/juice">쥬스</Nav.Link>
        </Nav.Item>
        <Nav.Item>
        <Nav.Link eventKey="link-4" href="/recipe/tea">티</Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
}

export default Recipe;
