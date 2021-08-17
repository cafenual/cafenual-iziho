import React, { useState } from "react";
import Sidemenu from "./../../../layouts/Header/Side/index";
import "./style.scss";
const UserInfo = () => {
  const [form, setform] = useState({
    email: "dlwlgh123@naver.com",
    name: "이지호",
  });
  const [user, setUser] = useState({
    email: "dlwlgh123@naver.com",
    name: "이지호",
  });
  const onChange = (e) => {
    setform({
      ...form,
      [e.target.name]: e.target.value,
    });
    console.log(form.email + form.name);
  };


  return (
    <>
      <Sidemenu />
      <div className="user-container">
        <div className="title">사용자 정보</div>
        <form>
          <div className="info-box">
            <div className="info-elements"> 이메일</div>
            <div className="ans-info">
              <input type="text" value={user.email} name="email" onChange={onChange}/>
            </div>
          </div>
          <div className="info-box">
            <div className="info-elements">이름</div>
            <div className="non-ans-info">{user.name}</div>
          </div>
          <div className="info-box">
            <div className="info-elements">현재 비밀번호</div>
            <div className="ans-info">
              <input type="password" />
            </div>
            <div className="info-elements">새 비밀번호</div>
            <div className="ans-info">
              <input type="password" />
            </div>
            <div className="info-elements">비밀번호 다시 입력</div>
            <div className="ans-info">
              <input type="password" />
            </div>
          </div>
          <div className="submit-box">
            <input
              type="submit"
              className="save-user-info"
              value="변경 사항 저장하기"
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default UserInfo;


