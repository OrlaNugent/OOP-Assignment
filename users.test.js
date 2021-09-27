const Users = require("./users"); 

test ("User name is correct", () => {
    const user1 = new Users("Claire");
   expect (user1.username).toBe ("Claire"); 
});