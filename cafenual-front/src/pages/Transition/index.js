import React, { useEffect, useState } from "react";
import "./style.css";
import client from "api/client";
import { useDispatch, useSelector } from "react-redux";
import TransDetail from "components/TrasnDetail/index";
import { Link } from "react-router-dom";
function Transition() {
  const transition = useSelector((state) => state.transition);
  const dispatch = useDispatch();
  const [trans, setTrans] = useState([]);
  const [Dates, setDates] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const response = await client.get(`/transition/readTransition`);
      setTrans(response.data.transitions);
    };
    getData();
  }, []);

  const onClickDelete = async() => {
    dispatch()
  };
  return (
    <div id="trans-container">
      <div className="title">인수인계</div>
      <div className="trans-object">
        <div className="list-container">
          <div className="list-header">날짜별</div>
          <div className="list-box">
            {trans.map((trans, index) => (
              <div key={index} className="lists">
                <Link to={`/transition/${trans._id}`}>
                  {trans.createdAt.substr(0, 10)}
                </Link>
              </div>
            ))}
          </div>
          <div className="button-container">
            <div className="buttons">추가</div>
            <div className="buttons" onClick={onClickDelete}>
              삭제
            </div>
            <div className="buttons">수정</div>
          </div>
        </div>
        <TransDetail />
      </div>
    </div>
  );
}

export default Transition;
