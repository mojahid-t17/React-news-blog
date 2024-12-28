import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Header from '../Header/Header';
import Navbar from '../navbar/Navbar';
import NewsCard from '../NewsCard/NewsCard';
import LeftNav from '../shared/LeftNav/LeftNav';
import RightNav from '../shared/RightNav/RightNav';


const Home = () => {
    
    const news=useLoaderData();
    const [displayNews,setDisplayNews]=useState(4)
    console.log(news)
    return (
        <div>
            
            <Header></Header>
            <Navbar></Navbar>
            <div className=' md:grid grid-cols-1  md:grid-cols-4 gap-4 mx-auto mt-12'>
                <div className=''>
                    <LeftNav ></LeftNav>
                </div>
                <div className='col-span-1 md:col-span-2 '>
                 <div className='space-y-9'>
                 {
                   news.slice(0,displayNews).map(aNews=><NewsCard  news={aNews}></NewsCard>)
                 }
                 </div>
                 <div className={`${displayNews.length==news.length ? 'hidden':'text-center my-4'}`}>
                    <button onClick={()=>setDisplayNews(news.length)} className='btn btn-outline btn-primary '>See More News</button>
                 </div>
                </div>
                <div className=''>
                    <RightNav></RightNav>
                </div>
            </div>
            
        </div>
    );
};

export default Home;