import React, { useEffect, useState } from 'react';
import { CiCalendar } from "react-icons/ci";
import { Link } from 'react-router-dom';
import democard from "../../../assets/demo-card-thumbnail.png";
import kid from "../../../assets/little_kid.jpeg";
import stadium from "../../../assets/stadium.jpeg";

// const [categories,setCategories]=useState([]);


const LeftNav = () => {
    const [categories,setCategories]=useState([])
    useEffect(()=>{
        fetch('categories.json')
        .then(res=>res.json())
        .then(data=>setCategories(data))
        
    },[])
    return (
        <div>
            
           <div className='space-y-5'>
           <h3 className="text-xl p-2 font-bold ">All Category</h3>
           {
                categories.map(category=><Link className='text-xl text-[#9F9F9F] block ms-10' key={category.id}>{category.name}</Link>)
            }

           </div>
           <div>
            <div>
                <div className='mt-4'><img className='rounded-lg' src={stadium} alt="" /></div>
                <p className='text-xl text-[#403F3F] my-4'>Bayern Slams Authorities Over Flight Delay to Club World Cup</p>
                <div className='flex items-center gap-2'>
                    <span>Sports</span>
                    <span><CiCalendar /></span>
                    <span className='text-[#9F9F9F]'>Jan 4, 2022</span>
                </div>
            </div>
            <div>
                <div className='mt-4'><img className='rounded-lg' src={kid} alt="" /></div>
                <p className='text-xl text-[#403F3F] my-4'>Bayern Slams Authorities Over Flight Delay to Club World Cup</p>
                <div className='flex items-center gap-2'>
                    <span>Sports</span>
                    <span><CiCalendar /></span>
                    <span className='text-[#9F9F9F]'>Jan 4, 2022</span>
                </div>
            </div>
            <div>
                <div className='mt-4'><img className='rounded-lg' src={democard} alt="" /></div>
                <p className='text-xl text-[#403F3F] my-4'>Bayern Slams Authorities Over Flight Delay to Club World Cup</p>
                <div className='flex items-center gap-2'>
                    <span>Sports</span>
                    <span><CiCalendar /></span>
                    <span className='text-[#9F9F9F]'>Jan 4, 2022</span>
                </div>
            </div>
            
            
           </div>
        </div>
    );
};

export default LeftNav;