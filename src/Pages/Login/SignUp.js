import React from 'react';
import auth from '../../firebase.init';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import Loading from '../Loading/Loading';
import { Link, useNavigate } from 'react-router-dom';
import useToken from '../../Hooks/useToken'

const SignUp = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [createUserWithEmailAndPassword, sUser, sLoading, sError] = useCreateUserWithEmailAndPassword(auth);

    const [updateProfile, updating, uError] = useUpdateProfile(auth);
    const [token] = useToken(gUser || sUser)
    const navigate = useNavigate();

    let signInError;

    if (gLoading || sLoading || updating) {
        return <Loading></Loading>
    }

    if (gError || sError || uError) {
        signInError = <p className='text-red-500 text-center'> <small>{gError?.message || sError.message || uError?.message}</small> </p>
    }
    if (token) {
        navigate('/appointment')
    }

    const onSubmit = async data => {
        console.log(data)
        await createUserWithEmailAndPassword(data.email, data.password)
        await updateProfile({ displayName: data.name })
        console.log('user updated')

    };

    return (
        <div className='flex justify-center items-center h-screen'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-center text-xl font-bold text-secondary">Sign Up</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Your Name"
                                className="input input-bordered w-full max-w-xs"
                                {...register("name", {
                                    pattern: {
                                        value: /[A-Za-z]{3}/,
                                        message: "enter a valid name"
                                    },
                                    required: {
                                        value: true,
                                        message: "Name required"
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.text?.type === 'required' && <span className="label-text-alt text-red-500">{errors.text.message}</span>}
                                {errors.text?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.text.message}</span>}
                            </label>
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                placeholder="Your Email"
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
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type="password"
                                placeholder="Your Password"
                                className="input input-bordered w-full max-w-xs"
                                {...register("password", {
                                    minLength: {
                                        value: 6,
                                        message: 'Minimum 6 Character required'
                                    },
                                    required: {
                                        value: true,
                                        message: "Password required"
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                            </label>
                        </div>
                        {signInError}
                        <input className='btn w-full max-w-xs' value="Signup" type="submit" />
                    </form>
                    <p><small>Already have an Account? <Link to='/login' className='text-primary'>Please Login</Link></small></p>
                    <div className="divider">OR</div>
                    <button onClick={() => signInWithGoogle()} className="btn btn-outline">Continue with Google</button>
                </div>
            </div>
        </div>
    );
};

export default SignUp;