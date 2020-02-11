import React from 'react';

//
//  Manage the form to add or edit appointments.
//

var appointmentId = 0;

const toDateInputValue = (function(date) {
  var local = new Date(date);
  local.setMinutes(date.getMinutes() - date.getTimezoneOffset());
  return local.toJSON().slice(0,10);
});

const Scheduling = (props) => {

    let dateInput = null;
    let timeInput = null;
    let locationInput = null;
    let descriptionInput = null;

    // 
    // BY default, set date and time to now.
    //
    const today = new Date();
    let hours = today.getHours().toString().padStart(2, '0')
    let minutes = today.getMinutes().toString().padStart(2, '0');
    const defaultAppointment = {
      id: -1,
      date:toDateInputValue(today),
      time: hours + ':' + minutes
    };

    const appointment = (props.appointment && 'id' in props.appointment)
      ? props.appointment
      : defaultAppointment; 
    
    let date = appointment.date;
    let time = appointment.time;
    let location = appointment.location;
    let description = appointment.description;

    const addAppointment = (event) => {
       event.preventDefault();

       date = dateInput.value;
       time = timeInput.value;
       location = locationInput.value;
       description = descriptionInput.value;

       // Update or add.
       let id = (appointment.id !== -1) 
         ? appointment.id 
         : appointmentId++;

       props.submitAppointment (
           { id: id,
             date: date,
             time: time,
             location: location,
             description: description
            }
       )
    }

    return (   
      <div className="scheduling_div section">
          <div className="header">
              <div className="subtitle">Scheduling</div>
              <i>Create or edit an appointmnent</i>
          </div>
          <form onSubmit={addAppointment} key={appointment.id}>
              <div>
                  <div className="block">
                      <label>
                          Date:
                      </label>
                      <input type='date' 
                        defaultValue={date} 
                        ref={(input)=> dateInput = input} >
                      </input>
                  </div>

                  <div className="block">
                      <label>
                          Time:
                      </label>
                      <input type='time' 
                        defaultValue={time} 
                        ref={(input)=> timeInput = input} >
                      </input>
                  </div>

                  <div className="block">
                      <label>
                          Location:
                      </label>
                      <input type='text' 
                        defaultValue={location} 
                        ref={(input)=> locationInput = input} >
                      </input>
                  </div>

                  <div className="block">
                      <label>
                          Description:
                      </label>
                      <input type='text' 
                        defaultValue={description} 
                        ref={(input)=> descriptionInput = input} >
                      </input>
                  </div>
              </div>

              <div className="button_div">
                  <button type="submit">Save</button>
              </div>
          </form>
      </div>

    )
}

export default Scheduling