import React from "react";
import "./index.scss";
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FiHome } from 'react-icons/fi';

const Sidemenu = () => {
  return (
    <div id="sidemenu">
      <div className="selected-menu"><FiHome size="20"/>홈</div>
      <div className="non-selected-menu"><FiHome size="20"/><Link to="/dash/user">사용자 정보</Link></div>

    </div>
  );
};

export default Sidemenu;
