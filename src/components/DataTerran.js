import Img_SCV from "../images/SCV_SC2_Icon1.jpg";
import Img_Mule from "../images/MULE_SC2_Icon1.jpg";
import Img_Marine from "../images/Marine_SC2_Icon1.jpg";
import Img_Marauder from "../images/Marauder_SC2_Icon1.jpg";
import Img_Reaper from "../images/Reaper_SC2_Icon1.jpg";
import Img_Ghost from "../images/Ghost_SC2_Icon1.jpg";
import Img_Hellion from "../images/Hellion_SC2_Icon1.jpg";
import Img_Hellbat from "../images/Hellbat_SC2-HotS_Icon1.jpg";
import Img_WidowMine from "../images/WidowMine_SC2-HotS_Icon1.jpg";
import Img_SiegeTank from "../images/SiegeTank_SC2_Icon1.jpg";
import Img_Cyclone from "../images/Cyclone_SC2-LotV_Icon1.jpg";
import Img_Thor from "../images/Thor_SC2_Icon1.jpg";
import Img_Viking from "../images/Viking_SC2_Icon1.jpg";
import Img_Medivac from "../images/Medivac_SC2_Icon1.jpg";
import Img_Liberator from "../images/Liberator_SC2-LotV_Icon1.jpg";
import Img_Banshee from "../images/Banshee_SC2_Icon1.jpg";
import Img_Raven from "../images/Raven_SC2_Icon1.jpg";
import Img_Battlecruiser from "../images/Battlecruiser_SC2_Icon1.jpg";
import Img_MissleTurret from "../images/MissileTurret_SC2_Icon1.jpg";

const Terran = [

    {
        id: 1,
        name: "SCV",
        image: Img_SCV,
        supply: 1,
        minerals: 50,
        gas: 0,
        health: 45,
        groundAttack: 5,
        airAttack: 0,
        bonus: 0,

        type:' -',
        strong:' -',
        weak:' -'
    },

    {   
        id: 2,
        name: "MULE",
        image: Img_Mule,
        supply: 0,
        minerals: 0,
        gas: 0,
        health: 60,
        groundAttack: 8,
        airAttack: 0,
        bonus: 0,

        type:' -',
        strong:' -',
        weak:' -'
    },

    {
        id: 3,
        name: "MARINE",
        image: Img_Marine,
        supply: 1,
        minerals: 50,
        gas: 0,
        health: 45,
        groundAttack: 6,
        airAttack: 6,
        bonus: 0,

        type:' Light, Biological',
        strong:' -',
        weak:' -'
    },

    {
        id: 4,
        name: "Marauder",
        image: Img_Marauder,
        supply: 2,
        minerals: 100,
        gas: 25,
        health: 125,
        groundAttack: 5,
        airAttack: 0,
        bonus: '+' + 5 + ' Armored',

        type:' Armored, Biological',
        strong:' -',
        weak:' -'
    },

    {
        id: 5,
        name: "Reaper",
        image: Img_Reaper,
        supply: 1,
        minerals: 50,
        gas: 50,
        health: 60,
        groundAttack: 4,
        airAttack: 0,
        bonus: 1,

        type:' Light, Biological',
        strong:' -',
        weak:' -'
    },

    {
        id: 6,
        name: "Ghost",
        image: Img_Ghost,
        supply: 2,
        minerals: 150,
        gas: 125,
        health: 100,
        groundAttack: 10,
        airAttack: 10,
        bonus: '+'+ 10 +'Light',

        type:' Psionic, Biological',
        strong:' -',
        weak:' -'
    },

    {
        id: 7,
        name: "Hellion",
        image: Img_Hellion,
        supply: 2,
        minerals: 100,
        gas: 0,
        health: 90,
        groundAttack: 8,
        airAttack: 0,
        bonus: '+'+ 5 +'Light',

        type:' Light, Mechanical',
        strong:' -',
        weak:' -'
    },

    {
        id: 8,
        name: "Hellbat",
        image: Img_Hellbat,
        supply: 2,
        minerals: 100,
        gas: 0,
        health: 135,
        groundAttack: 18,
        airAttack: 1,
        bonus: '+'+ 12 +'Light',

        type:' Light, Biological, Mechanical',
        strong:' -',
        weak:' -'
    },

    {
        id: 9,
        name: "Widow Mine",
        image: Img_WidowMine,
        supply: 2,
        minerals: 75,
        gas: 25,
        health: 90,
        groundAttack: 125,
        airAttack: 0,
        bonus: '+'+ 35+'Shield',

        type:' Light, Mechanical',
        strong:' -',
        weak:' -'
    },

    {
        id: 10,
        name: "Siege Tank",
        image: Img_SiegeTank,
        supply: 3,
        minerals: 1,
        gas: 1,
        health: 1,
        groundAttack: 15 +'Tank' + 40 +'Seige',
        airAttack: 1,
        bonus: '+'+'Tank:'+ 15 +'armored' + 'Siege:'+'+'+ 30 + 'armored',
        
        type:' Armored, Mechanical',
        strong:' -',
        weak:' -'
    },

    {
        id: 11,
        name: "Cyclone",
        image: Img_Cyclone,
        supply: 3,
        minerals: 150,
        gas: 100,
        health: 120,
        groundAttack: 18,
        airAttack: 18,
        bonus: 0,

        type:' Armored, Mechanical',
        strong:' -',
        weak:' -'
    },

    {
        id: 12,
        name: "Thor",
        image: Img_Thor,
        supply: 6,
        minerals: 300,
        gas: 200,
        health: 400,
        groundAttack: 'Explosive:'+30 + 'High Impact:'+30,
        airAttack: 'Explosive:'+6 + 'High Impact:'+40,
        bonus: 'Explosive:'+ '+'+6+'Light' +'High Impact:'+'+'+15+'Massive',
        
        type:' Armored, Massive, Mechanical',
        strong:' -',
        weak:' -'
    
    },

    {
        id: 13,
        name: "Viking",
        image: Img_Viking,
        supply: 2,
        minerals: 150,
        gas: 75,
        health: 125,
        groundAttack: 12,
        airAttack: 10,
        bonus: 'Air:'+'+'+ 4+'Armored' +'Ground:' + '+'+8+'Massive',
        
        type:' Armored, Mechanical',
        strong:' -',
        weak:' -'
    
    },

    {
        id: 14,
        name: "Medivac",
        image: Img_Medivac,
        supply: 2,
        minerals: 100,
        gas: 100,
        health: 150,
        groundAttack: 0,
        airAttack: 0,
        bonus: 0,

        type:' Armored, Mechanical',
        strong:' -',
        weak:' -'
    },

    {
        id: 15,
        name: "Liberator",
        image: Img_Liberator,
        supply: 3,
        minerals: 150,
        gas: 150,
        health: 180,
        groundAttack: 75,
        airAttack: 5,
        bonus: 0,

        type:' Armored, Mechanical',
        strong:' -',
        weak:' -'
    },

    {
        id: 16,
        name: "Banshee",
        image: Img_Banshee,
        supply: 3,
        minerals: 150,
        gas: 100,
        health: 140,
        groundAttack: 12,
        airAttack: 0,
        bonus: 0,

        type:' Light, Mechanical',
        strong:' -',
        weak:' -'
    },

    {
        id: 17,
        name: "Raven",
        image: Img_Raven,
        supply: 2,
        minerals: 100,
        gas: 200,
        health: 140,
        groundAttack: 0,
        airAttack: 0,
        bonus: 0,

        type:' Light, Mechanical',
        strong:' -',
        weak:' -'
    },

    {
        id: 18,
        name: "Battlecruiser",
        image: Img_Battlecruiser,
        supply: 6,
        minerals: 400,
        gas: 300,
        health: 550,
        groundAttack: 8,
        airAttack: 6,
        bonus: 0,

        type:' Armored, Massive, Mechanical',
        strong:' -',
        weak:' -'
    },

    {
        id: 19,
        name: "Missle Turret",
        image: Img_MissleTurret,
        supply: 0,
        minerals: 100,
        gas: 0,
        health: 250,
        groundAttack: 0,
        airAttack: 12 +'x' +2,
        bonus: 0,

        type:' -',
        strong:' -',
        weak:' -'
    }
]

export {
Terran
}