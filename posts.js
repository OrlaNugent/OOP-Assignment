/// Posts include a title, a date, an author and text 
const Users = require("./users"); 

class Posts extends Users {
    constructor (title, date, text) {
        this.title = title,
        this.date = date,
        this.text = text; 
    }
}
let post1 = new Posts ("Gardening", "27/09/21","I love plants")
console.log(post1);