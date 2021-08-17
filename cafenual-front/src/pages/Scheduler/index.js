import React from "react";
import "./style.scss";
import Sidemenu from "../../layouts/Header/Side/index";
import FullCalendar, { formatDate } from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { INITIAL_EVENTS, createEventId } from "./event-utils";
import { useState } from "react";

function Scheduler() {
  const headerToolbar = {
    left: "dayGridMonth,timeGridWeek",
    center: "title",
    right: "prev,next today",
  };

  const [selectDay, setselectDay] = useState();
  return (
    <>
      <Sidemenu />

      <div id="schedule-container">
        <div className="title">스케줄러</div>
        <div className="schedule-box">
          <div id="calendar">
            <FullCalendar
              plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
              initialView="dayGridMonth"
              events={[
                { title: "오픈 파티", date: "2021-08-21" },
                { title: "오픈 파티", date: "2021-08-21" },
              ]}
              headerToolbar={headerToolbar}
              editable={true}
              selectable={true}
              selectMirror={true}
              dayMaxEvents={true}
              select={(a) => {
                console.log(a.startStr);
              }}
              // eventClick={()=>{handleEventClick()}}
              initialEvents={INITIAL_EVENTS}
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

const handleDateSelect = (selectInfo) => {
  let title = prompt("새로운 일정을 추가하세요");
  console.log(selectInfo);
  // let calendarApi = selectInfo.view.calendar

  // calendarApi.unselect() // clear date selection

  // if (title) {
  //   calendarApi.addEvent({
  //     id: createEventId(),
  //     title,
  //     start: selectInfo.startStr,
  //     end: selectInfo.endStr,
  //     allDay: selectInfo.allDay
  //   })
  // }
};
// const handleEventClick = (clickInfo) => {
//   if (confirm(`Are you sure you want to delete the event '${clickInfo.event.title}'`)) {
//     clickInfo.event.remove()
//   }
// }
