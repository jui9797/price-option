import React from 'react';
import PriceOption from './PriceOption';

const PriceOptions = () => {

    const priceOptions =[
        {
          id: 1,
          name: "Basic",
          price: 20,
          features: [
            "Access to gym equipment",
            "Locker room access",
            "1 personal training session per month"
          ]
        },
        {
          id: 2,
          name: "Standard",
          price: 40,
          features: [
            "Access to gym equipment",
            "Locker room access",
            "4 personal training sessions per month",
            "Access to group fitness classes"
          ]
        },
        {
          id: 3,
          name: "Premium",
          price: 60,
          features: [
            "Access to gym equipment",
            "Locker room access",
            "8 personal training sessions per month",
            "Access to group fitness classes",
            "Nutrition consultation"
          ]
        },
        {
          id: 4,
          name: "VIP",
          price: 80,
          features: [
            "Access to gym equipment",
            "Locker room access",
            "Unlimited personal training sessions",
            "Access to group fitness classes",
            "Nutrition consultation",
            "24/7 gym access",
            "Priority booking for classes and equipment"
          ]
        },
        {
          id: 5,
          name: "Elite",
          price: 100,
          features: [
            "All VIP benefits",
            "Exclusive access to Elite lounge",
            "Monthly massage therapy",
            "Complimentary workout gear",
            "Private locker"
          ]
        }
      ]
      

    return (
        <div>
            <h2 className='text-4xl'>Best price option in the town</h2>
           <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5'>
           {
            priceOptions.map(option=><PriceOption key={option.id} option={option}></PriceOption>)
           } 
           </div>
        </div>
    );
};

export default PriceOptions;