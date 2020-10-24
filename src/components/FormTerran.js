import React, { useState } from "react";
// import axios from "axios";

import SearchFilter from './SearchFilter';

import ListHeader from './ListHeader';
import ListTerran from "./ListTerran";

import {Terran} from './DataTerran';

function FormTerran(props) {

        // const Protoss = [

    //     'Interceptor',
    //     'Mothership Core',
    //     'Photon Cannon',
    //     'Pylon',
    // ]

    const [filteredData, setFilteredData] = useState(Terran);
    const [filter, setFilter] = useState("");
    

    function handleFilterChange(f) {
        const fd = Terran.filter(r => {
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
                            <h1 className='Searchtext'>TERRAN</h1>
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