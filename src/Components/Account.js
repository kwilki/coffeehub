import { useState, useEffect } from 'react'
import { useAuth0 } from "@auth0/auth0-react";

const Account = () => {
    const { user, isAuthenticated, isLoading } = useAuth0();
    const [userTimezone, setUserTimezone] = useState()
    const [showMe, setShowMe] = useState(false)
    const [allTimezones, setAllTimezones] = useState()
    const [availableContinents, setAvailableContinents] = useState([])
    const [userContinent, setUserContinent] = useState()

    fetch("http://localhost:8000/Users")
            .then(res => res.json())
            .then(json => returnUserTimezone(json))
            .catch("Gracefully handling error")
    
    let returnUserTimezone = (json) => {
            let index = json.findIndex(x => x.email === user.email)
            setUserTimezone(json[index].timezone)
    }

    useEffect(() => {
        console.log('User Continent is', userContinent);
    }, [userContinent]);

    if (isLoading) {
        return <div>Loading ...</div>;
    }

    let handleClick = () => {
        fetch("http://worldtimeapi.org/api/timezone")
            .then(res => res.json())
            .then(json => getRegion(json))
        setShowMe(!showMe)
    }

    let getRegion = (json) => {
        let region = json.map(element => element.split("/"))
        let regions = region.map(element => element[0])
        console.log(region)
        console.log(regions)

        let unique = (value, index, self) => {
            return self.indexOf(value) === index
        }
        
        const uniqueContinents = regions.filter(unique)
        
        setAllTimezones(region)
        setAvailableContinents(uniqueContinents)
        console.log(availableContinents)
    }

    let handleChange = (event) => {
        event.target.name === "continent" && setUserContinent(event.target.value)
    }

    let handleSubmit = () => {

    }

    return (
        isAuthenticated && (
            <div className="page-content">
                <img src={user.picture} alt={user.name} />
                <h3>Username: {user.name}</h3>
                <p>Email: {user.email}</p>

                {showMe === false ? <p>Time Zone: {userTimezone} <button onClick={handleClick}>Edit</button></p> : 
                <div>
                    <form onSubmit={handleSubmit}>
                        <label>Time Zone: </label> 
                            <select name="continent" value={userContinent} onChange={handleChange}>
                                {availableContinents.map(continent => <option key={continent} value={continent}>{continent}</option>)}
                            </select>
                            {/* NEED TO FIX MAPS THAT CONTAIN 3 VALUES */}
                            {userContinent && 
                                <select>
                                    {allTimezones.filter(continent => continent[0] === userContinent).map(
                                        (location, i) => {
                                            if(location.length > 2) {
                                                return (
                                                    <option key={location + i} value={location[2]}>{location[2]}</option>
                                                )
                                            } else {
                                                return (
                                                    <option key={location + i} value={location[1]}>{location[1]}</option>
                                                )
                                            }
                                        }
                                    )}
                                </select>
                            }
                        <input type="submit" />
                    </form>
                    
                </div>
                }
                
            </div>
        )
    );
};

export default Account;

