import React from 'react';
import Button from '../Shared/Button';

const Service = ({ service, setTreatment }) => {
    const { name, slots } = service;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body text-center">
                <h2 className="card-title text-secondary">{name}</h2>
                <p>{
                    slots.length > 0
                        ? <span>{slots[0]}</span>
                        : <span className='text-red-500  '>Try Another Day</span>
                }</p>

                <p>
                    {slots.length} {slots.length > 1 ? 'spaces' : 'space'} Available Here
                </p>
                <div className="card-actions justify-center">
                    <label
                        htmlFor="booking-modal" onClick={() => setTreatment(service)} disabled={slots.length === 0} className="btn btn-primary font-bold uppercase text-white bg-gradient-to-r from-secondary to-primary">Book Appointment</label>
                </div>
            </div>
        </div>
    );
};

export default Service;