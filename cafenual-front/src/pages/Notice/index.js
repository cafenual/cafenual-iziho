import React from "react";
import "./index.css";
import { Link } from "react-router-dom";
function Notice() {
  return (
    <div id="notice">
      <div className="title">공지사항</div>
      <div className="board">
        <table>
          <colgroup>
            <col style={{ width: "108px" }} />
            <col style={{ width: "648px" }} />
            <col style={{ width: "140px" }} />
            <col style={{ width: "108px" }} />
            <col style={{ width: "75px" }} />
          </colgroup>
          <tbody>
            <tr>
              <td className="post-sort">말머리</td>
              <td className="post-tit">제목</td>
              <td className="td-name">작성자</td>
              <td className="td-date">작성일</td>
              <td className="td-view">조회</td>
            </tr>
          </tbody>
        </table>
        <table>
          <colgroup>
            <col style={{ width: "108px" }} />
            <col style={{ width: "648px" }} />
            <col style={{ width: "140px" }} />
            <col style={{ width: "108px" }} />
            <col style={{ width: "75px" }} />
          </colgroup>
          <tbody>
            <tr>
              <td className="post-sort">
                <div className="necessary">필독</div>
              </td>
              <td className="post-tit">
                <Link>가장 중요하게 지킬사항</Link>
              </td>
              <td className="td-name">점장 이지호</td>
              <td className="td-date">2021.07.10.</td>
              <td className="td-view">12</td>
            </tr>
            <tr>
              <td className="post-sort">
                <div className="important">중요</div>
              </td>
              <td className="post-tit">
                <Link>카페 운영시 주의할점</Link>
              </td>
              <td className="td-name">점장 이지호</td>
              <td className="td-date">2021.07.10.</td>
              <td className="td-view">0</td>
            </tr>
            <tr>
              <td className="post-sort">
                <div className="important">중요</div>
              </td>
              <td className="post-tit">
                <Link>응대 메뉴얼</Link>
              </td>
              <td className="td-name">점장 이지호</td>
              <td className="td-date">2021.07.10.</td>
              <td className="td-view">0</td>
            </tr>
            <tr>
              <td className="post-sort">
                <div className="nomal">공지</div>
              </td>
              <td className="post-tit">
                <Link>7월 직원 이벤트 (문화상품권)</Link>
              </td>
              <td className="td-name">매니저 이도현</td>
              <td className="td-date">2021.07.10.</td>
              <td className="td-view">0</td>
            </tr>
            <tr>
              <td className="post-sort">
                <div className="nomal">공지</div>
              </td>
              <td className="post-tit">
                <Link>채용 계획 (지인소개 가능!)</Link>
              </td>
              <td className="td-name">매니저 신미르</td>
              <td className="td-date">2021.07.10.</td>
              <td className="td-view">0</td>
            </tr>
            <tr>
              <td className="post-sort">
                <div className="nomal">공지</div>
              </td>
              <td className="post-tit">
                <Link>7월 4주차 근무표</Link>
              </td>
              <td className="td-name">매니저 이소현</td>
              <td className="td-date">2021.07.10.</td>
              <td className="td-view">0</td>
            </tr>
          </tbody>
        </table>
        <div className="button-container">
          <div className="buttons"><Link to="">글작성</Link></div>
          <div className=""></div>
        </div>
      </div>
    </div>
  );
}

export default Notice;
