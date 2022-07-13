import { useState, useEffect } from 'react'
import { useAuth0 } from "@auth0/auth0-react";

const Account = () => {
    const { user, isAuthenticated, isLoading } = useAuth0();
    const [userTimezone, setUserTimezone] = useState()
    const [showMe, setShowMe] = useState(false)
    const [allTimezones, setAllTimezones] = useState()
    const [availableContinents, setAvailableContinents] = useState([])
    const [userContinent, setUserContinent] = useState()
    const [userCountry, setUserCountry] =useState()

    let userDb
    let userId

    fetch("http://localhost:8000/Users")
            .then(res => res.json())
            .then(json => returnUserTimezone(json))
            .catch("Gracefully handling error")
    
    let returnUserTimezone = (json) => {
            let index = json.findIndex(x => x.email === user.email)
            userDb = json[index]
            userId = json[index].id
            console.log(userDb)
            setUserTimezone(json[index].timezone)
    }

    useEffect(() => {
        console.log('User Continent is', userContinent);
    }, [userContinent]);

    useEffect(() => {
        console.log('User Country is', userCountry);
    }, [userCountry]);

    // useEffect(() => {
    //     console.log(allTimezones);
    // }, [allTimezones]);

    
    if (isLoading) {
        return <div>Loading ...</div>;
    }

    let handleClick = () => {
        fetch("http://worldtimeapi.org/api/timezone")
            .then(res => res.json())
            .then(json => getContinent(json))
        setShowMe(!showMe)
    }

    let getContinent = (json) => {
        let continent = json.map(element => element.split("/"))
        let regions = continent.map(element => element[0])
        console.log(continent)
        console.log(regions)

        let unique = (value, index, self) => {
            return self.indexOf(value) === index
        }
        
        const uniqueContinents = regions.filter(unique)
        
        setAllTimezones(continent)
        setAvailableContinents(uniqueContinents)
        console.log(allTimezones)
    }

    let handleChangeContinent = (event) => {
        event.target.name === "continent" && setUserContinent(event.target.value)
    }

    let handleChangeCountry = (event) => {
        event.target.name === "country" && setUserCountry(event.target.value)
    }

    let handleSubmit = (event) => {
        event.preventDefault()
        // userDb.timezone = '/' + userCountry
        console.log(userDb)

        let configObj = {
            method:"PATCH",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                "timezone": `${userCountry}`
            })
            
        }
    
        return fetch(`http://localhost:8000/Users/${userId}`, configObj)
                .then(setShowMe(!showMe))
        
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
                            <select name="continent" value={userContinent} onChange={handleChangeContinent}>
                                {availableContinents.map(continent => <option key={continent} value={continent}>{continent}</option>)}
                            </select>
                            {userContinent && 
                                <select name="country" value={userCountry} onChange={handleChangeCountry}>
                                    {allTimezones.filter(continent => continent[0] === userContinent).map(
                                        (location, i) => {
                                            // console.log(location)
                                            if(location.length === 3) {
                                                return (
                                                    <option key={location + i} value={location.join('/')} length={location.length}>{location[2]}</option>
                                                )
                                            } else {
                                                return (
                                                    <option key={location + i} value={location.join('/')}>{location[1]}</option>
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

