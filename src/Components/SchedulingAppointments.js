import React, {useState} from 'react';
import moment from 'moment'
import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import Scheduling from "./Scheduling"
import Appointments from "./Appointments"

//
// The parent component has the state, and passes functions down to children
// to add, edit, and delete appointments.
//

const localizer = momentLocalizer(moment)

const Layout = () => {
  let [events, setEvents] = useState([]);
  const [appointments, setAppointments] = useState({});
  let [appointment, setAppointment] = useState({});


  const submitAppointment= (appointment) => {
    appointments[appointment.id] = appointment;
    setAppointments(appointments);
    console.log("appointment added or updated", appointments);

    const index = events.findIndex( element => element.id === appointment.id);
    if (index !== -1) {
      events.splice(index, 1);
    }  

    setEvents([
      ...events,
      {
        id: appointment.id,
        start: moment(appointment.date),
        end: moment(appointment.date), //.add(1, 'hours'),
        title: appointment.time + ': ' + appointment.description + ', ' + appointment.location
      }
    ])
  }

  const deleteAppointment = (id) => {
    console.log('deleting appointment ' + id);
    
    const revised =  Object.assign({}, appointments);
    delete revised[id];
    setAppointments(revised);

     const index = events.findIndex( element => element.id.toString() === id);
     if (index !== -1) {
       events.splice(index, 1);
       setEvents(events);
     }  
  }

  const editAppointment = (id) => {
     setAppointment(appointments[id]);
  }

  const onSelectEvent = (event) => {
    editAppointment(event.id);
    window.scrollTo(0,0);
  }

  return (
    <div className="layout_div">
        <div>
            <Scheduling appointment={appointment} 
              submitAppointment={submitAppointment} />
            <Appointments appointments={appointments} 
              editAppointment={editAppointment} 
                deleteAppointment={deleteAppointment} />
        </div>

        <div className="section calendar_div">
            <div className="header">
                <div className="subtitle">Calendar</div>
                <i>Click an appointment to edit</i>
            </div>
            <div className='calendar_component'>
                <Calendar 
                  selectable 
                  localizer={localizer} 
                  events={events} 
                  views={[ "month"]} 
                  onSelectEvent={onSelectEvent} />
            </div>
        </div>
    </div>
  );
};

export default Layout;

