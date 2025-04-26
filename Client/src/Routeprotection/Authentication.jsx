import { createContext, useEffect, useState} from "react";
import Cookies from "js-cookie"
export const AuthContext = createContext()

export default function Authentication({children}){
    const [token, setToken] = useState(Cookies.get('token') || null)
    const [admin, setAdmin] = useState(null)
    const [user, setUser] = useState(null)
    

    useEffect(()=>{
        token ? Cookies.set('token', token, {expires: 3}) : Cookies.remove('token')
    }
    , [token])

    async function login(email, password){
        try{
            const res = await fetch('http://localhost:3000/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({email, password})
            })
            const data = await res.json()
            console.log(data)
            setToken(data.token)
            setAdmin(data.user.admin)
            setUser(data.name)
        }
        catch(err){
            console.log(err)
        }   
    }

    async function signup(email, password){
        try{
            const res = await fetch('http://localhost:3000/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({email, password})
            })
            if(!res.ok){
                throw new Error('Failed to sign up')
            }
            const data = await res.json()
            console.log(data)
            setToken(data.token)
            setAdmin(data.user.admin)
            setUser(data.user.name)
        }
        catch(err){
            console.log(err)
        }   
    }

    const isLoggedIn = async (tokens)=>{
        if(tokens){
            try{
                const res = await fetch(`http://localhost:3000/getUser/${tokens}`)
                const data = await res.json()
                if(!res.ok){
                    console.log('error from server')
                }
                console.log(data)
                setAdmin(data.admin)
                setUser(data.name)
        }
        catch(err){
            console.error(err)
        }
        } 
    }
    
    async function logout(){
        try{
            Cookies.remove('token')
            setAdmin(false)
            setUser(null)
        }
        catch(err){
            console.log(err)
        }   
    }

 

    return(
        <AuthContext.Provider value={{token, user, admin, isLoggedIn, login, signup, logout}}>
            {children}
        </AuthContext.Provider>
    )
}
