import React from 'react';
import { Link } from 'react-router';

const App = ({ singleApp }) => {
   // console.log(singleApp)

    const { id,image,title, downloads, ratingAvg } = singleApp
    return (

        
        <Link to={`/appDetails/${id}`}>
            <div className='p-3 bg-white rounded'>
            <div>
                <img className='mx-auto rounded' src={image} alt="" />
            </div>
            <div>
                <h1>{title}</h1>
            </div>
            <div className='flex justify-between'>
                <div className="badge badge-soft badge-success">
                    <h1>{downloads}M</h1>
                </div>
                <div className="badge badge-soft badge-warning">
                    <h1>{ratingAvg}</h1>
                </div>
                
                
            </div>
        </div>
        </Link>
    );
};

export default App;