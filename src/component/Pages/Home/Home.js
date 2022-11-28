import React from 'react';
import useTitle from '../../../Hooks/useTitle';
import Header from '../../Shared/Header/Header';
import Advertise from '../Advertise/Advertise';
import Banner from '../../Pages/Banner/Banner';
import Categories from '../Categories/Categories';
import Proven from '../Proven/Proven';

const Home = () => {
    useTitle('home');
    return (
        <div>
         <Banner></Banner>
         <Advertise></Advertise>
         <Categories></Categories>
         <Proven></Proven>
        </div>
    );
};

export default Home;