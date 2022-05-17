import React from 'react';
import ServiceCard from './ServiceCard';
import cavity from '../../assets/images/cavity.png'
import whitening from '../../assets/images/whitening.png'
import fluoride from '../../assets/images/fluoride.png'

const Services = () => {
    return (
        <div>
            <div className='text-center mt-36 font-sans'>
                <h2 className=' font-bold text-xl text-secondary'>OUR SERVICES</h2>
                <h1  className=' font-normal text-4xl text-accent'>Services We Provide</h1>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 mt-5'>
                <ServiceCard serviceTitle="Fluoride Treatment" img={fluoride}></ServiceCard>
                <ServiceCard serviceTitle="Cavity Filling" img={cavity}></ServiceCard>
                <ServiceCard serviceTitle="Teeth Whitening" img={whitening}></ServiceCard>
            </div>
        </div>
    );
};

export default Services;