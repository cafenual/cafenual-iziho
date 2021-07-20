import React, { useState } from "react";
import Sidemenu from "./../../layouts/Header/Side/index";
import "./style.css";
import { Button } from "react-bootstrap";
function Dash() {
  const [state, setstate] = useState("퇴근");
  const changeHandler = () => {
    if (state==="퇴근") {
      setstate("출근");
    }else{
      setstate("퇴근");
    }
    console.log(state)
  };

  return (
    <>
      <Sidemenu />
      <div id="dash-container">
        <div className="title">대시보드</div>
        <div className="dash-box">
          <div className="box-info">
            <div className="title">사용자 정보</div>
            <div className="user-picture"></div>
            <ul className="user-info">
              <li>이름 : 이지호</li>
              <li>나이 : 24</li>
              <li>아이디 : dlwlgh123</li>
              <li>상태 : {state}</li>
            </ul>
          </div>
          <div className="box-info">
            <div className="title">전체스케쥴</div>
          </div>
          <div className="button-info-box">
            <div className="small-box-info">
              <div className="title">개인 스케쥴</div>
            </div>
            <div className="botton-box">
              <div className="button" onClick={changeHandler}>
                출근/퇴근
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dash;
