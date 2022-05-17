import React from 'react';

const Comments = ({ comment }) => {
    return (
        <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
                <p className='mb-5'>If a dog chews shoes whose shoes does he choose?</p>
                <div className='flex items-center'>
                    <div className="avatar">
                        <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={comment.img} />
                        </div>
                    </div>
                    <div className='ml-5'>
                        <h2>{comment.name}</h2>
                        <h2>{comment.address}</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Comments;