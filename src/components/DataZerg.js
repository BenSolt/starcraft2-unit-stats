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

const Zerg = [

    {
        name: "Larva",
        image: Img_Probe,
        supply: 0,
        minerals: 0,
        gas: 0,
        health: 25,
        groundAttack: 0,
        airAttack: 0,
        bonus: 0
    },

    {
        name: "Drone",
        image: Img_Zealot,
        supply: 1,
        minerals: 50,
        gas: 0,
        health: 40,
        groundAttack: 5,
        airAttack: 0,
        bonus: 0
    },

    {
        name: "Queen",
        image: Img_Sentry,
        supply: 2,
        minerals: 150,
        gas: 0,
        health: 175,
        groundAttack: 4,
        airAttack: 9,
        bonus: 0
    },

    {
        name: "Zergling",
        image: Img_Stalker,
        supply: 0.5,
        minerals: 125,
        gas: 50,
        health: 35,
        groundAttack: 5,
        airAttack: 0,
        bonus: '+' + 5 + ' Armored'
    },

    {
        name: "Baneling",
        image: Img_Adept,
        supply: 0.5,
        minerals: 25,
        gas: 25,
        health: 30,
        groundAttack: 18,
        airAttack: 0,
        bonus: '+' + 17 + ' Light' + 60 + ' structure'
    },

    {
        name: "Roach",
        image: Img_HighTemplar,
        supply: 2,
        minerals: 75,
        gas: 25,
        health: 145,
        groundAttack: 16,
        airAttack: 0,
        bonus: 0
    },

    {
        name: "Ravager",
        image: Img_DarkTemplar,
        supply: 3,
        minerals: 25,
        gas: 75,
        health: 120,
        groundAttack: 16,
        airAttack: 0,
        bonus: 0
    },

    {
        name: "Hydralisk",
        image: Img_Archon,
        supply: 2,
        minerals: 100,
        gas: 50,
        health: 90,
        groundAttack: 12,
        airAttack: 12,
        bonus: 0
    },

    {
        name: "Lurker",
        image: Img_Observer,
        supply: 3,
        minerals: 50,
        gas: 100,
        health: 200,
        groundAttack: 20,
        airAttack: 0,
        bonus: '+'+ 10 + 'Armored'
    },

    {
        name: "Infestor",
        image: Img_Immortal,
        supply: 2,
        minerals: 100,
        gas: 150,
        health: 90,
        groundAttack: 0,
        airAttack: 0,
        bonus: 0
    },

    {
        name: "Swarm Host",
        image: Img_WarpPrism,
        supply: 3,
        minerals: 100,
        gas: 75,
        health: 160,
        groundAttack: 0,
        airAttack: 0,
        bonus: 0
    },

    {
        name: "Locust",
        image: Img_WarpPrism,
        supply: 0,
        minerals: 0,
        gas: 0,
        health: 50,
        groundAttack: 10,
        airAttack: 0,
        bonus: 0
    },

    {
        name: "Ultralisk",
        image: Img_Colossus,
        supply: 6,
        minerals: 300,
        gas: 200,
        health: 500,
        groundAttack: 35,
        airAttack: 0,
        bonus: 1
    },

    {
        name: "Overlord",
        image: Img_Disruptor,
        supply: 0,
        minerals: 100,
        gas: 0,
        health: 200,
        groundAttack: 0,
        airAttack: 0,
        bonus: 0
    },

    {
        name: "Overseer",
        image: Img_Phoenix,
        supply: 0,
        minerals: 50,
        gas: 50,
        health: 200,
        groundAttack: 0,
        airAttack: 0,
        bonus: 0
    },

    {
        name: "Mutalisk",
        image: Img_Oracle,
        supply: 2,
        minerals: 100,
        gas: 100,
        health: 120,
        groundAttack: 9,
        airAttack: 9,
        bonus: 0
    },

    {
        name: "Corruptor",
        image: Img_VoidRay,
        supply: 2,
        minerals: 150,
        gas: 100,
        health: 200,
        groundAttack: 0,
        airAttack: 14,
        bonus: '+'+ 6 + 'Massive'
    },

    {
        name: "Viper",
        image: Img_Tempest,
        supply: 3,
        minerals: 100,
        gas: 200,
        health: 150,
        groundAttack: 0,
        airAttack: 0,
        bonus: 0
    },

    {
        name: "Brood Lord",
        image: Img_Carrier,
        supply: 4,
        minerals: 150,
        gas: 150,
        health: 225,
        groundAttack: 20,
        airAttack: 0,
        bonus: 0
    },

    {
        name: "Spine Crawler",
        image: Img_Mothership,
        supply: 0,
        minerals: 100,
        gas: 0,
        health: 300,
        groundAttack: 25,
        airAttack: 0,
        bonus: '+'+ 5 + 'Armored'
    },

    {
        name: "Spore Crawler",
        image: Img_Mothership,
        supply: 0,
        minerals: 75,
        gas: 0,
        health: 400,
        groundAttack: 0,
        airAttack: 15,
        bonus: '+'+ 15 + 'Biological'
    }
]

export {
Zerg
}