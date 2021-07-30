import React from "react";
import "./style.scss";
import { IoMdPerson } from "react-icons/io";
function Management() {
  const fakedata = [
    {
      email: "test1@naver.com",
      name: "이지호",
      wage: 10000,
      role: "employer",
    },
    {
      email: "test2@naver.com",
      name: "이도현",
      wage: 8750,
      role: "employee",
    },
    {
      email: "test3@naver.com",
      name: "신미르",
      wage: 8750,
      role: "employee",
    },
    {
      email: "test4@naver.com",
      name: "이소현",
      wage: 8750,
      role: "employee",
    },
    {
      email: "test1@naver.com",
      name: "이지호",
      wage: 10000,
      role: "employer",
    },
    {
      email: "test2@naver.com",
      name: "이도현",
      wage: 8750,
      role: "employee",
    },
    {
      email: "test3@naver.com",
      name: "신미르",
      wage: 8750,
      role: "employee",
    },
    {
      email: "test4@naver.com",
      name: "이소현",
      wage: 8750,
      role: "employee",
    },
    {
      email: "test1@naver.com",
      name: "이지호",
      wage: 10000,
      role: "employer",
    },
    {
      email: "test2@naver.com",
      name: "이도현",
      wage: 8750,
      role: "employee",
    },
    {
      email: "test3@naver.com",
      name: "신미르",
      wage: 8750,
      role: "employee",
    },
    {
      email: "test4@naver.com",
      name: "이소현",
      wage: 8750,
      role: "employee",
    },
    {
      email: "test1@naver.com",
      name: "이지호",
      wage: 10000,
      role: "employer",
    },
    {
      email: "test2@naver.com",
      name: "이도현",
      wage: 8750,
      role: "employee",
    },
    {
      email: "test3@naver.com",
      name: "신미르",
      wage: 8750,
      role: "employee",
    },
    {
      email: "test4@naver.com",
      name: "이소현",
      wage: 8750,
      role: "employee",
    },
  ];

  return (
    <>
      <div className="management-container">
        <div className="title">
          직원관리 <button className="modify">수정완료</button>
        </div>

        <div className="emploer-list">
          {fakedata.map((item, index) => (
            <div key={index} className="emploer-info">
              <div className="emploer-info-element">
                <IoMdPerson /> 이름 : {item.name}
              </div>
              <div className="emploer-info-element">
                직급 : <input type="text" value={item.role} />
              </div>
              <div className="emploer-info-element">이메일 : {item.email}</div>
              <div className="emploer-info-element">
                시급 : <input type="text" value={item.wage} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Management;
