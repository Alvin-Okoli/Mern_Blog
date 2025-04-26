import { Outlet, useLoaderData, useParams } from "react-router-dom"
import authorLogo from '../images/author.jpeg'
import bellLogo from'../images/bell-svgrepo-com.svg'
import messageLogo from'../images/message-svgrepo-com.svg'
import likeLogo from'../images/like-svgrepo-com.svg'

export default function PostDetails(){
    const blog = useLoaderData()

    return(
        <div  className="grid grid-col-1 lg:grid-cols-[70fr_30fr] lg:gap-4 mx-4 mb-10">
                <div className=" lg:px-10">
                    <div className="text-4xl my-5 text-center font-bold font-serif">{blog.title}</div>
                        <img src={`http://localhost:3000/uploads/${blog.image.filename}`} alt={blog.image.filename} className='mx-auto my-10 w-full h-[500px]'/>
                        <h5 className="my-2"><span className="font-semibold">Updated at:</span> <span className="font-light">{blog.updatedAt.slice(0, 10)}</span></h5>
                        <h5 className="font-semibold my-3">{blog.tag}</h5>
                        <h5 className="font-semibold mb-6">{blog.snippet}</h5>
                        
                        <p>{blog.body}</p>
                </div>

            <div id='section2'  className="mt-10">
                <div id='author' className="my-5 py-5 rounded-lg border-[2px] border-[rgb(236,240,243)]">
                    <div className="text-center font-bold">Author:</div>
                    <img src={authorLogo} alt='author-image' className="w-32 mx-auto"/>
                    <div className="font-semibold text-center">Alvin Okoli</div> <br/>
                    
                    <div  className="flex justify-center gap-10">
                        <div className="cursor-pointer">
                            <img src={likeLogo}  className="w-10 mx-auto"/>
                            <div>Follow</div>
                        </div>

                        <div className="cursor-pointer">
                            <img src={messageLogo}  className="w-10 mx-auto"/>
                            <div>message</div>
                        </div>

                        <div className="cursor-pointer">
                        <img src={bellLogo}  className="w-10 mx-auto"/>
                        <div>Notify</div>
                        </div>
                    </div>
                </div>

                <div id='trend'  className="border-[2px] border-[rgb(236,240,243)] rounded-lg h-100 text-center pt-5 my-5">Trending</div>
                
                <div id='recent' className="rounded-lg border-[2px] border-[rgb(236,240,243)] h-100 text-center pt-5 my-5">For you</div>
            </div>
        </div>
    )
}


