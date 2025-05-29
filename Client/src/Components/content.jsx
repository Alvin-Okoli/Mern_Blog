import { useState, useEffect, lazy, Suspense } from "react"
import { Link, NavLink, Outlet, useLoaderData, useNavigate } from "react-router-dom";
const SuspenseHandler = lazy(()=> import('./Suspense'))
import { TagPageCard } from "../Reusable Components/Cards";
import Footer from "./Footer";

export default function Display(){
const data = useLoaderData();
const navigate = useNavigate();
console.log(data)

    return(
        <>
            <div>
                <Suspense>
                    <div className="grid grid-col-1  gap-4 md:gap-x-20  md:mx-10 md:grid-cols-2 lg:grid-cols-3 lg:px-24">
                        <TagPageCard data={data}/>
                    </div>
                </Suspense>

            {/* {data.length >=1 &&
            <div  className="flex justify-center my-10">
            {no === 0? null :<button onClick={()=>{setNo(no-1)}}  className="mr-5 border border-black p-2 w-22 cursor-pointer bg-black text-white font-bold rounded-2xl">Prev</button>}

             
            <button onClick={()=>{setNo(no+1)}} className="border border-black p-2 w-22 cursor-pointer bg-black text-white font-bold rounded-2xl">Next</button>
            </div>
            } */}
            
                {data&& <Footer/>}
                <Outlet/>
            </div>
        </>
    )
}