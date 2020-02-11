This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Scheduling Appointments Exercise

## Developer

 John Dimm
 jdimm@yahoo.com

## Specification

SE Web UI Technical Activity
Create a website that allows you to schedule personal appointments, with the listed user stories.

When complete, please package your code and operating instructions in a zip.file and upload. (The upload tool is located below the questions.)

Notes:
* Please use React to build the application.
* You can stop after three hours, even if it is incomplete.
* You do not need to build a backend, volatile storage works for this task.

1. I would like to create appointments with a date, time, location, and description
2. I would like to see a list of my appointments
3. I would like to edit my appointments
4. I would like to be able to cancel (delete) an appointment
5. I would like the user interface to be simple yet elegant (i.e. has some quick light styling) 

## Links

* [github repo](https://github.com/johndimm/schedule-appointments)
* [live demo hosted on heroku](https://scheduling-appointments.herokuapp.com/)

## Setup

```
npm install
npm start
```

## Description

The screen is divided into three sections:

* Scheduling -- add or edit an appointment
* Appointments -- list existing appointments
* Calendar -- display appointments on a calendar

## Libraries

* react
* react-dom
* [big calendar library](https://github.com/intljusticemission/react-big-calendar)

In my interview with Tim Harris, he emphasized the use of libraries.  With that in mind, I added a calendar library to this project.  It is used only for display, the actual scheduling is all done by this code.

## Limitations

* testing -- normally I would start with some tests, but time is limited.
* redux -- uses component state (useState) rather than redux, to save time on this small project.
* typescript -- not used, again because limited time.
* limited input validation -- you can create appointments in the past, and you can create overlapping appointments.  Input is limited by setting the type for date and time.
* list of appointments is a table -- a better approach would use a grid control to allow sorting by fields.
* calendar -- limited functionality to display.  You can also click on an appointment in the calendar to edit it.  A better approach would allow you to drag-n-drop an appointment to another day, and click on a day to set the date for a new appointment.


