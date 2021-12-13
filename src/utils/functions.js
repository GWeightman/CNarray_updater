const movieArr = []



class Movie {
    constructor(title, actor = "Not specified"){
        this.title = title;
        this.actor = actor;
    }

    add(){
        movieArr.push(this);
        console.log(movieArr[movieArr.length - 1]);
    }
}

const complete = () => {
    movieArr.map((film) =>{
        console.log(film)
    })
}

module.exports = {complete, Movie}
