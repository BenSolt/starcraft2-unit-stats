// import React, { useState } from "react";

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

    const Protoss = [

        {
            id: 1,
            name: "Probe",
            image: Img_Probe,
            supply: 1,
            minerals: 50,
            gas: 0,
            health: 20,
            shield: 20,
            groundAttack: 5,
            airAttack: 0,
            bonus: 0,

            type:' Light, Mechanical',
            strong:' -'
        },

        {
            id: 2,
            name: "Zealot",
            image: Img_Zealot,
            supply: 2,
            minerals: 100,
            gas: 0,
            health: 100,
            shield: 50,
            groundAttack: 8,
            airAttack: 0,
            bonus: 0,

            type:' Light, Biological',
            strong:' Maruader, Immortal, Zergling',
            weak:' Hellion, Colossus, Roach'
        },

        {
            id: 3,
            name: "Sentry",
            image: Img_Sentry,
            supply: 2,
            minerals: 50,
            gas: 100,
            health: 40,
            shield: 40,
            groundAttack: 6,
            airAttack: 6,
            bonus: 0,

            type:' Light, Mechanical, Psionic',
            strong:' Zealot, zergling',
            weak:' Stalker, Reaper, Hyralisk'
        },

        {
            id: 4,
            name: "Stalker",
            image: Img_Stalker,
            supply: 2,
            minerals: 125,
            gas: 50,
            health: 80,
            shield: 80,
            groundAttack: 13,
            airAttack: 13,
            bonus: '+' + 5 + ' Armored',

            type:' Armored, Mechanical',
            strong:' Reaper, Void, Mutalisk',
            weak:' Maruader, Immortal, Zergling'
        },

        {
            id: 5,
            name: "Adept",
            image: Img_Adept,
            supply: 2,
            minerals: 100,
            gas: 25,
            health: 70,
            shield: 70,
            groundAttack: 1,
            airAttack: 1,
            bonus: '+'+ 12 + 'Light',

            type:' Light, Biological',
            strong:' Drone, Probe, SCV, marine',
            weak:' Roach, Stalker, Marauder'
        },

        {
            id: 6,
            name: "High Templar",
            image: Img_HighTemplar,
            supply: 2,
            minerals: 50,
            gas: 150,
            health: 40,
            shield: 40,
            groundAttack: 0,
            airAttack: 0,
            bonus: 0,

            type:' Biological, Light, Psionic',
            strong:' -',
            weak:' -'
        },

        {
            id: 7,
            name: "Dark Templar",
            image: Img_DarkTemplar,
            supply: 2,
            minerals: 125,
            gas: 125,
            health: 40,
            shield: 80,
            groundAttack: 45,
            airAttack: 0,
            bonus: 0,

            type:' Biological, Light, Psionic',
            strong:' Probe, SCV, Drone',
            weak:' Detector, Air'
        },

        {
            id: 8,
            name: "Archon",
            image: Img_Archon,
            supply: 4,
            minerals: 0,
            gas: 0,
            health: 10,
            shield: 350,
            groundAttack: 25,
            airAttack: 25,
            bonus: '+'+ 10 + 'Biological',

            type:' Psionic, Massive',
            strong:' Mutalisk',
            weak:' Thor, Ultralisk, Immortal'
        },

        {
            id: 9,
            name: "Observer",
            image: Img_Observer,
            supply: 1,
            minerals: 25,
            gas: 75,
            health: 40,
            shield: 20,
            groundAttack: 0,
            airAttack: 0,
            bonus: 0,

            type:' Light, Mechanical, Detector',
            strong:' Cloaked Units',
            weak:' Detectors'
        },

        {
            id: 10,
            name: "Immortal",
            image: Img_Immortal,
            supply: 4,
            minerals: 250,
            gas: 100,
            health: 200,
            shield: 100,
            groundAttack: 20,
            airAttack: 0,
            bonus: '+'+ 30 +'Armored',

            type:' Armored, Mechanical',
            strong:' Siege Tank, Stalker, Roach',
            weak:' Marine, Zealot, Zergling'
        },

        {
            id: 11,
            name: "Warp Prism",
            image: Img_WarpPrism,
            supply: 2,
            minerals: 100,
            gas: 0,
            health: 80,
            shield: 100,
            groundAttack: 0,
            airAttack: 0,
            bonus: 0,

            
            type:' Armored, Mechanical, Psionic',
            strong:' -',
            weak:' -'
        },

        {
            id: 12,
            name: "Colossus",
            image: Img_Colossus,
            supply: 6,
            minerals: 300,
            gas: 200,
            health: 200,
            shield: 150,
            groundAttack: 10,
            airAttack: 0,
            bonus: '+'+5 +'Light',

            type:' Armored, Mechanical, Massive',
            strong:' Marine, Zealot, Zergling',
            weak:' Air'
        },

        {
            id: 13,
            name: "Disruptor",
            image: Img_Disruptor,
            supply: 3,
            minerals: 150,
            gas: 150,
            health: 100,
            shield: 100,
            groundAttack: 0,
            airAttack: 0,
            bonus: 0,

            type:' Armored, Mechanical',
            strong:' Marauder, Hydralisk, Probe',
            weak:' Thor, Ultralisk, Immortal'
        },

        {
            id: 14,
            name: "Phoenix",
            image: Img_Phoenix,
            supply: 2,
            minerals: 150,
            gas: 100,
            health: 120,
            shield: 60,
            groundAttack: 10,
            airAttack: 5,
            bonus: '+'+ 5 + 'Light',

            type:' Light',
            strong:' Banshee, Void Ray, Mutalisk',
            weak:' Battlecruiser, Carrier, Corruptor'
        },

        {
            id: 15,
            name: "Oracle",
            image: Img_Oracle,
            supply: 3,
            minerals: 150,
            gas: 150,
            health: 100,
            shield: 60,
            groundAttack: 15,
            airAttack: 0,
            bonus: '+'+ 7 + 'Light',

            type:' Armored, Mechanical, Psionic',
            strong:' SCV, Drone, Probe',
            weak:' Viking, Phoenix, Mutalisk'
        },

        {
            id: 16,
            name: "Void Ray",
            image: Img_VoidRay,
            supply: 4,
            minerals: 250,
            gas: 150,
            health: 150,
            shield: 100,
            groundAttack: 6,
            airAttack: 6,
            bonus: '+'+ 4 +','+'+' + 10 +'Armored',

            type:' Armored, Mechanical',
            strong:' Corruptor, Battlecruiser, Tempest',
            weak:' Viking, Phoenix, Mutalisk'
        },

        {
            id: 17,
            name: "Tempest",
            image: Img_Tempest,
            supply: 5,
            minerals: 250,
            gas: 175,
            health: 200,
            shield: 100,
            groundAttack: 40,
            airAttack: 30,
            bonus: '+'+ 22 + 'Massive',

            type:' Armored, Massive, Mechanical',
            strong:' Liberator, BroodLord, Colossus',
            weak:' Viking, Corruptor, Void Ray'
        },

        {
            id: 18,
            name: "Carrier",
            image: Img_Carrier,
            supply: 6,
            minerals: 350,
            gas: 250,
            health: 300,
            shield: 150,
            groundAttack: 5,
            airAttack: 5,
            bonus: 0,

            type:' Armored, Massive, Mechanical',
            strong:' Thor, Mutalisk, Phoenix',
            weak:' Viking, Corruptor, Tempest'
        },

        {
            id: 19,
            name: "Mothership",
            image: Img_Mothership,
            supply: 8,
            minerals: 400,
            gas: 400,
            health: 350,
            shield: 350,
            groundAttack: 6,
            airAttack: 6,
            bonus: 1,

            type:' Armored, Massive, Psionic, Mechanical, Heroic',
            strong:' -',
            weak:' Viking, Corruptor, Void Ray'
        }
    ]
    



export {
    Protoss,
}
