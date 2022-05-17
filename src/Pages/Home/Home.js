import React from 'react';
import MakeAppointment from '../Home/MakeAppointment'
import Banner from './Banner';
import CommentBox from './CommentBox';
import Contact from './Contact';
import Exceptional from './Exceptional';
import Footer from '../Shared/Footer';
import Info from './Info';
import Services from './Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <Exceptional></Exceptional>
            <MakeAppointment></MakeAppointment>
            <CommentBox></CommentBox>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;