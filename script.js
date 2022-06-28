let dadosComedy = [
    {
        title: "The Do Over",
        director: "Steven Brill",
        year: 2016
    },
    {
        title: "SuperBad",
        director: "Greg Mottola",
        year: 2007
    },
    {
        title: "Flushed Away",
        director: ["David Bowers", "Sam Fell"],
        year: 2006
    }
]

let dadosAction = [
    {
        title: "Red Notice",
        director: "Rawson Marshall Thurber",
        year: 2021
    },
    {
        title: "Uncharted",
        director: "Ruben Fleischer",
        year: 2022
    },
    {
        title: "Eternals",
        director: "Chloé Zhao",
        year: 2021
    }
]

let dadosFantasy = [
    {
        title: "Fantastic Beasts: The Crimes of Grindelwald",
        director: "David Yates",
        year: 2018
    },
    {
        title: "Aquaman",
        director: "James Wan",
        year: 2018
    },
    {
        title: "Mulan",
        director: "Niki Caro",
        year: 2020
    }
]

if(dadosFantasy[2].title === "Mulan"){
    console.log(dadosComedy[0])
    console.log(dadosAction[1])
    console.log(dadosFantasy[2])
}else{
    console.log("Not this time")
}