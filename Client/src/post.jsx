import Nav from "./nav"
import Page from "./page"
// import './page.css'
import { useParams, useLoaderData } from "react-router-dom"

function Post(){
        const {id} = useParams();
        const data = useLoaderData()
        console.log(data)
    return(
        <>
            <Page/>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas similique quo tempora, accusantium earum totam aliquam non incidunt quibusdam nostrum velit molestiae iusto, nihil est facilis rem at. Est, mollitia?
        </>
    )
}

export default Post