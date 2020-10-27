import React, { useState } from "react";

import {Protoss} from './DataProtoss';

import ImgLogo from "../images/StarCraft_II_Logo.jpg";
import ImgProtoss from "../images/StarCraft_II_Protoss.jpg";
import ImgTerran from '../images/StarCraft_II_Terran.jpg';
import ImgZerg from '../images/StarCraft_II_Zerg.jpg';

function Home(props) {

        // const Protoss = [

    //     'Interceptor',
    //     'Mothership Core',
    //     'Photon Cannon',
    //     'Pylon',
    // ]

    const [filteredData, setFilteredData] = useState(Protoss);
    const [filter, setFilter] = useState("");
    

    function handleFilterChange(f) {
        const fd = Protoss.filter(r => {
            return r.name.toLowerCase().includes(f.toLowerCase());
        })
        setFilteredData(fd);
        setFilter(f);
    }

    return (
        // <div className='ImageHome'>
        <div>

            <img className='images' src={ImgLogo} alt='logo'/>
            {/* <img className='images' src={ImgProtoss} alt='protoss'/>
            <img className='images' src={ImgTerran} alt='terran'/>
            <img className='images' src={ImgZerg} alt='zerg'/> */}

        </div>
       
    );
}

export default Home;