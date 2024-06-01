import React from 'react'
import img from "../assets/homepage.png"
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <main className='flex flex-col md:flex-row justify-center items-center px-8 my-auto'>
        <img className='flex h-auto w-[60%] md:w-[35%]' src={img} alt="Home page image" />
        <div className='flex flex-col p-8 w-[90%] md:w-[30%]'>
            <h1 className='text-2xl font-bold md:text-3xl'>Trello makes it easier for teams to manage projects and tasks</h1>
            <p className='text-lg mt-5 mb-8 md:text-xl'>Simple, flexible, and powerful. All it takes are boards, lists, and cards to get a clear view of who’s doing what and what needs to get done.</p>
            <div className='flex flex-row gap-5'>
               <Link to="/team" className='flex justify-center items-center border-none border-black bg-[#5B0888] text-white font-bold p-4 rounded w-[100px]'>Team</Link> 
               <Link to="/personal" className='flex justify-center items-center border-2 border-black font-bold p-4 rounded w-[100px]'>Personal</Link> 
            </div>
        </div>
    </main>
  )
}

export default Home
