const fs = require("fs")
let movieArr

const pullMoviesData = () => {
    try{
        movieArr = JSON.parse(fs.readFileSync("./storage.json"))
    } catch{
        movieArr = []
    }
}

class Movie {
    constructor(title, actor = "Not specified"){
        this.title = title;
        this.actor = actor;
    }

    add(){
        movieArr.push(this);
        console.log(movieArr[movieArr.length - 1]);
    }

    save() {
        fs.writeFileSync("./storage.json", JSON.stringify(movieArr))
    }
}

module.exports = {Movie, pullMoviesData}
