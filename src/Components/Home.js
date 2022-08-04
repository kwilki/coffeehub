import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Home = () => {
    const { user, isAuthenticated, isLoading } = useAuth0();

    if (isLoading) {
        return <div>Loading ...</div>;
    }

    if(!isAuthenticated) {
        console.log('if')
        return (
            <div className="page-container">
                <div className="page-content">
                    <p>Your one stop for crafting and tracking brewing recipes</p>
                </div>
            </div>
        )

    } else {
        console.log('else')
        return (
            <div className="page-container">
                <div className="main-heading">
                    <h2 className="page-heading">Welcome {user.name.split(' ')[0]}</h2>
                </div>
                <div className="page-content">
                    <div>
                        <p>This is your one stop for crafting and tracking brewing recipes.</p>
                        <p>Create a recipe, browse the suggested or calculate ratios from the menu.</p>
                    </div>
                    
                </div>
            </div>
        )
    }
}

export default Home