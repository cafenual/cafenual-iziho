import React from "react";
import "./style.scss";
import Sidemenu from "../../layouts/Header/Side/index";
import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import { formatDate } from "@fullcalendar/react";

function Scheduler() {
  return (
    <>
      <Sidemenu />

      <div id="schedule-container">
        <div className="title">스케줄러</div>
        <div className="schedule-box">
          <div id="calendar">
            <FullCalendar
              plugins={[dayGridPlugin]}
              initialView="dayGridMonth"
              events={[
                { title: "오픈 파티", date: "2021-08-21" },
                { title: "오픈 파티", date: "2021-08-21" },
              ]}
            />
          </div>
          <div className="scheduler">
            <div className="schedule-date">2021년 08월 21일</div>
            <div className="schedule-details">
              <div id="ele1">일정</div>
              <div id="ele2">
                <ul>
                  <li>오픈파티</li>
                  <li>오픈파티</li>
                  <li>오픈파티</li>
                  <li>오픈파티</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Scheduler;
