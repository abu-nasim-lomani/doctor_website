import React from 'react';
import Doctor from '../../Home/Doctor/Doctor';
const Doctors = () => {
    return (
        <section className="doctors">
            <div className="container">
                <h5 className="text-center  text-primary mb-5">Our Doctors</h5>
                <div className="row">
                    <Doctor/>
                    <Doctor/>
                    <Doctor/>
                </div>
            </div>
        </section>
    );
};

export default Doctors;