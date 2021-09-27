/// Users - have usernames and can write posts 

class Users {
    constructor (username) {
        this.username = username; 
    }
}
let user1 = new Users ("Claire")

console.log(user1)

class Posts extends Users {
    constructor (title, date, text) {
        this.title = title,
        this.date = date,
        this.text = text; 
    }
}
let post1 = new Posts ("Gardening", "27/09/21","I love plants")
console.log(post1);
module.export = Users; 


