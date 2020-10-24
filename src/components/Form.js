import React, { useState } from "react";
// import axios from "axios";

import SearchFilter from './SearchFilter';
import List from './List';

import {Protoss} from './DataProtoss';

// import Img_Probe from "../images/Icon_Protoss_Probe.jpg";
// import Img_Zealot from "../images/Icon_Protoss_Zealot.jpg";
// import Img_Sentry from "../images/Icon_Protoss_Sentry.jpg";
// import Img_Stalker from "../images/Icon_Protoss_Stalker.jpg";
// import Img_Adept from "../images/Icon_Protoss_Adept.jpg";
// import Img_Archon from "../images/Icon_Protoss_Archon.jpg";
// import Img_Carrier from "../images/Icon_Protoss_Carrier.jpg";
// import Img_Colossus from "../images/Icon_Protoss_Colossus.jpg";
// import Img_DarkTemplar from "../images/Icon_Protoss_Dark_Templar.jpg";
// import Img_Disruptor from "../images/Icon_Protoss_Disruptor.jpg";
// import Img_HighTemplar from "../images/Icon_Protoss_High_Templar.jpg";
// import Img_Immortal from "../images/Icon_Protoss_Immortal.jpg";
// import Img_Mothership from "../images/Icon_Protoss_Mothership.jpg";
// import Img_Observer from "../images/Icon_Protoss_Observer.jpg";
// import Img_Oracle from "../images/Icon_Protoss_Oracle.jpg";
// import Img_Phoenix from "../images/Icon_Protoss_Phoenix.jpg";
// import Img_Tempest from "../images/Icon_Protoss_Tempest.jpg";
// import Img_WarpPrism from "../images/Icon_Protoss_Warp_Prism.jpg";
// import Img_VoidRay from "../images/VoidRay_SC2_Rend1.jpg";

function Form(props) {

    const [filter, setFilter] = useState("");

    // const Protoss = [

    //     {
    //         name: "Probe",
    //         image: Img_Probe,
    //         supply: 1,
    //         minerals: 50,
    //         gas: 0,
    //         health: 20,
    //         shield: 20,
    //         groundAttack: 5,
    //         airAttack: 0,
    //         bonus: 0
    //     },

    //     {
    //         name: "Zealot",
    //         image: Img_Zealot,
    //         supply: 2,
    //         minerals: 100,
    //         gas: 0,
    //         health: 100,
    //         shield: 50,
    //         groundAttack: 8,
    //         airAttack: 0,
    //         bonus: 0
    //     },

    //     {
    //         name: "Sentry",
    //         image: Img_Sentry,
    //         supply: 2,
    //         minerals: 50,
    //         gas: 100,
    //         health: 40,
    //         shield: 40,
    //         groundAttack: 6,
    //         airAttack: 6,
    //         bonus: 0
    //     },

    //     {
    //         name: "Stalker",
    //         image: Img_Stalker,
    //         supply: 2,
    //         minerals: 125,
    //         gas: 50,
    //         health: 80,
    //         shield: 80,
    //         groundAttack: 13,
    //         airAttack: 13,
    //         bonus: '+' + 5 + ' Armored'
    //     },

    //     {
    //         name: "Adept",
    //         image: Img_Adept,
    //         supply: 1,
    //         minerals: 1,
    //         gas: 1,
    //         health: 1,
    //         shield: 1,
    //         groundAttack: 1,
    //         airAttack: 1,
    //         bonus: 1
    //     }, 

    //     {
    //         name: "High Templar",
    //         image: Img_HighTemplar,
    //         supply: 1,
    //         minerals: 1,
    //         gas: 1,
    //         health: 1,
    //         shield: 1,
    //         groundAttack: 1,
    //         airAttack: 1,
    //         bonus: 1
    //     },

    //     {
    //         name: "Dark Templar",
    //         image: Img_DarkTemplar,
    //         supply: 1,
    //         minerals: 1,
    //         gas: 1,
    //         health: 1,
    //         shield: 1,
    //         groundAttack: 1,
    //         airAttack: 1,
    //         bonus: 1
    //     },

    //     {
    //         name: "Archon",
    //         image: Img_Archon,
    //         supply: 1,
    //         minerals: 1,
    //         gas: 1,
    //         health: 1,
    //         shield: 1,
    //         groundAttack: 1,
    //         airAttack: 1,
    //         bonus: 1
    //     },

    //     {
    //         name: "Observer",
    //         image: Img_Observer,
    //         supply: 1,
    //         minerals: 1,
    //         gas: 1,
    //         health: 1,
    //         shield: 1,
    //         groundAttack: 1,
    //         airAttack: 1,
    //         bonus: 1
    //     },

    //     {
    //         name: "Immortal",
    //         image: Img_Immortal,
    //         supply: 1,
    //         minerals: 1,
    //         gas: 1,
    //         health: 1,
    //         shield: 1,
    //         groundAttack: 1,
    //         airAttack: 1,
    //         bonus: 1
    //     },

    //     {
    //         name: "Warp Prism",
    //         image: Img_WarpPrism,
    //         supply: 1,
    //         minerals: 1,
    //         gas: 1,
    //         health: 1,
    //         shield: 1,
    //         groundAttack: 1,
    //         airAttack: 1,
    //         bonus: 1
    //     },

    //     {
    //         name: "Colossus",
    //         image: Img_Colossus,
    //         supply: 1,
    //         minerals: 1,
    //         gas: 1,
    //         health: 1,
    //         shield: 1,
    //         groundAttack: 1,
    //         airAttack: 1,
    //         bonus: 1
    //     },

    //     {
    //         name: "Disruptor",
    //         image: Img_Disruptor,
    //         supply: 1,
    //         minerals: 1,
    //         gas: 1,
    //         health: 1,
    //         shield: 1,
    //         groundAttack: 1,
    //         airAttack: 1,
    //         bonus: 1
    //     },

    //     {
    //         name: "Phoenix",
    //         image: Img_Phoenix,
    //         supply: 1,
    //         minerals: 1,
    //         gas: 1,
    //         health: 1,
    //         shield: 1,
    //         groundAttack: 1,
    //         airAttack: 1,
    //         bonus: 1
    //     },

    //     {
    //         name: "Oracle",
    //         image: Img_Oracle,
    //         supply: 1,
    //         minerals: 1,
    //         gas: 1,
    //         health: 1,
    //         shield: 1,
    //         groundAttack: 1,
    //         airAttack: 1,
    //         bonus: 1
    //     },

    //     {
    //         name: "Void Ray",
    //         image: Img_VoidRay,
    //         supply: 1,
    //         minerals: 1,
    //         gas: 1,
    //         health: 1,
    //         shield: 1,
    //         groundAttack: 1,
    //         airAttack: 1,
    //         bonus: 1
    //     },

    //     {
    //         name: "Tempest",
    //         image: Img_Tempest,
    //         supply: 1,
    //         minerals: 1,
    //         gas: 1,
    //         health: 1,
    //         shield: 1,
    //         groundAttack: 1,
    //         airAttack: 1,
    //         bonus: 1
    //     },

    //     {
    //         name: "Carrier",
    //         image: Img_Carrier,
    //         supply: 1,
    //         minerals: 1,
    //         gas: 1,
    //         health: 1,
    //         shield: 1,
    //         groundAttack: 1,
    //         airAttack: 1,
    //         bonus: 1
    //     },

    //     {
    //         name: "Mothership",
    //         image: Img_Mothership,
    //         supply: 1,
    //         minerals: 1,
    //         gas: 1,
    //         health: 1,
    //         shield: 1,
    //         groundAttack: 1,
    //         airAttack: 1,
    //         bonus: 1
    //     }
    // ]



    // const Protoss = [

    //     'Interceptor',
    //     'Mothership Core',
    //     'Photon Cannon',
    //     'Pylon',
    // ]

    const [filteredData, setFilteredData] = useState(Protoss);



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
                    <div className="Searchbar" >
                        <div className='Searchbar2'>
                            <h3 className='Searchtext'>Search Units:</h3>
                            <SearchFilter filter={filter} onFilterChange={handleFilterChange} />
                        </div>
                    </div>
                </div>

              

                <List
                    filteredData1={filteredData}
                />

            </div>
        </div>
    );
}

export default Form;