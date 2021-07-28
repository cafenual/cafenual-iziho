import React, { useState } from "react";
import Sidemenu from "./../../../layouts/Header/Side/index";
import "./style.scss";
const UserInfo = () => {
  const [inputs, setinputs] = useState({
    email: "dlwlgh123@naver.com",
    name: "이지호",
  });
  const [user, setUser] = useState({
    email: "dlwlgh123@naver.com",
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
      email: inputs.email,
      name: inputs.name,
    });
    setOpenemail(false);
    setOpenname(false);
  };

  const [Openemail, setOpenemail] = useState(false);
  const [Openname, setOpenname] = useState(false);

  return (
    <>
      <Sidemenu />
      <div className="user-container">
        <form>
          <div className="title">사용자 정보</div>
          <div className="info-box">
            <div className="info-elements"> 이메일</div>
            <div className="ans-info">
              <input type="text" value={user.email} />
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

{
  /* <div>
            <button className="buttons" onClick={() => setOpenemail(!Openemail)}>
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
          )} */
}

{
  /* <div>
            <button className="buttons" onClick={() => setOpenname(!Openname)}>
              이름 수정하기
            </button>
            {Openname === true ? (
              <div>
                <input type="text" name="name" placeholder="이름" onChange={handleOnChange} />
                <button className="buttons" onClick={handleOnClick}>변경완료</button>
              </div>
            ) : (
              <></>
            )}
          </div> */
}
