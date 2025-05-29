import { NavLink } from "react-router-dom";

export default function NavOptions({option, tailwindStyle}){

    return(
        <NavLink to={option.name === 'Home'? '/' : `/tag/${option.name}`} className={tailwindStyle}>{option.name}</NavLink>
    )
}