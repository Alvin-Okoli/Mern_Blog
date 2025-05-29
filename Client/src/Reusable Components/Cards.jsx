import { lazy } from "react"
import { NavLink, useNavigate} from "react-router-dom"
const LazyLoadImage = lazy(()=> import('react-lazy-load-image-component').then(module=>({default: module.LazyLoadImage})))

export function HomePageCard({data}){

    return(
        <>
            {data && 
                data.map((datas)=>(
                <div key={datas._id} className="shadow rounded-lg h-[500px] pb-6 mx-auto w-10/12 my-8 relative lg:min-w-96 lg:w-full">
                <NavLink to={`/page/${datas._id}`}>
                    <LazyLoadImage src={`https://mern-blog-rx3i.onrender.com/uploads/${datas.image.filename}`} alt={datas.filename} className="h-[300px] w-full object-center rounded-t-lg"/>
                </NavLink>

                <div className="px-4">
                    <div className="flex justify-between my-4 text-gray-500 text-sm">
                        <div>{datas.tag}</div>
                        <div>{datas.updatedAt.slice(0, 10)}</div>
                    </div>
                    
                    <NavLink to={`/page/${datas._id}`}>
                        <div className="font-bold text-2xl text-gray-800 my-2  hover:underline">{datas.title}</div>
                    </NavLink>
                    <div className="text-sm text-gray-500 h-18 overflow-hidden pt-2">{datas.snippet}</div>
                    <NavLink to={`/page/${datas._id}`}>
                        <div className="absolute bottom-3 transform transition ease-in duration-200 hover:underline hover:text-yellow-500">Read more...</div>
                    </NavLink>
                </div>
                
                </div>
            ))}
        </>
    )
}

export function TagPageCard({data}){
    const navigate = useNavigate();
    return(
        <>
            {data && 
                data.map((datas)=>(
                    <div key={datas._id} className="shadow rounded-lg h-[500px] pb-6 mx-auto w-10/12 my-8 relative lg:min-w-96 lg:w-full">
                        <a onClick={()=>navigate(`/page/${datas._id}`)}>
                             <LazyLoadImage src={`https://mern-blog-rx3i.onrender.com/uploads/${datas.image.filename}`} alt={datas.filename} className="h-[300px] w-full object-center rounded-t-lg"/>
                        </a>
                        
                        <div className="px-4">
                            <div className="flex justify-between my-4 text-gray-500 text-sm">
                                <div>{datas.tag}</div>
                                <div>{datas.updatedAt.slice(0, 10)}</div>
                            </div>
                                
                            <a onClick={()=>navigate(`/page/${datas._id}`)}>
                                <div className="font-bold text-2xl text-gray-800 my-2 cursor-pointer hover:underline">{datas.title}</div>
                            </a>
                            <div className="text-sm text-gray-500 h-18 overflow-hidden pt-2">{datas.snippet}</div>
                            <a onClick={()=>navigate(`/page/${datas._id}`)}>
                                <div className="absolute bottom-3 transform transition ease-in duration-200 cursor-pointer hover:underline hover:text-yellow-500">Read more...</div>
                            </a>
                        </div>
                        
                    </div>
            ))}
        </>
    )
}
