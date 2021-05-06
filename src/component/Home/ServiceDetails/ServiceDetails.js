import React from 'react';

const ServiceDetails = ({service}) => {
    return (
        <div className="col-md-4 mt-5 pt-5">
            <img style={{height:'50px'}} src={service.img} alt=""/>
            <h5 className="mt-3 mb-3">{service.name}</h5>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, ipsum.</p>
        </div>
    );
};

export default ServiceDetails;