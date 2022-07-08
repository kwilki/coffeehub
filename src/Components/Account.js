import { useState } from 'react'
import { useAuth0 } from "@auth0/auth0-react";

const Account = () => {
    const { user, isAuthenticated, isLoading } = useAuth0();
    const [timezone, setTimezone] = useState()

    fetch("http://localhost:8000/Users")
            .then(res => res.json())
            .then(json => returnTimezone(json))
            .catch("Gracefully handling error")
    
    let returnTimezone = (json) => {
            let index = json.findIndex(x => x.email === user.email)
            setTimezone(json[index].timezone)
    }

    if (isLoading) {
        return <div>Loading ...</div>;
    }

    return (
        isAuthenticated && (
            <div className="page-content">
                <img src={user.picture} alt={user.name} />
                <h3>Username: {user.name}</h3>
                <p>Email: {user.email}</p>
                <p>Time Zone: {timezone} <button>Edit</button></p>
        </div>
        )
    );
};

export default Account;