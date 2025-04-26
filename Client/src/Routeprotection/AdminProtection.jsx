import { useContext, useEffect, useState } from "react"
import { AuthContext } from "./Authentication"
import { Navigate } from "react-router-dom"

export default function IsAdmin({children}){//protection for create page
    const {admin, token, isLoggedIn} = useContext(AuthContext)
    console.log(admin, token)

    useEffect(
        ()=>{
           const fetchUser = async ()=>{
                   try{
                        await isLoggedIn(token)
                    }
                   catch(err){
                    console.log(err)
                   }
           }
           fetchUser()
       }, [token, isLoggedIn])

    if(admin){
        return children
    } 
}