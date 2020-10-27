import React, { useState } from "react";
// import axios from "axios";

import SearchFilter from './SearchFilter';

import ListHeader from './navbar/ListHeader';
import ListProtoss from './ListProtoss';

import {Protoss} from './DataProtoss';
// import {ProtossCounter} from './DataProtoss';

function FormProtoss(props) {

        // const Protoss = [

    //     'Interceptor',
    //     'Mothership Core',
    //     'Photon Cannon',
    //     'Pylon',
    // ]

    const [filteredData, setFilteredData] = useState(Protoss);
    // const [counter, setCounter] = useState(ProtossCounter);
    const [filter, setFilter] = useState("");
    

    function handleFilterChange(f) {
        const fd = Protoss.filter(r => {
            return r.name.toLowerCase().includes(f.toLowerCase());
        })
        setFilteredData(fd);
        setFilter(f);
    }

    return (
        <div>

        
            <div className="ImageProtoss">
                <div className="Searchbarholder">
                    <div>
                        <div className='Searchbar2'>
                            <h3 className='Searchtext'>PROTOSS</h3>
                            <SearchFilter filter={filter} onFilterChange={handleFilterChange} />
                        </div>
                    </div>
                </div>

                {/* <ListHeader/> */}

                <ListProtoss filteredData1={filteredData}/>


            </div>
        </div>
    );
}

export default FormProtoss;