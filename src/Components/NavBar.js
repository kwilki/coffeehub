import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import { useAuth0 } from "@auth0/auth0-react";
import '../css/nav.css'
import '../css/hamburgerNav.css';

const NavBar = () => {
    const { user, isAuthenticated } = useAuth0();
    const [userId, setUserId] = useState()

    let navigate = useNavigate()
    const returnHome = () => {
        let path = '/'
        navigate(path)
    }

    let initUser = () => {
        fetch("http://localhost:8000/Users")
            .then(res => res.json())
            .then(json => dbInfo(json))
            .catch("Gracefully handling error")
    }

    let dbInfo = (json) => {
        let obj = {
            email: user.email,
            timezone: 'Please edit Time Zone'
        }
        
        if(json.find(x => x.email === user.email)) {
            let index = json.findIndex(x => x.email === user.email)
            console.log(json[index].id)
            // let timeZone = json[index].timezone
            setUserId(json[index].id)
        } else {
            let configObj = {
                method:"POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify(obj)
            }
        
            return fetch("http://localhost:8000/Users", configObj)
                .then(response => {return response.json()})
        }
    }
    
    return (
        <header>
            <h1 className="title" onClick={returnHome}>CoffeeHub</h1>
            <nav className="desktop-nav">
                <div className="Navbar">
                    <NavLink to="/" className="nav-item">Home</NavLink>
                    <NavLink to="/SuggestedRecipes" className="nav-item">Suggested Recipes</NavLink>
                    {isAuthenticated && <NavLink to="/Recipes" className="nav-item">Recipes</NavLink>}
                    <NavLink to="/RatioCalculator" className="nav-item">Ratio Calculator</NavLink>
                    {isAuthenticated && <NavLink to="/Account" className="nav-item" userid={userId} onClick={initUser}>Account</NavLink>}
                    {!isAuthenticated && (<div className="login"><LoginButton className="nav-button"/></div>)}
                    {isAuthenticated && (<LogoutButton className="nav-button"/>)}
                </div>
            </nav>
            <button className="hamburger" onClick={toggleActive}>
                <div className="bar"></div>
            </button>
            
            <nav className="mobile-nav">
                <div className="menu-items">
                    <NavLink to="/" className="mobile-nav-item" onClick={toggleActive}>Home</NavLink>
                    <br />
                    <NavLink to="/SuggestedRecipes" className="mobile-nav-item" onClick={toggleActive}>Suggested Recipes</NavLink>
                    <br />
                    <NavLink to="/RatioCalculator" className="mobile-nav-item" onClick={toggleActive}>Ratio Calculator</NavLink>
                    <br />
                    {isAuthenticated && (
                        <div>
                            <NavLink to="/Recipes" className="mobile-nav-item" onClick={toggleActive}>Recipes</NavLink>
                            <br/>
                            <NavLink to="/Account" className="mobile-nav-item" onClick={toggleActive}>Account</NavLink>
                        </div>
                    )}
                </div>
                <div className='login'>
                    {!isAuthenticated && (<div className="login-button"><LoginButton className="nav-button" onClick={toggleActive} /><br /></div>)}
                    {isAuthenticated && <div className="login-button"><LogoutButton className="mobile-button" onClick={toggleActive} /></div>}
                </div>
            </nav>
            
        </header>
        
    )
}

export default NavBar

const toggleActive = () => {
    const menu_btn = document.querySelector(".hamburger")
    const mobile_menu = document.querySelector(".mobile-nav")
    menu_btn.classList.toggle("is-active")
    mobile_menu.classList.toggle("is-active")
    
}