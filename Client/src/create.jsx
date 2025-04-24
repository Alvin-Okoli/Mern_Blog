import { useState } from "react"


function CreatePage(){

    const [title, setTitle] = useState('')
    const [snippet, setSnippet] = useState('')
    const [body, setBody] = useState('')
    const [image, setImage] = useState(null)
    const [tag, setTag] = useState('')

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
       <>
           <form onSubmit={handleSubmit}>
            <label>
                    <div>Title</div>
                    <input type="text" 
                    onChange={(e)=>{setTitle(e.target.value)}}
                    />
                </label>

                <label>
                    <div>Snippet</div>
                    <input type="text" 
                    onChange={(e)=>{setSnippet(e.target.value)}}
                    />
                </label>

                <label>
                    <div>body</div>
                    <textarea type="text" 
                    onChange={(e)=>{setBody(e.target.value)}} 
                    />
                </label>

                <label>
                    <div>tag</div>
                    <input
                    type="text"
                    onChange={(e)=>{setTag(e.target.value)}}/>
                </label>

                <label>
                    <div>Image</div>
                    <input type="file" accept="image/*" name="image"
                    onChange={(e)=>{setImage(e.target.files[0])}} 
                    />
                </label>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas similique quo tempora, accusantium earum totam aliquam non incidunt quibusdam nostrum velit molestiae iusto, nihil est facilis rem at. Est, mollitia?
                </p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas similique quo tempora, accusantium earum totam aliquam non incidunt quibusdam nostrum velit molestiae iusto, nihil est facilis rem at. Est, mollitia?
                </p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas similique quo tempora, accusantium earum totam aliquam non incidunt quibusdam nostrum velit molestiae iusto, nihil est facilis rem at. Est, mollitia?
                </p>
                <button type="submit">Submit</button>

                <div id="display"></div>
           </form>
       </>
    )
}

export default CreatePage