import { useState, useEffect } from "react"
import { Link, NavLink, Outlet, useLoaderData } from "react-router-dom";

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
            <div className="grid grid-col-1  gap-4 gap-x-20 mx-3 md:mx-10 md:grid-cols-2 lg:grid-cols-3">
            {data.map((datas)=>(
                <NavLink to={`/page/${datas._id}`}>
                <div key={datas._id} className="shadow rounded-lg m-5 min-h-[550px] pb-16">
                    <img src={`http://localhost:3000/uploads/${datas.image.filename}`} alt={datas.filename} className="h-[400px] w-full rounded-t-lg"/>
                    
                    <div className="flex justify-between px-4 my-4 text-gray-500 text-l">
                    <div>{datas.tag}</div>
                    <div>{datas.updatedAt.slice(0, 10)}</div>
                    </div>
                    
                    <div className="ml-8 font-bold text-gray-800 my-2">{datas.title}</div>
                    <div className="ml-8 text-gray-600 font-semibold mx-2">{datas.snippet}</div>
                </div>
                </NavLink>
            ))}
            </div>

            <div  className="flex justify-center mb-5">
            {no === 0? null :<button onClick={()=>{setNo(no-1)}}  className="mr-5 border border-black rounded-full p-2 w-18">Prev</button>}

            <button onClick={()=>{setNo(no+1)}} className="border border-black rounded-full p-2 w-18">Next</button>
            </div>
            <Outlet/>
        </div>
        </>
    )
}


