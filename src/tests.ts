import * as Gi from "react-icons/gi";
import * as Ci from "react-icons/ci";

import Ex1 from './img/Exercicios/Ex1.png'
import Ex2 from './img/Exercicios/Ex2.png'
import Ex3 from './img/Exercicios/Ex3.png'
import Ex4 from './img/Exercicios/Ex4.png'

export const exercicios = [
    {
        id: 1,
        img: Ex1,
        video: "https://www.youtube.com/embed/s1vf8LEPpDA",
        nome: "Rosca Direta",
        categoria: "Biceps",
        descricao: "A rosca direta com halteres é um exercício clássico para fortalecer os músculos dos braços, principalmente o bíceps braquial, com a vantagem de permitir maior independência e equilíbrio muscular entre os braços.",
        especificacao: {
            Equipamento: "Halteres",
            MúsculosPrincipaisTrabalhados: "Bíceps braquial, braquiorradial e braquial",
            TipoDeMovimento: "Flexão de cotovelo, com rotação neutra ou supinada (palma das mãos para cima)",
            Nível: "Iniciante a avançado",
            RepetiçõesSugeridas: "8 a 12 repetições por série",
            SériesSugeridas: "3 a 4 séries",
            Execução: [
                "Segure um halter em cada mão, com os braços estendidos ao lado do corpo.",
                "Mantenha os cotovelos próximos ao tronco e as palmas das mãos voltadas para frente.",
                "Flexione os cotovelos e levante os halteres até a altura dos ombros.",
                "Desça lentamente à posição inicial."
            ],
            DicasExecução: [
                "Evite balançar o corpo durante o movimento para garantir maior ativação muscular.",
                "Mantenha o controle total da subida e descida dos halteres."
            ],
        },
        beneficios: [
            "Fortalece e define os bíceps",
            "Melhora o equilíbrio muscular entre os braços",
            "Ajuda a desenvolver a força de preensão"
        ]
    },
    {
        id: 2,
        img: Ex2,
        video: "https://www.youtube.com/embed/86ZW7tmmLuU",
        nome: "Agachamento Livre",
        categoria: "Pernas",
        descricao: "O agachamento livre é um exercício fundamental para trabalhar a musculatura das pernas, com ênfase nos quadríceps, glúteos e isquiotibiais.",
        especificacao: {
            Equipamento: "Nenhum (peso corporal)",
            MúsculosPrincipaisTrabalhados: "Quadríceps, glúteos, isquiotibiais",
            TipoDeMovimento: "Flexão e extensão do joelho e quadril",
            Nível: "Intermediário a avançado",
            RepetiçõesSugeridas: "12 a 15 repetições por série",
            SériesSugeridas: "3 a 4 séries",
            Execução: [
                "Fique em pé com os pés afastados na largura dos ombros, com os braços estendidos à frente.",
                "Agache flexionando os joelhos e quadris até que as coxas fiquem paralelas ao chão, mantendo a postura reta."
            ],
            DicasExecução: "Evite que os joelhos ultrapassem a linha dos pés e mantenha o tronco ereto durante o movimento.",
        },
        beneficios: [
            "Fortalece as pernas e glúteos",
            "Melhora a mobilidade articular",
            "Ajuda a prevenir lesões nas pernas"
        ]
    },
    {
        id: 3,
        img: Ex3,
        video: "https://www.youtube.com/embed/SWVO95XzxKg",
        nome: "Supino com Halteres",
        categoria: "Com Peso",
        descricao: "O supino com halteres é um exercício eficaz para o desenvolvimento do peito, ombros e tríceps, permitindo maior amplitude de movimento em comparação ao supino com barra.",
        especificacao: {
            Equipamento: "Halteres, banco",
            MúsculosPrincipaisTrabalhados: "Peitoral maior, tríceps, deltoides anteriores",
            TipoDeMovimento: "Pressão de peito com flexão e extensão dos braços",
            Nível: "Intermediário a avançado",
            RepetiçõesSugeridas: "8 a 12 repetições por série",
            SériesSugeridas: "3 a 4 séries",
            Execução: [
                "Deite-se de costas no banco com um halter em cada mão.",
                "Abaixe os halteres até a altura do peito e, em seguida, empurre-os de volta para a posição inicial."
            ],
            DicasExecução: "Mantenha os pés no chão e os ombros estáveis durante o movimento.",
        },
        beneficios: [
            "Desenvolve a força e definição do peito",
            "Melhora a estabilidade do ombro",
            "Fortalece os tríceps"
        ]
    },
    {
        id: 4,
        img: Ex4,
        video: "https://www.youtube.com/embed/vDTvwdzFt30",
        nome: "Abdominal com Anilha",
        categoria: "Com Peso",
        descricao: "O abdominal com anilha é um exercício que intensifica o trabalho do core, especialmente os músculos abdominais, com o uso de um peso extra para aumentar a resistência.",
        especificacao: {
            Equipamento: "Anilha",
            MúsculosPrincipaisTrabalhados: "Reto abdominal, oblíquos",
            TipoDeMovimento: "Flexão de tronco",
            Nível: "Intermediário",
            RepetiçõesSugeridas: "12 a 20 repetições por série",
            SériesSugeridas: "3 a 4 séries",
            Execução: [
                "Segure a anilha com as mãos e deite-se no chão com os joelhos flexionados.",
                "Levante o tronco em direção aos joelhos e depois retorne à posição inicial."
            ],
            DicasExecução: "Mantenha a cabeça alinhada com o tronco e evite puxar o pescoço durante o movimento."
        },
        beneficios: [
            "Fortalece a musculatura abdominal",
            "Melhora a estabilidade do core",
            "Auxilia na definição abdominal"
        ]
    }
]


export const categorias = [
    {
        nome: "Biceps",
        icon: Gi.GiBiceps
    },
    {
        nome: "Pernas",
        icon: Gi.GiLeg
    },
    {
        nome: "Cardiaco",
        icon: Gi.GiHeartBeats
    },
    {
        nome: "Com Peso",
        icon: Ci.CiDumbbell
    },
    {
        nome: "Aeróbicos",
        icon: Gi.GiRunningShoe
    },
]
