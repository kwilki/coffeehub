import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const EditAccount = () => {
    const { user, isAuthenticated, isLoading } = useAuth0();

    if (isLoading) {
        return <div>Loading ...</div>;
    }

    return (
        isAuthenticated && (
            <div className="page-content">
                <img src={user.picture} alt={user.name} />
                <h3>Username: {user.name}</h3>
                <p>Email :{user.email}</p>
        </div>
        )
    );
};

export default EditAccount;