var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/blog_demo");

var postSchema = new mongoose.Schema({
    title: String,
    content: String
});

var Post = mongoose.model("Post", postSchema);

var userSchema = new mongoose.Schema({
    email: String,
    name: String,
    posts: [postSchema]
});

var User = mongoose.model("User", userSchema);

// var newUser= new User({
//     email: 'hermoine@gmail.com',
//     name: 'Hermoine Granger'
// });
//
//
// newUser.posts.push({
//     title: 'The 3rd unforgivable curse?',
//     content: 'Avada kedavara'
// });
// newUser.save(function (err,user) {
//     if(err){
//         console.log(err);
//     } else {
//         console.log(user);
//     }
// });

// newPost.save(function (err,Post) {
//     if(err){
//         console.log(err);
//     } else {
//         console.log(Post);
//     }
// });

User.findOne({name: 'Hermoine Granger'}, function (err, user) {
    if (err) {
        console.log(err);
    } else {
        console.log(user);
        user.posts.push({
            title: 'Where than bright light comes from?',
            content: 'Expecto Patronum!!'
        });
        user.save(function (err, user) {
            if (err) {
                console.log(err);
            } else {
                console.log(user);
            }
        });
    }
});
