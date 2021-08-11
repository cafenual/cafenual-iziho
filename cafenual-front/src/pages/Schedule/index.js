import React from "react";
import "./style.scss";
import Sidemenu from "./../../layouts/Header/Side/index";
import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import { formatDate } from '@fullcalendar/react';

function Schedule() {
    let str = formatDate(new Date(), {
        month: 'long',
        year: 'numeric',
        day: 'numeric'
      });
      
      console.log(str);
  return (
    <>
      <Sidemenu />
      <div id="schedule-container">
        <div id="calendar">
          <FullCalendar
            plugins={[dayGridPlugin]}
            initialView="dayGridMonth"
            
          />
        </div>
      </div>
    </>
  );
}

export default Schedule;
