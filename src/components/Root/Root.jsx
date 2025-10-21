import React from 'react';
import Navbar from '../Header/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Footer/Footer';
import './Root.css'
import { useNavigation } from 'react-router';
import LoadingSpinner from '../Spinner/LoadingSpinner';

const Root = () => {
    const navigation = useNavigation()
  //  console.log(navigation)
    //state --> loading or idle
    return (
        <div>
            <Navbar></Navbar>
            {
                navigation?.state === 'loading' ? <LoadingSpinner></LoadingSpinner> :
                    <section className='background'>
                        <main className='w-11/13 mx-auto min-h-[calc(100vh-285px)] '>
                            <Outlet></Outlet>
                        </main>
                    </section>
            }
            <Footer></Footer>
        </div>
    );
};

export default Root;