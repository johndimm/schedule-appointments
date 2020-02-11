import React from 'react';

//
//  List the existing appointments, with delete and edit links.
//

const Appointments = (props) => {

  const deleteAppointment = (event, id) => {
    props.deleteAppointment(id);
    event.preventDefault();
  }

  const editAppointment = (event, id) => {
    props.editAppointment(id);
    event.preventDefault();
  }

  let alist = [(
    <tr key="-1">
        <th>Date</th>
        <th>Time</th>
        <th>Location</th>
        <th>Description</th>
    </tr>
  )];

  let wastbasketEmoji = '&#x1F5D1;&#xFE0F';

  if ('appointments' in props) 
    alist = alist.concat (Object.keys(props.appointments).map( (id, index) => {
        let appointment = props.appointments[id];
        console.log("appointment: ", appointment);
        return (
            <tr key={id} onClick={(e)=> editAppointment(e, id)}>
                <td>{appointment.date}</td>
                <td>{appointment.time}</td>
                <td>{appointment.location}</td>
                <td>{appointment.description}</td>
                <td className="delete_icon" 
                    onClick={(e)=> deleteAppointment(e, id)} 
                    title="delete this appointment">
                    <span dangerouslySetInnerHTML={{__html: wastbasketEmoji}}></span>
                </td>
            </tr>
        )
    }));

  return (
    <div className="appointments_div section">
        <div className="header">
            <div className="subtitle">Appointments</div>
            <i>Click an appointment to edit</i>
        </div>
        <table>
            <tbody>
                {alist}
            </tbody>
        </table>
    </div>
  );
};

export default Appointments;

