import React from 'react';
import { toast } from 'react-toastify';

const DoctorList = ({ doctor, refetch }) => {
    const { name, img, expertIn, email } = doctor;
    
    const handleDelete = email => {
        fetch(`https://damp-ravine-73108.herokuapp.com/doctor/${email}`, {
            method: 'DELETE',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res=>res.json())
        .then(data=>{
            console.log('deleted doctor', data)
            if(data.deletedCount){
                toast.success(`Successfully Deleted ${name}'s Profile`)
                refetch();
            }
        })
    }
    return (
        <div>
            <div class="card bg-base-100 shadow-xl">
                <figure class="px-10 pt-10">
                    <img src={img} alt="" class="rounded-xl" />
                </figure>
                <div class="card-body items-center text-center">
                    <h2 class="card-title">{name}!</h2>
                    <p>Expert In: {expertIn}</p>
                    <div class="card-actions">
                        <button onClick={()=>handleDelete(email)} class="btn btn-error">Remove Profile</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DoctorList;