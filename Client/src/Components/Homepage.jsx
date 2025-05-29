import { useState, useEffect, lazy, Suspense } from "react"
import { Link, NavLink, Outlet, useLoaderData } from "react-router-dom";
const SuspenseHandler = lazy(()=> import('./Suspense'))
import { HomePageCard } from "../Reusable Components/Cards";
import Footer from "./Footer";

export default function Homepage(){

    const [data, setData] = useState([])
    const [no, setNo] = useState(0)

    useEffect(()=>{
        const fetchdata = async ()=>{
            try{
                const res = await fetch(`http://localhost:3000/?p=${no}`,{
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
            <div className="grid grid-col-1  gap-4 md:gap-x-20  md:mx-10 md:grid-cols-2 xl:grid-cols-3 lg:px-24">
                <HomePageCard data={data}/>
            </div>
            </Suspense>

            {data.length >=1 &&
            <>
                <div  className="flex justify-center my-10">
                {no === 0? null :<button onClick={()=>{setNo(no-1)}}  className="mr-5 border border-black p-2 w-22 cursor-pointer bg-black text-white font-bold rounded-2xl">Prev</button>}

                
                <button onClick={()=>{setNo(no+1)}} className="border border-black p-2 w-22 cursor-pointer bg-black text-white font-bold rounded-2xl">Next</button>
                </div>
                <Footer/>
            </>
            }
            <Outlet/>
        </div>
        </>
    )
}


