import React from 'react';
import './Detail.css';
import Card from './Card';
import myimg2 from "./assets/pngwing.com.png"


const appointments = [
  {
    hospital: 'St Judes Hospital',
    location: 'Sarasota,FL. 33178',
    dateStart: ' 10',
    dateEnd: '17',
    roomCount: '20 Rooms',
    roomTypes: '10 Singles, 10 doubles',
    status: 'COMPLETED',
  },
];

const Appointment = () => {
  return (
    <>
    <div className="container">
      {appointments.map((appointment) => (
        <div className="main-box" key={appointment.dateStart}>
          <div className="container">
            <div className="my-box">
              <div className="item">
                <div className="box-head-1">
                  <h3>{appointment.hospital}</h3>
                  <p>{appointment.location}</p>
                </div>
              </div>
              <div className="item">
                <div className="line-10"></div>
                <div className="item-wrap">
                  <div className="box-6">
                    <h3>{appointment.dateStart}</h3>
                    <p>October</p>
                  </div>
                  <span>-</span>
                  <div className="box-6">
                    <h3>{appointment.dateEnd}</h3>
                    <p>December</p>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="line-10"></div>
                <div className="box-head-1">
                  <h3>{appointment.roomCount}</h3>
                  <p>{appointment.roomTypes}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="button  right-2">
            <span>{appointment.status}</span>
          </div>
          <div className="container">
            <Card />
          </div>
        </div>
      ))}
    </div>
        <div className="messageimage">
        <img src={myimg2} alt="" />
        </div>
        </>
  );
};

export default Appointment;
