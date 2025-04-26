import { useState, useEffect } from "react"
import { Link, NavLink, Outlet, useLoaderData, useNavigate } from "react-router-dom";

export default function Display(){
const data = useLoaderData();
const navigate = useNavigate();
console.log(data)

    return(
        <>
        <div>
            <div id='card' className="grid grid-col-1  gap-4 gap-x-20 mx-3 md:mx-10 md:grid-cols-2 lg:grid-cols-3">
                {data.map((datas)=>(
                    <a onClick={()=>navigate(`/page/${datas._id}`)} className="cursor-pointer">
                    <div key={datas._id} className="shadow rounded-lg m-5 min-h-[550px] pb-16">
                        <img src={`http://localhost:3000/uploads/${datas.image.filename}`} alt={datas.filename} className="h-[400px] w-full rounded-t-lg" />
                        
                        <div className="flex justify-between px-4 my-4 text-gray-500 text-l">
                        <div>{datas.tag}</div>
                        <div>{datas.updatedAt.slice(0, 10)}</div>
                        </div>
                        
                        <div className="ml-8 font-semibold text-gray-800 my-2">{datas.title}</div>
                        <div className="ml-8 text-gray-600 font-semibold mx-2">{datas.snippet}</div>
                    </div>
                </a>
                ))}
                </div>
            <Outlet/>
            </div>
        </>
    )
}