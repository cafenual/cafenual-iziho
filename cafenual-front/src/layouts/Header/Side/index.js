import React from "react";
import "./index.scss";
import { Link } from 'react-router-dom';
import { FiHome,FiUser,FiUserCheck,FiTrello } from 'react-icons/fi';

const Sidemenu = () => {
  return (
    <div id="sidemenu">
      <div className="selected-menu"><FiHome size="20"/><Link to="/">홈</Link></div>

      <div className="non-selected-menu"><FiUser size="20"/><Link to="/user">사용자 정보</Link></div>
      <div className="non-selected-menu"><FiUserCheck size="20"/><Link to="/management">직원 관리</Link></div>
      <div className="non-selected-menu"><FiTrello size="20"/><Link to="/schedule">스케줄 관리</Link></div>
    </div>
  );
};

export default Sidemenu;
