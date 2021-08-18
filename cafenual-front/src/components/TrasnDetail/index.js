import React from "react";
import { useEffect } from "react";
import { useParams } from "react-router";
import "./style.scss";
import { useDispatch, useSelector } from "react-redux";
import client from "api/client";
import { SetTransition } from "modules/transition";
const TransDetail = () => {
  const dispatch = useDispatch();
  const transition = useSelector((state) => state.transition);
  const user = useSelector((state) => state.user);
  const params = useParams();
  const route = params.transId;

  useEffect(() => {
    const getData = async () => {
      const response = await client.get(
        `/transition/readTransitionDetail/${route}`
      );
      console.log(response)
      dispatch(SetTransition(response.data.transition));
    };
    getData();
  }, [route]);
  return (
    <div>
      <div className="trans-contents">
        <div className="contents-header">
          <div className="contents-tit">{transition.title}</div>
          <div className="wirte">
            <div className="mask"></div>
            <div className="nick">{transition.writer.name}</div>
          </div>
        </div>
        <div className="contents">{transition.content}</div>
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
            <div className="nick">{user.name}</div>
            <input type="text" placeholder="댓글을 남겨보세요" />
            <div className="buttons">등록</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransDetail;
