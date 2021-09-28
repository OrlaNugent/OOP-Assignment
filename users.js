class Users {
    constructor (username, post) {
        this.username = username; 
        this.post = post;
    }
createsPost() {
    const post = {username:'Claire'}
    post ['writesPost'] = 'I love plants';
    return post;
}
}

let user1 = new Users ("Claire","Writes a post")

console.log(user1)


module.export = Users; 


