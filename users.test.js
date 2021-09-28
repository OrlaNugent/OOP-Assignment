/// const Users = require("./users"); 

///test ("Post is created by user", () => {
  /// expect (Users).toMatch("Claire"); 
///}); 


test ('Use should be Claire post should be I love plants', () => {
    expect(functions.createsPost()).toBe({ username:'Claire', writesPost:'I love plants'});
});