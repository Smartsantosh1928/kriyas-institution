import React from 'react';
import shield from '/img/shield.svg'


function Coursecard({name,time,batch,fee,img}) {
    return (
        <>
        <div class="max-w-sm rounded overflow-hidden shadow-lg">
        <img class="w-full" src={`/img/card.jpg`} alt="Sunset in the mountains"/>
        <div class="px-6 py-4 text-center">
            <div class="font-bold text-xl mb-2">{name}</div>
            <p class="text-gray-700 text-xl">
            Online class Timings : {time}
            </p>
            <p class="text-gray-700 text-xl flex justify-center mt-5">
            <img src={shield} alt="session" className='w-7 h-7 mr-2'/>
            Batch Id : {batch}
            </p>
        </div>
        <div className='flex justify-center flex-col mb-5'>
            <span className='mx-auto text-xl font-extrabold'>&#8377;{" "}{fee}</span>
            {/* <button className='p-2 bg-blue-400 mt-3 mx-20 md:mx-20 hover:bg-blue-700 text-white rounded-lg'>View More...</button>     */}
        </div>
        </div>
        </>
    );
}

export default Coursecard;