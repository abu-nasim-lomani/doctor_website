import React from 'react';
import chair from '../../../images/chair.png';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const AppointmentHeader = ({handleDateChange}) => {
    
    return (
        <main style={{ height: '600px' }} className="row d-flex align-items-center justify-content-center">
            <div className="col-lg-4 col-md-4 offset-md-1">
                <h1>Appointment</h1>
                <Calendar
                    onChange={handleDateChange}
                    value={new Date()}
                />
            </div>
            <div className="col-md-5">
                <img src={chair} className="img-fluid" alt="" />
            </div>
        </main>
    );
};

export default AppointmentHeader;