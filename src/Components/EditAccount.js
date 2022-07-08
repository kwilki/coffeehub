import React, { Component } from "react";
import { useAuth0 } from "@auth0/auth0-react";

class EditTimeZone extends Component {

    
    render() {
        return (
            isAuthenticated && (
                <div className="page-content">
                    <img src={user.picture} alt={user.name} />
                    <h3>Username: {user.name}</h3>
                    <p>Email :{user.email}</p>
            
            
                </div>
            )
        );
    }
};

export default EditTimeZone;