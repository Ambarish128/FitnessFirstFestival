import React, { useState } from 'react';
import bg from '../Images/timBg.jpg';
import food from '../Images/food.jpg'
import trekking from '../Images/trekking.jpg'
import marathon from '../Images/marathon.jpg'
import Card from '../components/Card'
import Navbar from './Navbar';
import { Link } from 'react-scroll';




export default function Banner() {

    function truncate(str, max_chars) {
        if (str.length <= max_chars) {
            return str;
        } else {
            return str.substring(0, max_chars) + '...';
        }
    }
    return (
        <div>
            <div id="home" className='banner h-screen w-full bg-cover lg:bg-center relative' style={{ backgroundImage: `url(${bg})` }}>
                <Navbar />

                <div className="title z-20 text-white absolute leading-1 text-left left-[4%] lg:top-[17%] top-[24%]">
                    <div className='title-content flex flex-col gap-4 lg:gap-1 2xl:gap-4'>
                        <h3 className='title-pccoe text-lg 2xl:text-2xl pl-1 text-white stroke-black lg:font-medium font-bannerFont2'>Pimpri Chinchwad College of Engineering's</h3>
                        <h1 className='title-prog text-6xl 2xl:text-[5.0rem] font-bannerFont2 text-[#efd92d]  lg:bg-gradient-to-r from-orange-600 via-[#ff0054] to-[#ff0054] bg-clip-text lg:text-transparent font-semibold '>Fitness First Festival</h1>
                        <h3 className='title-year text-2xl 2xl:text-3xl pl-1 font-bannerFont2 lg:font-semibold text-blue-600'>2023-24</h3>
                    </div>

                    <button id='xploremore' className='border border-1 px-6 py-2 lg:px-4 lg:py-1 2xl:px-6 2xl:py-2 text-xl lg:text-base 2xl:text-xl mt-10 lg:mt-5 2xl:mt-10 rounded-md hover:bg-[#ff0054] hover:border-[#ff0054] transition duration-300 font-bannerfont '><Link
                            activeClass="active"
                            to="timeline"
                            spy={true}
                            smooth={true}
                            offset={-100} // Adjust the offset as needed
                            duration={500} // Adjust the duration of the scroll animation
                        >
                            Xplore More

                        </Link></button>

                </div>

                <div className="hover-4 quote absolute 2xl:right-[4%] 2xl:bottom-[8%] bottom-[3%] right-[1px] text-white lg:max-w-xl max-w-xs sm:max-w-lg p-5">
                    <h3 className='quote a  text-xs leading-5 sm:leading-6  sm:text-xl md:text-2xl 2xl:text-xl lg:text-base font-bannerfont italic'>Fitness is not just about the body; it's a journey that strengthens the mind, nourishes the soul, and empowers us to embrace life's challenges with vitality.</h3>
                    <h4 className='text-lg 2xl:text-lg lg:text-sm mt-4 font-bannerfont'> - Alex Trevor</h4>
                </div>

                
                <div id='bannercardsec' className="hidden lg:grid lg:grid-cols-3 lg:w-[47%]  lg:absolute lg:h-[40%] justify-between gap-2 bottom-[4%] left-[4%]">
                    <Card func={truncate('Trek & Tree Plantation',17)} status="Upcoming" cardImg={trekking} sportType='Trekking' cov="object-cover" pos="object-center" date='26/08/2023' className="w-[30%]" />
                    <Card func={truncate('Walkathon',17)} status="Upcoming" cardImg={marathon} sportType='Walking' cov="bg-cover" pos="bg-center" date='09/09/2023' className="w-[30%]"/>
                    <Card func={truncate('Healthy Food Fair',17)} status="Upcoming" cardImg={food} sportType='Fair' cov="bg-cover" pos="bg-bottom"  date='23/09/2023' className="w-[30%]"/>
                </div>
                
            </div>
        </div>
    );
}

// [#efd92d] 