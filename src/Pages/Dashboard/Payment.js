import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Loading/Loading';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51L0iYbHgcyWlDX98TNiADfw3LJxCEDM4jnXBwrAhugRqjqDfpyfVXKZ1ufi69SM8AeXJZhO9RFHJ720EP95o4CR900UWzXN4eO');

const Payment = () => {

    const { id } = useParams();
    const url = `https://damp-ravine-73108.herokuapp.com/booking/${id}`;
    const { data: appointment, isLoading, } = useQuery(['booking', id], () => fetch(url, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    // const { patientName, treatment,  date, slot, price } = appointment;

    if (isLoading) {
        return <Loading></Loading>
    }


    return (
        <div>
            <div>
                <div class="card-body shadow-xl lg:w-2/3 ">
                    <h2 class="card-title"><span className='text-accent'>Hello, {appointment.patientName} </span></h2>
                    <p>Your Appointment: On  <span className='text-orange-700 text-xl'>{appointment.date}</span> at <span className='text-orange-700 text-xl'>{appointment.slot}</span> </p>
                    <p>Please, Pay For <span className='text-orange-700 text-xl'>{appointment.treatment}</span></p>
                    <p>Total Amount: <span className='text-orange-700 text-xl'>${appointment.price}</span></p>
                </div>
                <div class="card-body shadow-xl justify-center ">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm appointment={appointment} />
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;