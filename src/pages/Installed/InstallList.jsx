import React from 'react';
import { useEffect } from 'react';
import { useLoaderData } from 'react-router';
import { getStoredApps } from '../../Utilities/addToDB';
import { useState } from 'react';
import InstallApp from './InstallApp';

const InstallList = () => {

    const [instaled, setInstalled] = useState([])
    const [sort, setSort] = useState('')
    const data = useLoaderData()
    console.log(data)


    useEffect(() => {
        const storedInstalleddata = getStoredApps()
        //console.log(storedInstalleddata)
        const convertedStoredApps = storedInstalleddata.map(id => parseInt(id))
        //console.log(convertedStoredApps)
        const myInstalledList = data.filter(app => convertedStoredApps.includes(app.id))
        // console.log(myInstalledList)
        setInstalled(myInstalledList)

    }, [])

    const handleSort = (type) => {
        setSort(type)


        if (type === 'High to Low') {
            const sortedByHtoL = [...instaled].sort((a, b) => b.downloads - a.downloads)
            setInstalled(sortedByHtoL)
        }
        if (type === 'Low to High') {
            const sortedByLtoH = [...instaled].sort((a, b) => a.downloads - b.downloads)
            setInstalled(sortedByLtoH)
        }
    }

    const removeApp = (a) => {
        // console.log(a)
        const filteredApp = instaled.filter(application => application.id !== a.id)
        console.log(filteredApp)
        setInstalled(filteredApp)
    }
    return (
        <>
            <div className='flex-col text-center py-5'>
                <h1 className='font-bold text-3xl'>Your Installed Apps</h1>
                <p className='text-gray-400'>Explore All Trending Apps on the Market developed by us</p></div>
            <div className='flex justify-between'>
                <h1 className='font-semibold text-[20px] py-10'>{instaled.length} Apps Found</h1>

                {/* sort */}
                <div>
                    <details className="dropdown">
                        <summary className="btn m-1">Sort By:{sort ? sort : ''}</summary>
                        <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                            <li><a onClick={() => handleSort('High to Low')}>High to Low</a></li>
                            <li><a onClick={() => handleSort('Low to High')}>Low to High</a></li>
                        </ul>
                    </details>
                </div>
            </div>
            {
                instaled.map(app => <InstallApp app={app} removeApp={removeApp}></InstallApp>)
            }
        </>
    );
};

export default InstallList;