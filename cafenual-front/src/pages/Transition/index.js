import React, { useEffect, useState } from "react";
import "./style.css";
import client from "api/client";
function Transition() {
  const [trans, setTrans] = useState([]);

  useEffect(() => {
    console.log("asd1");
    const getData = async () => {
      console.log("asd");
      // const response = await axios.get(
      //   "http://localhost:5000/api/transition/readTransition"
      // );
      const response = await client.get(`/transition/readTransition`);
      console.log(response);
    };
    getData();
  }, []);

  return (
    <div id="trans-container">
      <div className="title">인수인계</div>
      <div className="trans-object">
        <div className="list-container">
          <div className="list-header">요일별</div>
          <div className="list-box">
            {}
            <div className="lists">2021.07.13</div>
            <div className="lists">2021.07.12</div>
            <div className="lists">2021.07.11</div>
            <div className="lists">2021.07.10</div>
            <div className="lists">2021.07.09</div>
            <div className="lists">2021.07.08</div>
            <div className="lists">2021.07.07</div>
            <div className="lists">2021.07.06</div>
            <div className="lists">2021.07.05</div>
            <div className="lists">2021.07.04</div>
            <div className="lists">2021.07.03</div>
            <div className="lists">2021.07.02</div>
            <div className="lists">2021.07.01</div>
          </div>
          <div className="button-container">
            <div className="buttons">추가</div>
            <div className="buttons">삭제</div>
            <div className="buttons">수정</div>
          </div>
        </div>
        <div className="trans-contents">
          <div className="contents-header">
            <div className="contents-tit"> 2021.07.13일 오전조 인수인계</div>
            <div className="wirte">
              <div className="mask"></div>
              <div className="nick">이지호</div>
            </div>
          </div>
          <div className="contents">
            오늘 제빙기 청소 하였고 커피통은 안채워 놨습니다. 오후 근무자님
            커피통 부탁드립니다.
          </div>
          <div className="wirte">
            <div className="mask"></div>
            <div className="nick">탄탄이</div>
            <div className="rep-box">네 확인했습니다.</div>
          </div>
          <div className="wirte">
            <div className="mask"></div>
            <div className="nick">탄탄이</div>
            <div className="rep-box">아 그리고 내일 대리 가능한가요?</div>
          </div>
          <div className="reply">
            <div className="reply-tit">댓글</div>
            <div className="reply-box">
              <div className="nick">이지호</div>
              <input type="text" placeholder="댓글을 남겨보세요" />
              <div className="buttons">등록</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Transition;
