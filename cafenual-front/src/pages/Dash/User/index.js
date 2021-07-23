import React, { useState } from "react";
import Sidemenu from "./../../../layouts/Header/Side/index";
import "./style.scss";
const UserInfo = () => {


  const [inputs, setinputs] = useState({
    email: "dlwlgh123@naver.com",
    name: "이지호",
  });
  const [user, setUser] = useState({
    email:"dlwlgh123@naver.com",
    name: "이지호",
  });
  const handleOnChange = (e) => {
    setinputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
    console.log(inputs.email + inputs.name);
  };

  const handleOnClick = () => {
    setUser({
        email:inputs.email,
        name:inputs.name
    })
      setOpenemail(false)
      setOpenname(false)
}

  const [Openemail, setOpenemail] = useState(false);
  const [Openname, setOpenname] = useState(false);


  return (
    <>
      <Sidemenu />
      <div className="user-container">
        <div className="title">사용자 정보</div>
        <div className="info-box">
          <div>이메일 : {user.email}</div>
          <div>
            <button onClick={() => setOpenemail(!Openemail)}>
              이메일 수정하기
            </button>
          </div>
          {Openemail === true ? (
            <div>
              <input
                type="text"
                name="email"
                placeholder="이메일"
                onChange={handleOnChange}
              />
            </div>
          ) : (
            <></>
          )}
        </div>
        <div className="info-box">
          <div>이름 : {user.name}</div>
          <div>
            <button onClick={() => setOpenname(!Openname)}>
              이름 수정하기
            </button>
            {Openname === true ? (
              <div>
                <input type="text" name="name" placeholder="이름" onChange={handleOnChange} />
                <button onClick={handleOnClick}>변경완료</button>
              </div>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default UserInfo;
