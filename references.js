var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/blog_demo_2");

var postSchema = new mongoose.Schema({
    title: String,
    content: String
});

var Post = mongoose.model("Post", postSchema);

var userSchema = new mongoose.Schema({
    email: String,
    name: String,
    posts: [
        {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post"
        }
    ]
});

var User = mongoose.model("User", userSchema);

// User.create({
//     email: 'bob@gmail.com',
//     name: 'Bob'
// });

Post.create({
    title: 'Exams 3',
    content: 'Examover!!'
},function (err,post) {
    if(err){
        console.log(err);
    } else {
        //console.log(post);
        User.findOne({email:'bob@gmail.com'},function (err,foundUser) {
            if(err){
                console.log(err);
            } else{
                foundUser.posts.push(post);
                foundUser.save(function (err,data) {
                    if(err){
                        console.log(err);
                    } else {
                        console.log(foundUser);
                    }
                });
            }
        });
    }
});