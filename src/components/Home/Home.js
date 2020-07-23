import React from 'react';
import './Home.css';
import DropDownMedico from '../DropDownMedico/DropDownMedico';

function Home(props) {
    return(
        //mt-2
        <div className="home">
            <DropDownMedico></DropDownMedico>
        </div>
    )
}

export default Home;