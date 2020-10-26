import Img_Probe from "../images/Icon_Protoss_Probe.jpg";
import Img_Zealot from "../images/Icon_Protoss_Zealot.jpg";
import Img_Sentry from "../images/Icon_Protoss_Sentry.jpg";
import Img_Stalker from "../images/Icon_Protoss_Stalker.jpg";
import Img_Adept from "../images/Icon_Protoss_Adept.jpg";
import Img_Archon from "../images/Icon_Protoss_Archon.jpg";
import Img_Carrier from "../images/Icon_Protoss_Carrier.jpg";
import Img_Colossus from "../images/Icon_Protoss_Colossus.jpg";
import Img_DarkTemplar from "../images/Icon_Protoss_Dark_Templar.jpg";
import Img_Disruptor from "../images/Icon_Protoss_Disruptor.jpg";
import Img_HighTemplar from "../images/Icon_Protoss_High_Templar.jpg";
import Img_Immortal from "../images/Icon_Protoss_Immortal.jpg";
import Img_Mothership from "../images/Icon_Protoss_Mothership.jpg";
import Img_Observer from "../images/Icon_Protoss_Observer.jpg";
import Img_Oracle from "../images/Icon_Protoss_Oracle.jpg";
import Img_Phoenix from "../images/Icon_Protoss_Phoenix.jpg";
import Img_Tempest from "../images/Icon_Protoss_Tempest.jpg";
import Img_WarpPrism from "../images/Icon_Protoss_Warp_Prism.jpg";
import Img_VoidRay from "../images/VoidRay_SC2_Rend1.jpg";

const Terran = [

    {
        name: "SCV",
        image: Img_Probe,
        supply: 1,
        minerals: 50,
        gas: 0,
        health: 45,
        groundAttack: 5,
        airAttack: 0,
        bonus: 0
    },

    {
        name: "MULE",
        image: Img_Zealot,
        supply: 0,
        minerals: 0,
        gas: 0,
        health: 60,
        groundAttack: 8,
        airAttack: 0,
        bonus: 0
    },

    {
        name: "MARINE",
        image: Img_Sentry,
        supply: 1,
        minerals: 50,
        gas: 0,
        health: 45,
        groundAttack: 6,
        airAttack: 6,
        bonus: 0
    },

    {
        name: "Marauder",
        image: Img_Stalker,
        supply: 2,
        minerals: 100,
        gas: 25,
        health: 125,
        groundAttack: 5,
        airAttack: 0,
        bonus: '+' + 5 + ' Armored'
    },

    {
        name: "Reaper",
        image: Img_Adept,
        supply: 1,
        minerals: 50,
        gas: 50,
        health: 60,
        groundAttack: 4,
        airAttack: 0,
        bonus: 1
    },

    {
        name: "Ghost",
        image: Img_HighTemplar,
        supply: 2,
        minerals: 150,
        gas: 125,
        health: 100,
        groundAttack: 10,
        airAttack: 10,
        bonus: '+'+ 10 +'Light'
    },

    {
        name: "Hellion",
        image: Img_DarkTemplar,
        supply: 2,
        minerals: 100,
        gas: 0,
        health: 90,
        groundAttack: 8,
        airAttack: 0,
        bonus: '+'+ 5 +'Light'
    },

    {
        name: "Hellbat",
        image: Img_Archon,
        supply: 2,
        minerals: 100,
        gas: 0,
        health: 135,
        groundAttack: 18,
        airAttack: 1,
        bonus: '+'+ 12 +'Light'
    },

    {
        name: "Widow Mine",
        image: Img_Observer,
        supply: 2,
        minerals: 75,
        gas: 25,
        health: 90,
        groundAttack: 125,
        airAttack: 0,
        bonus: '+'+ 35+'Shield'
    },

    {
        name: "Siege Tank",
        image: Img_Immortal,
        supply: 3,
        minerals: 1,
        gas: 1,
        health: 1,
        groundAttack: 15 +'Tank' + 40 +'Seige',
        airAttack: 1,
        bonus: '+'+'Tank:'+ 15 +'armored' + 'Siege:'+'+'+ 30 + 'armored'
    },

    {
        name: "Cyclone",
        image: Img_WarpPrism,
        supply: 3,
        minerals: 150,
        gas: 100,
        health: 120,
        groundAttack: 18,
        airAttack: 18,
        bonus: 0
    },

    {
        name: "Thor",
        image: Img_Colossus,
        supply: 6,
        minerals: 300,
        gas: 200,
        health: 400,
        groundAttack: 'Explosive:'+30 + 'High Impact:'+30,
        airAttack: 'Explosive:'+6 + 'High Impact:'+40,
        bonus: 'Explosive:'+ '+'+6+'Light' +'High Impact:'+'+'+15+'Massive'
    },

    {
        name: "Viking",
        image: Img_Disruptor,
        supply: 2,
        minerals: 150,
        gas: 75,
        health: 125,
        groundAttack: 12,
        airAttack: 10,
        bonus: 'Air:'+'+'+ 4+'Armored' +'Ground:' + '+'+8+'Massive'
    },

    {
        name: "Medivac",
        image: Img_Phoenix,
        supply: 2,
        minerals: 100,
        gas: 100,
        health: 150,
        groundAttack: 0,
        airAttack: 0,
        bonus: 0
    },

    {
        name: "Liberator",
        image: Img_Oracle,
        supply: 3,
        minerals: 150,
        gas: 150,
        health: 180,
        groundAttack: 75,
        airAttack: 5,
        bonus: 0
    },

    {
        name: "Banshee",
        image: Img_VoidRay,
        supply: 3,
        minerals: 150,
        gas: 100,
        health: 140,
        groundAttack: 12,
        airAttack: 0,
        bonus: 0
    },

    {
        name: "Raven",
        image: Img_Tempest,
        supply: 2,
        minerals: 100,
        gas: 200,
        health: 140,
        groundAttack: 0,
        airAttack: 0,
        bonus: 0
    },

    {
        name: "Battlecruiser",
        image: Img_Carrier,
        supply: 6,
        minerals: 400,
        gas: 300,
        health: 550,
        groundAttack: 8,
        airAttack: 6,
        bonus: 0
    },

    {
        name: "Missle Turret",
        image: Img_Mothership,
        supply: 0,
        minerals: 100,
        gas: 0,
        health: 250,
        groundAttack: 0,
        airAttack: 12 +'x' +2,
        bonus: 0
    }
]

export {
Terran
}