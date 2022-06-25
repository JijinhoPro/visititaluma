import React from "react";
import { Link } from "react-router-dom";

const Cities = () => {
    return (
    <div>

        <h1> Città </h1>

        <p>Le maggiori città italiane:</p>
        
            <ul className="cittaList">
                <li><Link to="/roma"> Roma </Link></li>
                <li><Link to="/milano"> Milano </Link></li>
                <li><Link to="/napoli"> Napoli </Link></li>
                <li><Link to="/torino"> Torino </Link></li>
                <li><Link to="/palermo"> Palermo </Link></li>
            </ul>
    </div>
    )
};

export default Cities;