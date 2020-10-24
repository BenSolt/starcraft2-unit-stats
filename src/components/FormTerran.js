import React, { useState } from "react";
// import axios from "axios";

import SearchFilter from './SearchFilter';

import ListHeader from './ListHeader';
import ListTerran from "./ListTerran";

import {Protoss} from './DataProtoss';

function FormTerran(props) {

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
                    <div className="ImageTerran" >
                        <div className='Searchbar2'>
                            <h3 className='Searchtext'>Search Units:</h3>
                            <SearchFilter filter={filter} onFilterChange={handleFilterChange} />
                        </div>
                    </div>
                </div>

                <ListHeader/>

                <ListTerran filteredData1={filteredData}/>


            </div>
        </div>
    );
}

export default FormTerran;