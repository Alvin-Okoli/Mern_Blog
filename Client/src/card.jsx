import { NavLink, Outlet } from 'react-router-dom'
import './card.css'
import abuja from './images/Abuja.jpeg'
import abuja1 from './images/Abuja1.jpeg'
import abuja2 from './images/Abuja3.jpeg'
import anambra from './images/Anambra.jpeg'
import anambra1 from './images/Anambra1.jpeg'
import anambra2 from './images/Anambra2.jpeg'
import lagos from './images/Lagos,1.jpeg'
import lagos2 from './images/lagos2.jpeg'
import lagos3 from './images/lagos3.jpeg'

function Card(){

    return(
        <div>
        <div id='card'>
                <div className="card">
                    <img src={lagos}/>
                    <h4>Travel</h4>
                    <h3>Welcome to Lagos</h3>
                    <NavLink to='post'><h5>Wlcome to the business hub of Africa</h5></NavLink>
                </div>

        <div className="card">
            <img src={anambra}/>
            <h4>Travel</h4>
            <h3>Welcome to Anambra</h3>
            <h5>Wlcome to the pride of Nigeria</h5>
        </div>

        <div className="card">
            <img src={abuja}/>
            <h4>Travel</h4>
            <h3>Welcome to Abuja</h3>
            <h5>Wlcome to the most beautiful state in Nigeri</h5>
        </div>

        <div className="card">
            <img src={lagos2}/>
            <h4>Travel</h4>
            <h3>Welcome to Lagos</h3>
            <h5>Wlcome to the business hub of Africa</h5>
        </div>

        <div className="card">
            <img src={anambra1}/>
            <h4>Travel</h4>
            <h3>Welcome to Anambra</h3>
            <h5>Wlcome to the pride of Nigeria</h5>
        </div>

        <div className="card">
            <img src={abuja1}/>
            <h4>Travel</h4>
            <h3>Welcome to Abuja</h3>
            <h5>Wlcome to the most beautiful state in Nigeri</h5>
        </div>

        <div className="card">
            <img src={lagos3}/>
            <h4>Travel</h4>
            <h3>Welcome to Lagos</h3>
            <h5>Wlcome to the business hub of Africa</h5>
        </div>

        <div className="card">
            <img src={anambra2}/>
            <h4>Travel</h4>
            <h3>Welcome to Anambra</h3>
            <h5>Wlcome to the pride of Nigeria</h5>
        </div>

        <div className="card">
            <img src={abuja2}/>
            <h4>Travel</h4>
            <h3>Welcome to Abuja</h3>
            <h5>Wlcome to the most beautiful state in Nigeri</h5>
        </div>
        
        </div>
        <Outlet/>

       </div>
    )
}

export default Card


// <img src={props.src}/>
// <h4>{props.category}</h4>
// <h3>{props.topic}</h3>
// <h4>{props.snippet}</h4>