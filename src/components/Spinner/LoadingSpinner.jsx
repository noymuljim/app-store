import React from 'react';
import { FadeLoader } from 'react-spinners';

const LoadingSpinner = () => {
    return (
        <div className='flex justify-center items-center h-[calc(100vh-285px)]'>
            <FadeLoader color="#892df1" />
        </div>
    );
};

export default LoadingSpinner;