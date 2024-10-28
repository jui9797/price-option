import React from 'react';
import Feature from './Feature';

const PriceOption = ({option}) => {
    // console.log(option)
    const{name, price, features} =option

    return (
        <div className='border-2 bg-pink-300 rounded flex flex-col p-4'>
           <h2>
            <span className='text-3xl'>Price: {price}</span>
            <span className='text-xl'>$ /month</span>
            </h2>
            <h4 className='text-2xl'>Name: {name}</h4>
            <div className='text-left flex-grow'>
            {
                features.map((feature, idx)=><Feature key={idx} feature={feature}></Feature>)
            }
            </div>

            <button className='btn btn-error'>Claim Now</button>

        </div>
    );
};

export default PriceOption;