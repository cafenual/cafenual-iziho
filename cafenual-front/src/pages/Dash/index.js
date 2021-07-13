import React from "react";
import Sidemenu from "./../../layouts/Header/Side/index";
import "./style.css";
import { Button } from "react-bootstrap";
function Dash() {
  return (
    <>
      <Sidemenu />
      <div id="dash-container">
        <div className="dash-box">
          <div className="box-info">
            <div className="user-picture"></div>
            <ul className="user-info">
              <li>이름 : 이지호</li>
              <li>나이 : 24</li>
              <li>아이디 : </li>
            </ul>
          </div>
          <div className="box-info">전체스케쥴</div>
          <div className="box-info">개인스케쥴</div>
        </div>
        <div className="dash-lowbox">
          <div className="botton-box">
            <Button variant="primary" className="ts">출근하기</Button>
            <Button variant="danger" className="ts">퇴근하기</Button>
          </div>
          <div className="dash-notice">공지사항</div>
        </div>
      </div>
    </>
  );
}

export default Dash;
