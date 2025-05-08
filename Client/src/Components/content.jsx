import { useState, useEffect, lazy, Suspense } from "react"
import { Link, NavLink, Outlet, useLoaderData, useNavigate } from "react-router-dom";
const SuspenseHandler = lazy(()=> import('./Suspense'))
import { TagPageCard } from "../Reusable Components/Cards";

export default function Display(){
const data = useLoaderData();
const navigate = useNavigate();
console.log(data)

    return(
        <>
            <div>
                <Suspense>
                    <div id='card' className="grid grid-col-1  gap-4 gap-x-20 mx-3 md:mx-10 md:grid-cols-2 lg:grid-cols-3">
                        <TagPageCard data={data}/>
                    </div>
                </Suspense>

                <Outlet/>
            </div>
        </>
    )
}