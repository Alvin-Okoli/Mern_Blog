import { useState, useEffect, lazy, Suspense } from "react"
import { Link, NavLink, Outlet, useLoaderData } from "react-router-dom";
const SuspenseHandler = lazy(()=> import('./Suspense'))
import { HomePageCard } from "../Reusable Components/Cards";

export default function Homepage(){

    const [data, setData] = useState([])
    const [no, setNo] = useState(0)

    useEffect(()=>{
        const fetchdata = async ()=>{
            try{
                const res = await fetch(`https://mern-blog-rx3i.onrender.com/?p=${no}`,{
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                credentials: 'include'
                });

                if(!res.ok){
                    console.log('unsuccessful fetch!')
                }
                const data = await res.json();
                console.log(data)
                setData(data)
            }
            catch(err){
                console.log(err)
            }
        }
        fetchdata()
    }, [no])

    

    return(
        <>
        <div>
            <Suspense fallback={<SuspenseHandler/>}>
            <div className="grid grid-col-1  gap-4 md:gap-x-20  md:mx-10 md:grid-cols-2 lg:grid-cols-3">
                <HomePageCard data={data}/>
            </div>
            </Suspense>

            <div  className="flex justify-center mb-5">
            {no === 0? null :<button onClick={()=>{setNo(no-1)}}  className="mr-5 border border-black rounded-full p-2 w-18">Prev</button>}

            <button onClick={()=>{setNo(no+1)}} className="border border-black rounded-full p-2 w-18">Next</button>
            </div>
            <Outlet/>
        </div>
        </>
    )
}


