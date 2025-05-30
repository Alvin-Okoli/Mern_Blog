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
        {name: 'Travel'}
    ]

    return(
        <div className='grid grid-cols-1'>
            
            <div className='flex md:block justify-between px-2'>
                <NavLink to='/'>
                    <div className='text-center gap-4 mb-3 md:flex justify-center'>
                        <p className='text-5xl lg:text-6xl mt-5 font-bold font-serif'>Afro<span className='text-yellow-300'>log</span></p>
                        <p className='font-normal text-xs md:text-sm md:mt-14'>Telling the African story...</p>
                    </div>
                </NavLink>

                <div onClick={handleClick} className='flex justify-end cursor-pointer md:hidden'>
                    {show?
                        <img src="cancel-svgrepo-com.svg" alt="" className='h-12 mt-8'/> 
                    :
                        <img src="burger-menu-svgrepo-com.svg" alt="" className='h-12 mt-8'/>
                    }   

                </div> 
                
            </div>

            <div id='navBg' style={{height: "100px", backgroundImage: `url(${bgImage})`}} className='h-20 relative'>
                    {show&&
                        <div className='absolute w-full px-auto z-10 pt-2 shadow border-y-4 border-y-black bg-white transition transform-fill ease-in-out duration-500 grid grid-cols-1 md:hidden'>
                            {options.map((option)=>(
                                <NavOptions option={option} tailwindStyle='mx-2 my-2 font-bold text-xl text-center border-b-2 border-b-gray-400' key={option.name}/>
                            ))}
                        </div>
                    }
            </div>

            <div className='text-center m-3 hidden md:flex flex-wrap justify-center lg:block mt-6 mb-10'>
                {
                    options.map(option=>(
                        <NavOptions option={option} tailwindStyle='py-2 px-2 lg:px-4 text-xl rounded-lg hover:bg-yellow-300 hover:text-white active:bg-yellow-300  active:text-white' key={option.name}/>
                    ))
                }
                
            </div>

            <Outlet/>
        </div>
    )
}

export default Nav
