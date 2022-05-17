import React from 'react';
import appointment from '../../assets/images/appointment.png'
import Button from '../Shared/Button';

const Contact = () => {
    return (
        <div>

            <div className="hero" style={{
                background: `url(${appointment})`
            }}>
                <div className="card-body">
                    <div>
                        <h2 className='font-bold text-secondary text-xl text-center'>Contact Us</h2>
                        <h2 className='text-white text-2xl text-center'>Stay Connected With Us</h2>
                    </div>   
                        <div className="form-control">
                            <input type="text" placeholder="Email Address" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <input type="text" placeholder="Subject" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <textarea type="text" placeholder="Your Message" className="input input-bordered" />
                        </div>
                        <div className="form-control mt-6">
                            <Button>Submit</Button>
                        </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;