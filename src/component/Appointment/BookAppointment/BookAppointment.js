import React from 'react';
import BookingCard from '../BookingCard/BookingCard';


const bookData =[
    {
        id:1,
        subject:'Dental Protection',
        visitingTime:'9:00Am - 12:00PM',
        totalSpace:10
    },
    {
        id:2,
        subject:'Dental Protection',
        visitingTime:'9:00Am - 12:00PM',
        totalSpace:10
    },
    {
        id:3,
        subject:'Dental Protection',
        visitingTime:'9:00Am - 12:00PM',
        totalSpace:10
    },
    {
        id:4,
        subject:'Dental Protection',
        visitingTime:'9:00Am - 12:00PM',
        totalSpace:10
    },
    {
        id:5,
        subject:'Dental Protection',
        visitingTime:'9:00Am - 12:00PM',
        totalSpace:10
    },
    {
        id:6,
        subject:'Dental Protection',
        visitingTime:'9:00Am - 12:00PM',
        totalSpace:10
    }
]

const BookAppointment = ({date}) => {
    return (
        <section>
            <h2 style={{color: '#1cc7c1'}} className="text-center mb-5">To Available Appointment on {date.toDateString()}</h2>
            <div className="row p-4  d-flex justify-content-center m-auto">
                {
                    bookData.map(booking =><BookingCard booking={booking} date={date} key={booking.id}></BookingCard>)
                }
            </div>
        </section>
    );
};

export default BookAppointment;