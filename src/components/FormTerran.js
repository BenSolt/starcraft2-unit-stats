import React, { useState } from "react";
// import axios from "axios";

import SearchFilter from './SearchFilter';

import ListHeader from './navbar/ListHeader';
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

            <div className='ImageTerran'>
                <div className="Searchbarholder" >
                    <div>
                        <div className='Searchbar2'>
                            <h3 className='Searchtext'>TERRAN</h3>
                            <SearchFilter filter={filter} onFilterChange={handleFilterChange} />
                        </div>
                    </div>
                </div>

                {/* <ListHeader/> */}
               
                <ListTerran filteredData1={filteredData}/>

            </div>
        </div>
    );
}

export default FormTerran;