export const FetchLink = async ({ params })=>{

    const {page} = params
    const res = await fetch(`http://localhost:3000/page/${page}`,{
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
    const res = await fetch(`http://localhost:3000/tag/${tag}`,{
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        credentials: 'include'
    }
    )
     return await res.json()
}
