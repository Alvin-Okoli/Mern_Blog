import { useState } from "react"
import { useContext } from "react"
import { AuthContext } from "../Routeprotection/Authentication"


function CreatePage(){
    const [title, setTitle] = useState('')
    const [snippet, setSnippet] = useState('')
    const [body, setBody] = useState('')
    const [image, setImage] = useState(null)
    const [tag, setTag] = useState('')
    const {admin} = useContext(AuthContext)

    const handleSubmit = async (e)=>{
        e.preventDefault();

        const formdata = new FormData();
        formdata.append('title', title)
        formdata.append('snippet', snippet)
        formdata.append('body', body)
        formdata.append('image', image)
        formdata.append('tag', tag)

        for (const [key, value] of formdata.entries()) {
            console.log(`${key}: ${value}`);
          }

        try{
            const data = await fetch('http://localhost:3000/createpage', {
                method: 'POST',
                body: formdata
            })

            const res = await data.json();
            console.log(res)

            const display = document.getElementById('display')
            display.innerHTML;
            display.innerHTML = `<div>${res.blog.title}</div>
            <div>${res.blog.snippet}</div>
            <div>${res.blog.body}</div>
            <div>${res.blog.tag}</div>` 
        }
        catch(err){
            console.log(err)
        }

    }

    return(
       <div className="p-4">
        {admin ? <h1 className="text-2xl font-bold">Create Page</h1> : <h1 className="text-2xl font-bold">You are not an admin</h1>}
           <form onSubmit={handleSubmit}>
            <label>
                <div className="my-4">
                    <div>Title</div>
                    <input type="text" 
                    onChange={(e)=>{setTitle(e.target.value)}}
                    placeholder="Title"
                    className="shadow rounded-lg p-2 bg-gray-100 outline-none"
                    />
                </div>
                </label>

                <label>
                    <div className="my-4">
                        <div>Snippet</div>
                        <input type="text" 
                        onChange={(e)=>{setSnippet(e.target.value)}}
                        placeholder="Snippet"
                        
                        className="shadow rounded-lg p-2 bg-gray-100 outline-none"
                        />
                    </div>
                </label>

                <label>
                    <div className="my-4">
                        <div>body</div>
                        <textarea type="text" 
                        onChange={(e)=>{setBody(e.target.value)}}
                        placeholder="Body" 
                        className="bg-gray-100 rounded-lg p-2 shadow min-w-[400px] outline-none"
                    />
                </div>
                </label>

                <label>
                    <div className="my-4">
                        <div>tag</div>
                        <input
                        type="text"
                        placeholder="Tag"
                        onChange={(e)=>{setTag(e.target.value)}}
                        className="shadow rounded-lg p-2 bg-gray-100 outline-none"
                        />
                    </div>
                </label>

                <label>
                    <div className="my-4">
                        <div>Image</div>
                        <input type="file" accept="image/*" name="image"
                        onChange={(e)=>{setImage(e.target.files[0])}} 
                        className="shadow rounded-lg p-2 bg-gray-100 cursor-pointer outline-none"
                        />
                    </div>
                </label>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas similique quo tempora, accusantium earum totam aliquam non incidunt quibusdam nostrum velit molestiae iusto, nihil est facilis rem at. Est, mollitia?
                </p><br/>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas similique quo tempora, accusantium earum totam aliquam non incidunt quibusdam nostrum velit molestiae iusto, nihil est facilis rem at. Est, mollitia?
                </p><br/>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas similique quo tempora, accusantium earum totam aliquam non incidunt quibusdam nostrum velit molestiae iusto, nihil est facilis rem at. Est, mollitia?
                </p><br/>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas similique quo tempora, accusantium earum totam aliquam non incidunt quibusdam nostrum velit molestiae iusto, nihil est facilis rem at. Est, mollitia? Lorem ipsum dolor sit amet consectetur adipisicing elit. A minima expedita cupiditate dolore harum optio odio obcaecati dolorum blanditiis, quae eum. Repellendus at vitae libero! Vel impedit debitis dolorem dolore! Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur perspiciatis, optio, exercitationem quasi amet molestias praesentium sequi corporis, odit mollitia soluta nisi quam eveniet sit. Ipsum earum temporibus consequuntur ab.
                </p><br/>
                <button type="submit" className="">Submit</button>

                <div id="display"></div>
           </form>
       </div>
    )
}

export default CreatePage