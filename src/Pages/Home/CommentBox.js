import React from 'react';
import Comments from './Comments';
import quote from '../../assets/icons/quote.svg'

const CommentBox = () => {
    const comments = [
        {
            "_id": "1",
            "name": "Jhonny",
            "address": "California",
            "img": "https://i.ibb.co/f4KMd15/people1.png"
        },
        {
            "_id": "2",
            "name": "Don",
            "address": "Dhaka",
            "img": "https://i.ibb.co/fncnMY1/people2.png"
        },

        {
            "_id": "3",
            "name": "Sumdany",
            "address": "Barishal",
            "img": "https://i.ibb.co/Qpw9VLr/people3.png"
        }
    ]
    return (
        <section>
            <div className='flex justify-between items-center mt-20'>
                <div>
                    <h1 className='text-secondary text-xl font-bold'>Testimonial</h1>
                    <h2 className='text-accent text-4xl'>What Our Patients Says</h2>
                </div>
                <div>
                    <img className='w-24 lg:w-48' src={quote} alt="" />
                </div>
            </div>

            <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 lg:p-10'>
                {
                    comments.map(comment => <Comments
                        key={comment._id}
                        comment={comment}
                    ></Comments>)
                }
            </div>
        </section>
    );
};

export default CommentBox;