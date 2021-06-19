import React, { usestate } from "react";
import { FaCoffee } from "react-icons/fa";
import { BiAlarmExclamation } from "react-icons/bi";
import { MdLocalDrink } from "react-icons/md";
import { GiPlayerNext, GiBlackBook } from "react-icons/gi";
import { ImMenu } from "react-icons/im";

import "./index.css";

const Header = () => {
  return (
    <div id="header">
      <div id="top">
        <div className="header-left">
          <FaCoffee size="28px" />
          <span className="header-logo-string">cafenual</span>
        </div>
        <div id="header-right">
          <div className="header-main">
            <div className="header-dashboard">
              <ImMenu size="24px" />
              <span>대시보드</span>
            </div>
            <div className="header-notice">
              <BiAlarmExclamation size="24px" />
              <span>공지사항</span>
            </div>
            <div className="header-menu">
              <MdLocalDrink size="24px " />
              <span>메뉴레시피</span>
            </div>
            <div className="header-handover">
              <GiPlayerNext size="24px" />
              <span>인수인계</span>
            </div>
            <div className="header-manual">
              <GiBlackBook size="24px" />
              <span>업무매뉴얼</span>
            </div>
          </div>
          <div id="header-loginbox">
            <div className="header-login">
              <span>로그인</span>
            </div>
            <div className="header-signup">
              <span>회원가입</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
