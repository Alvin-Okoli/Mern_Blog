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
            <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ml-5">
            {data.map((datas)=>(
                <NavLink to={`/page/${datas._id}`}>
                    <div key={datas._id}>
                    <img src={`http://localhost:3000/uploads/${datas.image.filename}`} alt={datas.filename}/>
                    <h4>{datas.tag}</h4>
                    <div ><h2>{datas.title}</h2></div>
                    <h5>{datas.snippet}</h5>
                    <h5>{datas.updatedAt.slice(0, 10)}</h5>
                    {console.log(datas.image)}
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


