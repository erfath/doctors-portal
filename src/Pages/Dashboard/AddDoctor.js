import React from 'react';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import Loading from '../Loading/Loading';

const AddDoctor = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const { data: services, isLoading } = useQuery('services', () => fetch('https://damp-ravine-73108.herokuapp.com/services').then(res => res.json()))

    const imgStorageKey = '852f1ded9ccf96152fa8763828b39cff'



    const onSubmit = async data => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imgStorageKey}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                if(result.success){
                    const img = result.data.url;
                    const doctor = {
                        name: data.name,
                        email: data.email,
                        expertIn: data.expertIn,
                        img: img
                    }
                    fetch('https://damp-ravine-73108.herokuapp.com/doctor', {
                        method: "POST",
                        headers:{
                            'content-type': 'application/json',
                            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(doctor)
                    })
                    .then(res=>res.json())
                    .then(inserted=>{
                       if(inserted.insertedId){
                           toast.success('Doctor Added to List Successfully');
                           reset();
                       }
                       else{
                           toast.error("Failed to Add Doctor")
                       }
                    })
                }
                console.log('imgbb', result)
            })

    };
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h2>Add a New Doctor</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>

                    <input
                        type="text"
                        placeholder="Doctor's Name"
                        className="input input-bordered w-full max-w-xs"
                        {...register("name", {
                            required: {
                                value: true,
                                message: "Name required"
                            }
                        })}
                    />
                    <label className="label">
                        {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                    </label>
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input
                        type="email"
                        placeholder="Doctor's Email"
                        className="input input-bordered w-full max-w-xs"
                        {...register("email", {
                            pattern: {
                                value: /[A-Za-z]{3}/,
                                message: "enter a valid email"
                            },
                            required: {
                                value: true,
                                message: "Email required"
                            }
                        })}
                    />
                    <label className="label">
                        {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                        {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                    </label>
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Expert in </span>
                    </label>
                    <select {...register('expertIn')} class="select input-bordered w-full max-w-xs">

                        {
                            services.map(service => <option
                                key={service._id}
                                value={service.name}
                            >{service.name}</option>
                            )
                        }
                    </select>
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Photo</span>
                    </label>

                    <input
                        type="file"
                        className="input input-bordered w-full max-w-xs"
                        {...register("image", {
                            required: {
                                value: true,
                                message: "Photo required"
                            }
                        })}
                    />
                    <label className="label">
                        {errors.image?.type === 'required' && <span className="label-text-alt text-red-500">{errors.image.message}</span>}
                    </label>
                </div>
                <input className='btn w-full mt-5 max-w-xs' value="Add" type="submit" />
            </form>
        </div>
    );
};

export default AddDoctor;