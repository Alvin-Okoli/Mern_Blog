import { lazy } from "react"
import { NavLink, useNavigate} from "react-router-dom"
const LazyLoadImage = lazy(()=> import('react-lazy-load-image-component').then(module=>({default: module.LazyLoadImage})))

export function HomePageCard({data}){

    return(
        <>
            {data.map((datas)=>(
                <NavLink key={datas._id} to={`/page/${datas._id}`}>
                <div key={datas._id} className="shadow rounded-lg min-h-[550px] pb-16 mx-auto w-11/12">
                <LazyLoadImage src={`https://mern-blog-rx3i.onrender.com/uploads/${datas.image.filename}`} alt={datas.filename} className="h-[400px] w-full rounded-t-lg"/>
                
                <div className="flex justify-between px-4 my-4 text-gray-500 text-l">
                    <div>{datas.tag}</div>
                    <div>{datas.updatedAt.slice(0, 10)}</div>
                </div>
                    
                <div className="ml-8 font-bold text-gray-800 my-2">{datas.title}</div>
                <div className="ml-8 text-gray-600 font-semibold mx-2">{datas.snippet}</div>
                </div>
                </NavLink>
            ))}
        </>
    )
}

export function TagPageCard({data}){
    const navigate = useNavigate();
    return(
        <>
            {data.map((datas)=>(
                <a key={datas._id} onClick={()=>navigate(`/page/${datas._id}`)}>
                <div className="shadow rounded-lg m-5 min-h-[550px] pb-16 w-full">
                <LazyLoadImage src={`https://mern-blog-rx3i.onrender.com/uploads/${datas.image.filename}`} alt={datas.filename} className="h-[400px] w-full rounded-t-lg"/>
                
                <div className="flex justify-between px-4 my-4 text-gray-500 text-l">
                    <div>{datas.tag}</div>
                    <div>{datas.updatedAt.slice(0, 10)}</div>
                </div>
                    
                <div className="ml-8 font-bold text-gray-800 my-2">{datas.title}</div>
                <div className="ml-8 text-gray-600 font-semibold mx-2">{datas.snippet}</div>
                </div>
                </a>
            ))}
        </>
    )
}
