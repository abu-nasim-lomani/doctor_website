import React from 'react';
import './Services.css';
import fluoride from '../../../images/001-dental.png';
import cavity from '../../../images/tooth (1).png';
import whitening from '../../../images/tooth.png';
import ServiceDetails from '../ServiceDetails/ServiceDetails';

const serviceData = [
    {
        img: fluoride,
        name: 'Fluoride Treatment'
    },
    {
        img: cavity,
        name: 'Cavity Feeling'
    },
    {
        img: whitening,
        name: 'Teeth Whitening'
    }
]
const Services = () => {
    return (
        <section className="services-container mt-5">
            <div className="text-center">
                <h5 style={{ color: '#1CC7C1' }}>OUR SERVICES</h5>
                <h2>Services We Provide</h2>
                <div className="d-flex justify-content-center">
                    <div className="row w-75">
                        {
                            serviceData.map(service =><ServiceDetails service={service}></ServiceDetails>)
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;