const inquirer = require('inquirer')
const {Movie, pullMoviesData} = require("./utils/functions.js")

let start = [
    {
        type: "confirm",
        name: "start",
        message: "Would you like to add to the list?" 
    }
]

let question = [
    {
        type: "input",
        name: "movie",
        message: "Enter a movie"
    },
    {
        type: "input",
        name: "actor",
        massage: "Enter an Actor"
    }
]

const app = async () => {
    let newbee = await inquirer.prompt(start)
    pullMoviesData()
    switch (newbee.start){
        case true:
            let response = await inquirer.prompt(question)
            const newMovie = new Movie(response.movie, response.actor)
            newMovie.add();
            newMovie.save()
            break;
        case false:
            return
        default:
            console.log("err")
    }
    app()
}

app()