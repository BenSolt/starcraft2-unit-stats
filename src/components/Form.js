import React, { useEffect, useState } from "react";
// import axios from "axios";

import SearchFilter from './SearchFilter';
import List from './List';

function Form() {

    const [filter, setFilter] = useState("");

    const Protoss2 = [
      
      {
        name: "Probe",
        supply: 1,
        minerals: 50,
        gas: 0,
        health: 20,
        shield: 20,
        groundAttack: 5,
        airAttack: 0,
        bonus: 0
        },

      {
        name: "Zealot",
        supply: 2,
        minerals: 100,
        gas: 0,
        health: 100,
        shield: 50,
        groundAttack: 8,
        airAttack: 0,
        bonus: 0
        },  

      {
        name: "Sentry",
        supply: 2,
        minerals: 50,
        gas: 100,
        health: 40,
        shield: 40,
        groundAttack: 6,
        airAttack: 6,
        bonus: 0
        }, 

      {
        name: "Stalker",
        supply: 2,
        minerals: 125,
        gas: 50,
        health: 80,
        shield: 80,
        groundAttack: 13,
        airAttack: 13,
        bonus: '+' + 5 +' Armored'
        }   
    ]

    const Protoss = [
      'Probe',
      'Zealot',
      'Sentry',
      'Stalker',
      'Adept',
      'High Templar',
      'Dark Templar',
      'Archon',
      'Observer',
      'Warp Prism',
      'Immortal',
      'Colossus',
      'Disruptor',
      'Phoenix',
      'Void Ray',
      'Oracle',
      'Tempest',
      'Carrier',
      'Interceptor',
      'Mothership Core',
      'Mothership',
      'Photon Cannon',
      'Pylon',
    ]

    const [filteredData, setFilteredData] = useState(Protoss);
    const [filteredDataB, setFilteredDataB] = useState(Protoss2);
  
    // function handleFilterChange(f) {
    //   const fd = Protoss.filter((datum) => {
    //     return datum.toLowerCase().includes(f.toLowerCase());
    //   });
    //   setFilteredData(fd);
    //   setFilter(f);
    // }

    function handleFilterChange(f) {
        const fd = Protoss2.filter((datum) => {
          return datum.toLowerCase().includes(f.toLowerCase());
        });
        setFilteredDataB(fd);
        setFilter(f);
      }

  return (
    <div>
         
      <div className="Searchbar" >
        <h3 className='searchtext'>Search Units:</h3>

        <SearchFilter filter={filter} onFilterChange={handleFilterChange} />

        <List 
            filteredData1={filteredData}
            filteredData2 = {filteredDataB}
        />

      </div>
    </div>
  );
}

export default Form;