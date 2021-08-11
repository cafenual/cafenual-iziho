import React, { useState } from "react";
import "./style.scss";
import { RiDeleteBin6Line } from "react-icons/ri";

function Manual() {
  const [openPart, setopenPart] = useState(false);
  const [openWork, setopenWork] = useState(false);
  return (
    <div className="manual-container">
      <div className="title">업무 메뉴얼</div>
      <div className="manual-buttons">
        <div
          className="manual-btn"
          onClick={() => {
            setopenPart(!openPart);
          }}
        >
          파트 추가하기
        </div>

        {openPart === true ? (
          <div className="add-manual">
            <div className="info-box">
              <div className="info-elements">파트</div>
              <div className="ans-info">
                <input type="text" />
                <div className="manual-btn">추가하기</div>
              </div>
            </div>
          </div>
        ) : (
          <></>
        )}
      </div>
      <div className="manual-list">
        <div className="todo-list">
          <div className="todo-part">공통</div>
          <div className="todo-task">
            <ul>
              <li>출근하고 바닥쓸기</li>
              <li>온도 겨울(26~27도),여름(22~24) 유지</li>
              <li>손씻고 음료제조</li>
              <li>친절하게</li>
              <li>목소리 크게</li>
            </ul>
          </div>
        </div>
        <div className="todo-list">
          <div className="todo-part">1조</div>
          <div className="todo-task">
            <ul>
              <li>출근하고 바닥쓸기</li>
              <li>온도 겨울(26~27도),여름(22~24) 유지</li>
              <li>손씻고 음료제조</li>
              <li>친절하게</li>
              <li>목소리 크게</li>
            </ul>
          </div>
        </div>
        <div className="todo-list">
          <div className="todo-part">2조</div>
          <div className="todo-task">
            <ul>
              <li>출근하고 바닥쓸기</li>
              <li>온도 겨울(26~27도),여름(22~24) 유지</li>
              <li>손씻고 음료제조</li>
              <li>친절하게</li>
              <li>목소리 크게</li>
            </ul>
          </div>
        </div>
        <div className="todo-list">
          <div className="todo-part">3조</div>
          <div className="todo-task">
            <ul>
              <li>출근하고 바닥쓸기</li>
              <li>온도 겨울(26~27도),여름(22~24) 유지</li>
              <li>손씻고 음료제조</li>
              <li>친절하게</li>
              <li>목소리 크게</li>
            </ul>
          </div>
        </div>
        <div className="todo-list">
          <div className="todo-part">
            <div>4조</div>
          </div>
          <div className="todo-task">
            <ul>
              <li>
                <div className="del-todo">
                  <RiDeleteBin6Line />
                </div>
                출근하고 바닥쓸기
              </li>
              <li>
                <div className="del-todo">
                  <RiDeleteBin6Line />
                </div>
                온도 겨울(26~27도),여름(22~24) 유지
              </li>
              <li>
                <div className="del-todo">
                  <RiDeleteBin6Line />
                </div>
                손씻고 음료제조
              </li>
              <li>
                <div className="del-todo">
                  <RiDeleteBin6Line />
                </div>
                친절하게
              </li>
              <li>
                <div className="del-todo">
                  <RiDeleteBin6Line />
                </div>
                목소리 크게
              </li>
            </ul>
          </div>
          <div
            className="info-elements"
            onClick={() => {
              setopenWork(!openWork);
            }}
          >
            업무 추가하기
          </div>
          {openWork === true ? (
            <div className="info-box">
              <div className="ans-info">
                <input type="text" />
                <div className="manual-btn">추가하기</div>
              </div>
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
}

export default Manual;
