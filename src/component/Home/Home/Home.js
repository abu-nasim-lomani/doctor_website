import React from 'react';
import Blog from '../Blog/Blog';
import Contact from '../Contact/Contact';
import Doctors from '../Doctors/Doctors';
import Features from '../Features/Features';
import Footer from '../../Shared/Footer/Footer';
import Header from '../Header/Header';
import MakeApointment from '../MakeApointment/MakeApointment';
import Services from '../Services/Services';
import Testimonials from '../Testimonials/Testimonials';

const Home = () => {
    return (
        <div>
           <Header></Header>
           <Services></Services>
           <Features></Features>
           <MakeApointment></MakeApointment>
           <Testimonials></Testimonials>
           <Blog></Blog>
           <Doctors></Doctors>
           <Contact></Contact>
           <Footer></Footer>
        </div>
    );
};

export default Home;