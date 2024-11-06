import * as Gi from "react-icons/gi";
import * as Ci from "react-icons/ci";

import Ex1 from './img/Exercicios/Ex1.png'
import Ex2 from './img/Exercicios/Ex2.png'
import Ex3 from './img/Exercicios/Ex3.png'
import Ex4 from './img/Exercicios/Ex4.png'

export const exercicios = [
    {
        nome:"Rosca Direta",
        img:Ex1
    },
    {
        nome:"Agachamento Livre",
        img:Ex2
    },
    {
        nome:"Supino com Halteres",
        img:Ex3
    },
    {
        nome:"Abdominal com Anilha",
        img:Ex4
    }
]

export const categorias = [
    {
        nome:"Biceps",
        icon: Gi.GiBiceps
    },
    {
        nome:"Pernas",
        icon: Gi.GiLeg
    },
    {
        nome:"Cardiaco",
        icon: Gi.GiHeartBeats
    },
    {
        nome:"Com Peso",
        icon: Ci.CiDumbbell
    },
    {
        nome:"Aeróbicos",
        icon: Gi.GiRunningShoe
    },
]
