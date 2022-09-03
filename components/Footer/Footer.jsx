import React from 'react'
import { AiOutlineSend } from "react-icons/ai";

export const Footer = () => {
  return (
    <>
    <div className='flex px-12 py-16 justify-between bg-[#F4EDFF]'>
    <div className='flex w-1/3 flex-col'>
        <div className='flex'>
            <img className='w-10 mr-2 cursor-pointer' src="/assets/braindark.svg" alt="" />
            <p className=' text-lg my-1 font-bold cursor-pointer'>Destress</p>
        </div>
        <div>
            <p className='my-4 text-gray-500 text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae voluptatum molestias iusto quibusdam atque modi consequatur tenetur minima deleniti! Reprehenderit unde voluptates omnis iste repellendus voluptate tenetur perferendis eaque maxime!</p>
        </div>
    </div>

    <div className='flex w-1/4 flex-col'>
        <div className='flex'>
            <p className=' text-lg my-1 font-bold'>Divisions</p>
        </div>
        <div className='mt-2'>
            <p className='border-y cursor-pointer font-semibold p-3 hover:translate-x-4 ease-linear duration-200 hover:bg-num2'>Home</p>
            <p className='border-y cursor-pointer font-semibold p-3 hover:translate-x-4 ease-linear duration-200 hover:bg-num2'>How it Works</p>
            <p className='border-y cursor-pointer font-semibold p-3 hover:translate-x-4 ease-linear duration-200 hover:bg-num2'>About Us</p>
            <p className='border-y cursor-pointer font-semibold p-3 hover:translate-x-4 ease-linear duration-200 hover:bg-num2'>Privacy Policy</p>
            <p className='border-y cursor-pointer font-semibold p-3 hover:translate-x-4 ease-linear duration-200 hover:bg-num2'>Blogs</p>
        </div>
    </div>

    <div className='flex w-1/4 flex-col'>
        <div className='flex'>
            <p className=' text-lg my-1 font-bold'>Newsletter</p>
        </div>
        <div>
            <p className='my-8 text-gray-500'>Join other subscribers and get new stories straight to your inbox</p>
            <div>
                    <input className='border text-sm py-3 px-7 mb-4 bg-num2 rounded-lg w-full hover:bg-white hover:duration-300' type="text" name="" id="" placeholder='Email Address' />
                    <button className="btn border bg-gray-300 font-bold rounded-lg bg-num1 w-full px-5 py-3 my-2 text-sm hover:bg-gray-500 hover:text-white hover:duration-300">Subscribe</button>
                </div>
        </div>
    </div>
    </div>
    </>
  )
}

export default Footer