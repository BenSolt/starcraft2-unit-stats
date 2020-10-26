import Img_Larva from "../images/Icon_Zerg_Larva.jpg";
import Img_Drone from "../images/Icon_Zerg_Drone.jpg";
import Img_Queen from "../images/Icon_Zerg_Queen.jpg";
import Img_Zergling from "../images/Icon_Zerg_Zergling.jpg";
import Img_Baneling from "../images/Icon_Zerg_Baneling.jpg";
import Img_Roach from "../images/Icon_Zerg_Roach.jpg";
import Img_Ravager from "../images/Icon_Zerg_Ravager.jpg";
import Img_Hydralisk from "../images/Icon_Zerg_Hydralisk.jpg";
import Img_Lurker from "../images/Icon_Zerg_Lurker.jpg";
import Img_Infestor from "../images/Icon_Zerg_Infestor.jpg";
import Img_SwarmHost from "../images/Icon_Zerg_Swarm_Host.jpg";
// import Img_Locust from "../images/Icon_Zerg_Locust.jpg";
import Img_Ultralisk from "../images/Icon_Zerg_Ultralisk.jpg";
import Img_Overlord from "../images/Icon_Zerg_Overlord.jpg";
import Img_Overseer from "../images/Icon_Zerg_Overseer.jpg";
import Img_Mutalisk from "../images/Icon_Zerg_Mutalisk.jpg";
import Img_Corruptor from "../images/Icon_Zerg_Corruptor.jpg";
import Img_Viper from "../images/Icon_Zerg_Viper.jpg";
import Img_BroodLord from "../images/Icon_Zerg_Brood_Lord.jpg";
import Img_SpineCrawler from "../images/Icon_Zerg_Spine_Crawler.jpg";
import Img_SporeCrawler from "../images/Icon_Zerg_Spore_Crawler.jpg";

const Zerg = [

    {
        id: 1,
        name: "Larva",
        image: Img_Larva,
        supply: 0,
        minerals: 0,
        gas: 0,
        health: 25,
        groundAttack: 0,
        airAttack: 0,
        bonus: 0
    },

    {
        id: 2,
        name: "Drone",
        image: Img_Drone,
        supply: 1,
        minerals: 50,
        gas: 0,
        health: 40,
        groundAttack: 5,
        airAttack: 0,
        bonus: 0
    },

    {
        id: 3,
        name: "Queen",
        image: Img_Queen,
        supply: 2,
        minerals: 150,
        gas: 0,
        health: 175,
        groundAttack: 4,
        airAttack: 9,
        bonus: 0
    },

    {
        id: 4,
        name: "Zergling",
        image: Img_Zergling,
        supply: 0.5,
        minerals: 125,
        gas: 50,
        health: 35,
        groundAttack: 5,
        airAttack: 0,
        bonus: '+' + 5 + ' Armored'
    },

    {
        id: 5,
        name: "Baneling",
        image: Img_Baneling,
        supply: 0.5,
        minerals: 25,
        gas: 25,
        health: 30,
        groundAttack: 18,
        airAttack: 0,
        bonus: '+' + 17 + ' Light' + 60 + ' structure'
    },

    {
        id: 6,
        name: "Roach",
        image: Img_Roach,
        supply: 2,
        minerals: 75,
        gas: 25,
        health: 145,
        groundAttack: 16,
        airAttack: 0,
        bonus: 0
    },

    {
        id: 7,
        name: "Ravager",
        image: Img_Ravager,
        supply: 3,
        minerals: 25,
        gas: 75,
        health: 120,
        groundAttack: 16,
        airAttack: 0,
        bonus: 0
    },

    {
        id: 8,
        name: "Hydralisk",
        image: Img_Hydralisk,
        supply: 2,
        minerals: 100,
        gas: 50,
        health: 90,
        groundAttack: 12,
        airAttack: 12,
        bonus: 0
    },

    {
        id: 9,
        name: "Lurker",
        image: Img_Lurker,
        supply: 3,
        minerals: 50,
        gas: 100,
        health: 200,
        groundAttack: 20,
        airAttack: 0,
        bonus: '+'+ 10 + 'Armored'
    },

    {
        id: 10,
        name: "Infestor",
        image: Img_Infestor,
        supply: 2,
        minerals: 100,
        gas: 150,
        health: 90,
        groundAttack: 0,
        airAttack: 0,
        bonus: 0
    },

    {
        id: 11,
        name: "Swarm Host",
        image: Img_SwarmHost,
        supply: 3,
        minerals: 100,
        gas: 75,
        health: 160,
        groundAttack: 'Locust: '+ 10,
        airAttack: 0,
        bonus: 0
    },

    // {
    //     id: 12,
    //     name: "Locust",
    //     image: Img_Locust,
    //     supply: 0,
    //     minerals: 0,
    //     gas: 0,
    //     health: 50,
    //     groundAttack: 10,
    //     airAttack: 0,
    //     bonus: 0
    // },

    {
        id: 13,
        name: "Ultralisk",
        image: Img_Ultralisk,
        supply: 6,
        minerals: 300,
        gas: 200,
        health: 500,
        groundAttack: 35,
        airAttack: 0,
        bonus: 1
    },

    {
        id: 14,
        name: "Overlord",
        image: Img_Overlord,
        supply: 0,
        minerals: 100,
        gas: 0,
        health: 200,
        groundAttack: 0,
        airAttack: 0,
        bonus: 0
    },

    {
        id: 15,
        name: "Overseer",
        image: Img_Overseer,
        supply: 0,
        minerals: 50,
        gas: 50,
        health: 200,
        groundAttack: 0,
        airAttack: 0,
        bonus: 0
    },

    {
        id: 16,
        name: "Mutalisk",
        image: Img_Mutalisk,
        supply: 2,
        minerals: 100,
        gas: 100,
        health: 120,
        groundAttack: 9,
        airAttack: 9,
        bonus: 0
    },

    {
        id: 17,
        name: "Corruptor",
        image: Img_Corruptor,
        supply: 2,
        minerals: 150,
        gas: 100,
        health: 200,
        groundAttack: 0,
        airAttack: 14,
        bonus: '+'+ 6 + 'Massive'
    },

    {
        id: 18,
        name: "Viper",
        image: Img_Viper,
        supply: 3,
        minerals: 100,
        gas: 200,
        health: 150,
        groundAttack: 0,
        airAttack: 0,
        bonus: 0
    },

    {
        id: 19,
        name: "Brood Lord",
        image: Img_BroodLord,
        supply: 4,
        minerals: 150,
        gas: 150,
        health: 225,
        groundAttack: 20,
        airAttack: 0,
        bonus: 0
    },

    {
        id: 20,
        name: "Spine Crawler",
        image: Img_SpineCrawler,
        supply: 0,
        minerals: 100,
        gas: 0,
        health: 300,
        groundAttack: 25,
        airAttack: 0,
        bonus: '+'+ 5 + 'Armored'
    },

    {
        id: 21,
        name: "Spore Crawler",
        image: Img_SporeCrawler,
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