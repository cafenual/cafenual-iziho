import React from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./index.css";
function RecipeCategory() {
  return (
    <div className="recipe-box">
      <Nav fill variant="tabs" defaultActiveKey="/recipe">
        {/* <Nav.Item>
          <Nav.Link to="/recipe/all">전체보기</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link to="/recipe/coffee" eventKey="link-1" >
            커피
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2" to="/recipe/latte">
            라떼
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-3" to={"/recipe/juice"}>
            쥬스
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-4" to={"/recipe/tea"}>
            티
          </Nav.Link>
        </Nav.Item> */}
      <Link to="/recipe/">전체보기</Link>
      <Link to="/recipe/coffee">커피</Link>
      <Link to="/recipe/latte">라떼</Link>
      <Link to="/recipe/juice">쥬스</Link>
      <Link to="/recipe/tea">티</Link>
      </Nav>
    </div>
  );
}

export default RecipeCategory;
