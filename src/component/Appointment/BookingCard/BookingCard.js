import React, { useState } from 'react';
import AppointmentForm from '../AppointmentForm/AppointmentForm';
import './BookingCard.css';

const BookingCard = ({booking, date}) => {
    const [modalIsOpen, setIsOpen] = useState(false);
    function openModal() {
        setIsOpen(true);
    }


    function closeModal() {
        setIsOpen(false);
    }
    return (
        <div className="col-md-4 mb-5">
            <div className="card p-3">
                <div className="card-body test-center">
                    <h5 style={{color: '#1cc7c1'}} className="card-title">{booking.subject}</h5>
                    <h6>{booking.visitingTime}</h6>
                    <p>{booking.totalSpace}</p>
                    <button onClick={openModal} style={{backgroundColor:'#1cc7c1'}} className="btn text-uppercase">Book Appointment</button>
                    <AppointmentForm modalIsOpen={modalIsOpen} appointmentOn={booking.subject} closeModal={closeModal} date={date}></AppointmentForm>
                </div>
            </div>
        </div>
    );
};

export default BookingCard;