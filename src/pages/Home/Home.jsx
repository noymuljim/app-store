import React from 'react';
import googlePlay from '../../assets/fi_16076057.png'
import appStore from '../../assets/fi_5977575.png'
import hero from '../../assets/hero.png'
import { useLoaderData } from 'react-router';
import HomeApps from './homeApps';

const Home = () => {
    const homeData=useLoaderData()

    return (
        <div>
            <div className='text-center'>
                <div className='text-[72px] font-bold'><h1>We Build <br /><span className='bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent'>Productive Apps</span></h1></div>
                <p className='text-[#627382]'>At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. <br /> Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
            </div>


            <div className='flex flex-col items-center md:flex-row gap-1 md:gap-2 my-5 justify-center'>
                <a href="https://play.google.com/store/games?hl=en">
                    <button className='p-2 cursor-pointer border border-gray-300 flex items-center gap-2 font-semibold rounded'> <img src={googlePlay} alt="" />
                        <h1>Google Play</h1></button>
                </a>
                <a href="https://www.apple.com/app-store/">
                    <button className='p-2 border cursor-pointer border-gray-300 flex items-center gap-2 font-semibold rounded'> <img src={appStore} alt="" />
                        <h1>App Store</h1></button>
                </a>

            </div>

            <div className='flex justify-center'>
                <img src={hero} alt="" />
            </div>
            <div>
                <div className="relative left-1/2 right-1/2 -mx-[50vw] w-screen bg-gradient-to-r from-[#632EE3] to-[#9F62F2] py-14 flex items-center justify-center text-center">

                    <div>
                        <h1 className="text-white text-3xl font-semibold mb-10">Trusted by Millions, Built for You</h1>


                        {/* stat */}
                        <div className="stats stats-vertical lg:stats-horizontal shadow">
                            <div className="stat">
                                <div className="stat-title text-white">Total Downloads</div>
                                <div className="stat-value  text-white">29.6M</div>
                                <div className="stat-desc  text-white">21% more than last month</div>
                            </div>

                            <div className="stat">
                               <div className="stat-title text-white">Total Reviews</div>
                                <div className="stat-value  text-white">906K</div>
                                <div className="stat-desc  text-white">46% more than last month</div>
                            </div>

                            <div className="stat">
                                <div className="stat-title text-white">Active Apps</div>
                                <div className="stat-value  text-white">132+</div>
                                <div className="stat-desc  text-white">31 more will Launch</div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            {/* functionalities */}
            <div>
                <HomeApps homeData={homeData}></HomeApps>
            </div>

        </div>





    );
};

export default Home;