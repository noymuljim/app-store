import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import download from '../../assets/icon-downloads.png'
import rating from '../../assets/icon-ratings.png'
import review from '../../assets/icon-review.png'
import { Bar, ComposedChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { addToStoredDB } from '../../Utilities/addToDB';
import { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';





const AppDetails = () => {

    const [isInstalled, setisInstalled] = useState(false)
    const { id } = useParams()
    // console.log(typeof id)
    const appId = parseInt(id)
    //data abr dhorlam
    const data = useLoaderData()
    console.log(data.ratings)
    //single data
    const singleApp = data.find(app => app.id === appId)
    //console.log(singleApp)

    const { image, title, size, companyName, description, reviews, downloads, ratingAvg, ratings } = singleApp



    // local storage
    const handleInstallNow = id => {
        //store with id
        //where to store
        //array
        //check if book already exist
        //not exist? push in array


        toast('Successfully Installed')

       
        addToStoredDB(id)
    }





    return (
        <>
            <div className='flex flex-col items-center md:flex-row gap-5 py-10'>
                <div className='bg-white'>
                    <img className='w-[300px] h-[300px]' src={image} alt="" />
                </div>
                <div className='flex flex-col items-center md:flex-col md:items-start'>
                    <div>
                        <h1 className='font-bold text-[32px]'>{title}</h1>
                        <p className='text-[#627382]'>Developed by <span className='text-[#632EE3]'>{companyName}</span></p>
                        <div className="divider"></div>

                    </div>
                    {/* stat */}
                    <div className="stats stats-vertical lg:stats-horizontal ">
                        <div className="stat">
                            <img src={download} alt="" />
                            <div className="stat-title">Downloads</div>
                            <div className="stat-value">{downloads}</div>
                        </div>

                        <div className="stat">
                            <img src={rating} alt="" />
                            <div className="stat-title">Ratings</div>
                            <div className="stat-value">{ratingAvg}</div>
                        </div>

                        <div className="stat">
                            <img src={review} alt="" />
                            <div className="stat-title">Reviews</div>
                            <div className="stat-value">{reviews}</div>
                        </div>
                    </div>
                    {/* state end */}
                    <div>
                        <button disabled={isInstalled}
                            onClick={() => {
                                handleInstallNow(id);
                                setisInstalled(true);
                            }}
                            className='bg-[#00D390] text-[20px] font-semibold p-3 text-white rounded'
                        >
                            {isInstalled ? 'Installed' : 'Install Now'} ({size})
                        </button>

                    </div>
                    <ToastContainer
                        position="top-center"
                        autoClose={5000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick={false}
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                        theme="light"
                    />

                </div>
            </div>
            <div className="divider"></div>



            {/* rating with recharts start*/}
            <h1 className='font-bold text-2xl'>Ratings</h1>


            <div className='w-full lg:w-[1250px] h-[400px]'>
                <ResponsiveContainer width="100%" height="100%">
                    <ComposedChart
                        layout="vertical"
                        data={[...ratings].reverse()}
                        margin={{ top: 20, bottom: 20 }}
                    >
                        <XAxis type="number" />
                        <YAxis dataKey="name" type="category" />
                        <Tooltip />
                        <Bar dataKey="count" barSize={25} fill="#FF8811" name="" />
                    </ComposedChart>
                </ResponsiveContainer>
            </div>

            {/* chart end */}
            <div className="divider"></div>

            <h1 className='font-bold text-2xl'>Description</h1>
            <h1>{description}</h1>



            <div>

            </div>


        </>
    );
};

export default AppDetails;