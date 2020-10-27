import React, { useState } from "react";
// import axios from "axios";

import SearchFilter from './SearchFilter';

import ListHeader from './navbar/ListHeader';
import ListZerg from "./ListZerg";

import {Zerg} from './DataZerg';

function FormZerg(props) {

        // const Protoss = [

    //     'Interceptor',
    //     'Mothership Core',
    //     'Photon Cannon',
    //     'Pylon',
    // ]

    const [filteredData, setFilteredData] = useState(Zerg);
    const [filter, setFilter] = useState("");
    

    function handleFilterChange(f) {
        const fd = Zerg.filter(r => {
            return r.name.toLowerCase().includes(f.toLowerCase());
        })
        setFilteredData(fd);
        setFilter(f);
    }

    return (
        <div>

            <div  className="ImageZerg">
                <div className="Searchbarholder" >
                    <div>
                        <div className='Searchbar2'>
                            <h3 className='Searchtext'>ZERG</h3>
                            <SearchFilter filter={filter} onFilterChange={handleFilterChange} />
                        </div>
                    </div>
                </div>

                {/* <ListHeader/> */}

                <ListZerg filteredData1={filteredData}/>


            </div>
        </div>
    );
}

export default FormZerg;