import React from 'react';
import { FaCircleDot } from "react-icons/fa6";

const Feature = ({feature}) => {
    return (
        <div className='flex items-center gap-4 my-2'>
            <FaCircleDot />
            <h3><span className='flex text-xl'></span> {feature}</h3>
        </div>
    );
};

export default Feature;