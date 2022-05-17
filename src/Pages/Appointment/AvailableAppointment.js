import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import { DayPicker } from 'react-day-picker';
import { useQuery } from 'react-query';
import Loading from '../Loading/Loading';
import BookingModal from './BookingModal';
import Service from './Service';


const AvailableAppointment = ({ date, setDate }) => {
    const [treatment, setTreatment] = useState(null);
    const formattedDate = format(date, 'PP');
    const { data: services, isLoading, refetch } = useQuery(['available', formattedDate], () => fetch(`https://damp-ravine-73108.herokuapp.com/available?date=${formattedDate}`).then(res => res.json()))

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <p className='text-center text-xl text-secondary'>Available Appointment on <strong>{format(date, 'PP')}.</strong></p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                        setTreatment={setTreatment}
                    ></Service>)
                }
            </div>
            {treatment && <BookingModal
                date={date}
                treatment={treatment}
                setTreatment={setTreatment}
                refetch={refetch}></BookingModal>}

        </div>
    );
};

export default AvailableAppointment;