import React from 'react';
import downIcon from '../../assets/icon-downloads.png'
import rateIcon from '../../assets/icon-ratings.png'
const InstallApp = ({ app, removeApp }) => {
    const { image, title, downloads, ratingAvg, size } = app

    const handleRemoveApp = () => {
        removeApp(app)
    }
    return (
        <>
            <div className='my-5 flex items-center bg-white p-3 rounded justify-between'>
                <div className='flex justify-between items-center gap-3'>
                    <div>
                        <img className='w-[63px] rounded-2xl' src={image} alt="" />
                    </div>
                    <div>
                        <h1 className='text-[18px]'>{title}</h1>
                        <div className='flex gap-2'>
                            <div className='flex'>
                                <img className='w-[20px] h-[20px] mr-2' src={downIcon} alt="" />
                                <p className='text-green-500'>{downloads}</p>
                            </div>
                            <div className='flex'>
                                <img className='w-[20px] h-[20px] mr-2' src={rateIcon} alt="" />
                                <p className='text-orange-400'>{ratingAvg}</p>
                            </div>
                            <p className='text-gray-400'>{size}MB</p>
                        </div>
                    </div>

                </div>
                <div>
                    <button onClick={handleRemoveApp} className='text-white rounded font-semibold p-2 bg-green-400'>uninstall</button>
                </div>

            </div>
        </>
    );
};

export default InstallApp;