import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import download from '../../assets/icon-downloads.png'
import rating from '../../assets/icon-ratings.png'
import review from '../../assets/icon-review.png'
import { Bar, CartesianGrid, ComposedChart, Legend, Line, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const AppDetails = () => {
    const { id } = useParams()
    // console.log(typeof id)
    const appId = parseInt(id)
    //data abr dhorlam
    const data = useLoaderData()
    console.log(data.ratings)
    //single data
    const singleApp = data.find(app => app.id === appId)
    //console.log(singleApp)

    const { image, title, companyName, description, reviews, downloads, ratingAvg, ratings } = singleApp
    return (
        <>
            <div className='flex gap-5 py-10'>
                <div className='bg-white'>
                    <img className='w-[300px] h-[300px]' src={image} alt="" />
                </div>
                <div>
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
                        <button className='bg-[#00D390] text-[20px] font-semibold p-3  text-white rounded'>Install Now (291 MB)</button>
                    </div>


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