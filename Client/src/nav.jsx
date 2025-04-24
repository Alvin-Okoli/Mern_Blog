import { createElement, useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom'
import bgImage from './images/auimage.jpeg'

function Nav(){

    const [show, setShow] = useState(false)
    const handleClick = () => {
    if(show){
            setShow(false)
    }else {
        setShow(true)
        }
    }

    return(
        <div id='nav' className='grid grid-cols-1'>
            
            <div id="title" className='flex justify-center items-center text-6xl m-3'>
                <h1>Afrolog</h1>
            </div>

            <div id='navBg' style={{height: "100px", backgroundImage: `url(${bgImage})`}} className='h-20 '></div>
            
            <div id='burger'>
                <div onClick={handleClick} className='relative block md:hidden'>options</div>
                {show && (<div className='absolute backdrop-blur-xs'>
                    <div className='mx-2 my-5 font-bold'><NavLink to='/' className='mx-2 font-bold'>Home</NavLink></div>
                    <div className='mx-2 my-5 font-bold'><NavLink to='/tag/Culture' className='mx-2 font-bold border-y border-yellow-400'>Culture</NavLink></div>
                    <div className='mx-2 my-5 font-bold'><NavLink to='/tag/Politics' className='mx-2 font-bold'>Politics</NavLink></div>
                    <div className='mx-2 my-5 font-bold'><NavLink to='/tag/Entertainment' className='mx-2 font-bold'>Entertainment</NavLink></div>
                    <div className='mx-2 my-5 font-bold'><NavLink to='/tag/Sports' className='mx-2 font-bold'>Sports</NavLink></div>
                    <div className='mx-2 my-5 font-bold'><NavLink to='/tag/Technology' className='mx-2 font-bold'>Technology</NavLink></div>
                    <div className='mx-2 my-5 font-bold'><NavLink to='/tag/Business' className='mx-2 font-bold'>Business</NavLink></div>
                    <div className='mx-2 my-5 font-bold'><NavLink to='/tag/Market' className='mx-2 font-bold'>Market</NavLink></div>
                    <div className='mx-2 my-5 font-bold'><NavLink to='/tag/Travel' className='mx-2 font-bold'>Travel</NavLink></div>
                </div>)}
            </div>

            <div className='text-center m-3 hidden md:block'>
                <NavLink to='/' className='mx-2 font-bold'>Home</NavLink>
                <NavLink to='/tag/Culture' className='mx-2 font-bold'>Culture</NavLink>
                <NavLink to='/tag/Politics' className='mx-2 font-bold'>Politics</NavLink>
                <NavLink to='/tag/Entertainment' className='mx-2 font-bold'>Entertainment</NavLink>
                <NavLink to='/tag/Sports' className='mx-2 font-bold'>Sports</NavLink>
                <NavLink to='/tag/Technology' className='mx-2 font-bold'>Technology</NavLink>
                <NavLink to='/tag/Business' className='mx-2 font-bold'>Business</NavLink>
                <NavLink to='/tag/Market' className='mx-2 font-bold'>Market</NavLink>
                <NavLink to='/tag/Travel' className='mx-2 font-bold'>Travel</NavLink>
            </div>

            <Outlet/>
        </div>
    )
}

export default Nav
