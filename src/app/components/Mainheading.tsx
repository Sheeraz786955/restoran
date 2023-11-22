import React from 'react';
import Image from 'next/image';
import Button from './Button';
import Link from 'next/link';
export default function Mainheading() {
    return <div className="main w-full  " style={{ backgroundImage: "url('/bg-hero.jpg')" }}>
        

        <div className="comtainer bg-transparent   md:flex md:pt-10 ">
            <div className="left justify-center items-center p-16 md:p-24 md:mt-5 md:w-1/2 ">
                <h1 className='font-bold font-serif text-white text-4xl md:text-5xl text-center mt-5'>Enjoy Our<br/> 
                Delicious Meal</h1>
                <p  className='text-white text-center mt-8'>Welcome to our Restaurant, where culinary delights and warm hospitality await you. Step into a world of delectable flavors crafted with passion and care. Our menu is a symphony of tastes, offering a diverse range of dishes that cater to every palate</p>
                <div className='items-center justify-center ml-10 md:ml-32 mt-8 w-full h-full'>  <Link href={'book-table'}><Button/></Link></div>
            </div>
            <div className="right md:w-1/2">
                <div className='p-10 mb-3'><Image className='animate-pulse hover:scale-110 duration-300' src="/hero.png" alt="" width={700} height={0}/></div>
            </div>
        </div>
    </div>
}