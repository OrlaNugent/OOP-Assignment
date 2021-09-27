class Comment {
    constructor (commentDate, commentAuthor, commentText) {
        this.commentDate = commentDate,
        this.commentAuthor = commentAuthor,
        this.commentText= commentText;
    
    }
}

let comment1 = new Comment("24/09/21", "John Smith", "Comment Text")
console.log( comment1);