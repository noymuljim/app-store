import React from 'react';
import error404 from '../../assets/error-404.png'
const ErrorPage = () => {
    return (
        <div className='flex flex-col mx-10 justify-center text-center my-10 items-center'>
           <div>
            <img src={error404} alt="" /> 
           <h1 className='text-2xl font-bold'>Oops, page not found!</h1>
           <p>The page you are looking for is not available.</p>
           </div>
        </div>
    );
};

export default ErrorPage;