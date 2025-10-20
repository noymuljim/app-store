import React, { Suspense } from 'react';
import App from './App';
import { NavLink } from 'react-router';

const HomeApps = ({ homeData }) => {
    return (
        <div className='text-center py-10'>
            <h1 className='text-[48px] font-bold'>Trending Apps</h1>
            <p className='text-[#627382]'>Explore All Trending Apps on the Market developed by us</p>



            <Suspense fallback={<span>loading...</span>}>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[24px]'>
                    {
                        homeData.map((singleApp) => <App key={singleApp.id} singleApp={singleApp}></App>)
                    }
                </div>
            </Suspense>

            <div className='flex justify-center py-10'>
               <NavLink to='/apps'>
                 <button className='px-3 cursor-pointer py-2 rounded flex bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white font-semibold'>Show All</button>
               </NavLink>
            </div>
        </div>
    );
};

export default HomeApps;