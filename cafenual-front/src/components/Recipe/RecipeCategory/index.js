import React from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./index.css";
function RecipeCategory() {
  return (
    <div className="recipe-box">
      <Nav fill variant="tabs" defaultActiveKey="/recipe">
      <Link className="box" to="/recipe/">전체보기</Link>
      <Link className="box" to="/recipe/coffee">커피</Link>
      <Link className="box" to="/recipe/latte">라떼</Link>
      <Link className="box" to="/recipe/juice">쥬스</Link>
      <Link className="box" to="/recipe/tea">티</Link>
      </Nav>
    </div>
  );
}

export default RecipeCategory;
