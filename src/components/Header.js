import { Link } from "react-router-dom";
/*import React from 'react';

function Header() {
    return (
        <div>
            First React component!
        </div>
    )
}*/

const Header = () => {
    return (
        <div className="ui fixed menu" style={{ height: "55px" }}>
            <div className="ui container center">
                <h1><Link exact to="/">MarketMoxie</Link></h1>
            </div>
        </div>
    )
}

export default Header;