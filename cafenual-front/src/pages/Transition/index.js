import React, { useEffect, useState } from "react";
import "./style.css";
import client from "api/client";
import { useDispatch, useSelector } from "react-redux";
import TransDetail from "components/TrasnDetail/index";
import { Link, useHistory, useParams } from "react-router-dom";
import { SetTransition } from "modules/transition";
import useInput from "hooks/common/useInput";
function Transition() {
  const history = useHistory();
  const transition = useSelector((state) => state.transition);
  const dispatch = useDispatch();
  const params = useParams();
  const route = params.transId;
  const [trans, setTrans] = useState([]);

  //인수인계 리스트 불러오기
  useEffect(() => {
    const getData = async () => {
      const response = await client.get(`/transition/readTransition`);
      setTrans(response.data.transitions);
    };
    getData();
  }, [route]);

  //인수인계 생성
  // const [createName, onChangeCreateName, setCreateName] = useInput('');
  // const onClickCreate = async () => {
  //   try {
  //     const newTrans = await client.post(`/transition/createTransition`)
  //     setBoards(boards);
  //     setCreateName('');
  //   } catch (e) {
  //     alert('게시판 생성에 실패했습니다.');
  //     console.log(e);
  //     setCreateName('');
  //   }
  // };

  //인수인계 삭제
  const onClickDelete = async () => {
    try {
      const newTrans = await client.delete(
        `/transition/deleteTransition/${route}`
      );
      console.log(newTrans.data.transitions);
      // setTrans(newTrans);
      history.push("/transition");
      window.location.reload();
    } catch (e) {
      alert("인수인계 삭제에 실패했습니다.");
      console.log(e);
    }
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
            <div className="buttons">
              <Link to="/transitionCreate">추가</Link>
            </div>
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
