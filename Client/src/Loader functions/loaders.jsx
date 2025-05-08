export const FetchLink = async ({ params })=>{

    const {page} = params
    const res = await fetch(`https://mern-blog-rx3i.onrender.com/page/${page}`,{
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        credentials: 'include'
    }
    )
     return await res.json()
}

export const tagFetch = async ({ params })=>{

    const {tag} = params
    const res = await fetch(`https://mern-blog-rx3i.onrender.com/tag/${tag}`,{
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        credentials: 'include'
    }
    )
     return await res.json()
}
