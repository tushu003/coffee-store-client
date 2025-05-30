import React from 'react'
import AddCoffee from '../pages/AddCoffee'
import { useLoaderData } from 'react-router'
import CoffeeCard from './CoffeeCard';

export default function CoffeeCards() {
  const coffees = useLoaderData();
  console.log(coffees);
  
  return (
    <div>
        <p className='text-center rancho-font mt-11'>---Skip & Savor---</p>
        <h1 className='text-center rancho-font text-[#331A15] text-3xl font-bold mb-5'>Our Popular Products</h1>
       <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 mb-11 md:mx-40 p-6'>
        {
          coffees.map(coffee => <CoffeeCard  key={coffee._id} coffee={coffee}></CoffeeCard>)
        }
       </div>
    </div>
  )
}
