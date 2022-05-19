import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Loading/Loading';
import DoctorList from './DoctorList';

const ManageDoctor = () => {
    const {data: doctors, isLoading, refetch } = useQuery('doctors', ()=> fetch('https://damp-ravine-73108.herokuapp.com/doctor', {
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res=>res.json()));
    if(isLoading){
        return <Loading></Loading>
    }
    return (
        <div>
            <h2 className='text-2xl text-center text-secondary'>Manage All Doctors {doctors.length}</h2>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-10'>
            {
                doctors.map(doctor=> <DoctorList
                key={doctor._id}
                doctor={doctor}
                refetch={refetch}
                ></DoctorList>)
            }
            </div>
        </div>
    );
};

export default ManageDoctor;