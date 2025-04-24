import { useState, useEffect } from "react"
import { Link, NavLink, Outlet, useLoaderData, useNavigate } from "react-router-dom";

export default function Display(){
const data = useLoaderData();
const navigate = useNavigate();
console.log(data)

    return(
        <>
        <div>
        <div id='card' className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ml-5">
            {data.map((datas, index)=>(
                <a onClick={()=>navigate(`/page/${datas._id}`)} className="cursor-pointer">
                <div key={datas._id}>
                    <img src={`http://localhost:3000/uploads/${datas.image.filename}`} alt={datas.filename}/>
                    <h4>{datas.tag}</h4>
                    <h2>{datas.title}</h2>
                    <h5>{datas.snippet}</h5>
                    <h5>{datas.updatedAt}</h5>
                    {console.log(datas.image)}
                </div>
            </a>
            ))}
            </div>
            <Outlet/>
            </div>
        </>
    )
}