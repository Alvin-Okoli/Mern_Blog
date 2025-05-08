import { createElement, useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom'
import bgImage from '../images/auimage.jpeg'
import NavOptions from '../Reusable Components/NavOptions';

function Nav(){

    const [show, setShow] = useState(false)
    const handleClick = () => {
    if(show){
            setShow(false)
    }else {
        setShow(true)
        }
    }

    const options = [
        {name: 'Home'},
        {name: 'Culture'},
        {name: 'Politics'},
        {name: 'Entertainment'},
        {name: 'Sports'},
        {name: 'Technology'},
        {name: 'Business'},
        {name: 'Market'},
        {name: 'Travel'}
    ]

    return(
        <div id='nav' className='grid grid-cols-1'>
            
            <div id="title" className='flex justify-center items-center text-6xl m-3'>
                <h1>Afrolog</h1>
            </div>

            <div id='navBg' style={{height: "100px", backgroundImage: `url(${bgImage})`}} className='h-20 '></div>
            
            <div id='burger'>
                <div onClick={handleClick} className='relative block cursor-pointer md:hidden'>options</div> 
                {show && (<div className='absolute backdrop-blur-2xl grid grid-cols-1 w-full px-auto md:hidden'>
                    {options.map((option)=>(
                        <NavOptions option={option} tailwindStyle='mx-2 my-5 font-bold text-center' key={option.name}/>
                    ))}
                </div>)}
            </div>

            <div className='text-center m-3 hidden md:block'>
                {
                    options.map(option=>(
                        <NavOptions option={option} tailwindStyle='mx-2 font-bold' key={option.name}/>
                    ))
                }
                
            </div>

            <Outlet/>
        </div>
    )
}

export default Nav
