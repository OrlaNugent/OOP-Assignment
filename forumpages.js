class Forum {
    constructor (title, ){
    this.title = title;
    }
}

console.log(Forum)

class Gardening extends Forum {
    constructor (plantType){
        this.plantType = plantType;
    }
}

console.log(Gardening)
class Macrame extends Forum {
    constructor (cord, knots){
        this.cord = cord;
        this.knots = knots; 
    }
}

console.log(Gardening)