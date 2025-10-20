import React from 'react';
import Navbar from '../Header/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Footer/Footer';
import './Root.css'

const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <section className='background'>
                <main className='w-11/13 mx-auto min-h-[calc(100vh-285px)] '>
                <Outlet></Outlet>
            </main>
            </section>
            <Footer></Footer>
        </div>
    );
};

export default Root;