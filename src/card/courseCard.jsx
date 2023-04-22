import React from 'react';
import shield from '/img/shield.svg'

function Coursecard({name,time,batch,fee,img}) {
    return (
        <>
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
        {img}
        <div className="px-6 py-4 text-center">
            <div className="font-bold text-xl mb-2">{name}</div>
            <p className="text-gray-700 text-xl">
                {
                    name == 'NEET/JEE' ?
                    `Online class Timings : ${time}`
                    : `Online class Timing : ${time}`
                }
            </p>
            <p className="text-gray-700 text-xl flex justify-center mt-5">
            <img src={shield} alt="session" className='w-7 h-7 mr-2'/>
            Batch Id : {batch}
            </p>
        </div>
        </div>
        </>
    );
}

export default Coursecard;