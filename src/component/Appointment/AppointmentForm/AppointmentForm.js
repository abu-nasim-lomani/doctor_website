import React from 'react';
import './AppointmentForm.css';
import Modal from 'react-modal';
import { useForm } from "react-hook-form";


const customStyles = {
    content: {
        width: '400px',
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};
Modal.setAppElement('#root')

const AppointmentForm = ({ modalIsOpen, closeModal, appointmentOn, date }) => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        data.service = appointmentOn;
        data.date = date;
        data.created = new Date();

        fetch('http://localhost:5000/addAppointment', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(success => {
                if (success) {
                    closeModal();
                    alert('Appointment created successfully.');
                }
            })

    };



    return (
        <div className="">
            <Modal isOpen={modalIsOpen} onRequestClose={closeModal} style={customStyles} contentLabel="Example Modal">
                <h2 className="text-center">{appointmentOn}</h2>
                <p className="text-center"><small>ON {date.toDateString()}</small></p>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div class="form-group">
                        <input {...register("firstName", { required: true })} className="form-control" placeholder="Your Name" />
                        {errors.firstName && <span>This field is required</span>}
                    </div>
                    <div class="form-group">
                        <input {...register("phoneNumber", { required: true })} className="form-control" placeholder="Phone Number" />
                        {errors.phoneNumber && <span>This field is required</span>}
                    </div>
                    <div class="form-group">
                        <input {...register("email", { required: true })} className="form-control" placeholder="Email" />
                        {errors.email && <span>This field is required</span>}
                    </div>
                    <div class="form-group d-flex">
                        <div className="w-75 mr-3">
                            <select {...register("gender", { required: true })} class="form-control">
                                <option>Gender</option>
                                <option>Male</option>
                                <option>Female</option>
                            </select>
                        </div>
                        <div>
                            <input {...register("age", { required: true })} className="form-control" placeholder="Your Age" />
                            {errors.age && <span>This field is required</span>}
                        </div>
                        <div className="ml-3">
                            <input {...register("weight", { required: true })} className="form-control" placeholder="Weight" />
                            {errors.weight && <span>This field is required</span>}
                        </div>
                    </div>
                    <input type="submit" className="btn btn-primary" />
                </form>

            </Modal>
        </div>
    );
};

export default AppointmentForm;