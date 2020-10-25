import React, { useState } from "react";
// import axios from "axios";

import SearchFilter from './SearchFilter';

import ListHeader from './ListHeader';
import ListProtoss from './ListProtoss';

import {Protoss} from './DataProtoss';

function FormProtoss(props) {

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
        <div>

            <div>
                <div className="Searchbarholder" >
                    <div className="ImageProtoss" >
                        <div className='Searchbar2'>
                            <h1 className='Searchtext'>PROTOSS</h1>
                            <SearchFilter filter={filter} onFilterChange={handleFilterChange} />
                        </div>
                    </div>
                </div>

                <ListHeader/>

                <ListProtoss  filteredData1={filteredData}/>


            </div>
        </div>
    );
}

export default FormProtoss;