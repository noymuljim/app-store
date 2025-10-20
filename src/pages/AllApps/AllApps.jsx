import React, { Suspense } from 'react';
import { useLoaderData } from 'react-router';
import App from '../Home/App';

const AllApps = () => {
    const data = useLoaderData()
    console.log(data)
    //const{}=data
    return (
       <>
        <div className='flex text-center justify-center'>
            <div className='py-5'>
                <h1 className='text-[48px] font-bold'>Our All Applications</h1>
                <p className='text-[#627382]'>Explore All Apps on the Market developed by us. We code for Millions</p>
            </div>
            
        </div>
        <div className='flex justify-between'>
                <h1 className='font-semibold text-[24px]'>({data.length}) Apps Found</h1>
                <input type="search" placeholder='search here' name="" id="" />
            </div>

            
            
             <Suspense fallback={<span>loading...</span>}>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[24px]'>
                    {
                        data.map((singleApp) => <App key={singleApp.id} singleApp={singleApp}></App>)
                    }
                </div>
            </Suspense>
            </>
    );
};

export default AllApps;