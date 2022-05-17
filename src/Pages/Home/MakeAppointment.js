import React from 'react';
import appointment from '../../assets/images/appointment.png'
import doctor from '../../assets/images/doctor-small.png'
import Button from '../Shared/Button';
const Appointment = () => {
    return (
        <div style={{ 
            background: `url(${appointment})`
        }} 
        className="flex justify-center items-center mt-56">
                <div className='flex-1'>
                    <img className='mt-[-110px]' src={doctor} alt="" />
                </div>
                <div className="lg:flex-1 lg:p-5 p-10  ">
                    <h1 className="mb-5 text-xl font-bold text-secondary">Appointment</h1>
                    <h1 className="mb-5 text-5xl text-white">Make An Appointment</h1>
                    <p className="mb-5 text-white">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <Button>Get Start</Button>
                </div>
        </div>
    );
};

export default Appointment;