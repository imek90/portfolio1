import express from "express";
import ejs from "ejs";
// import bodyParser from "body-parser";

const app = express();
// app.use(express.json())
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({extended:true}));
// app.use(bodyParser.urlencoded({ extended: true }));
let posts = [];

app.get("/", (req, res) =>{
    res.render("index.ejs");
});
// Ejs is a templating engine in Node js

app.get("/create-post", (req, res) =>{
    res.render("create-post.ejs");
});

app.post("/delete-post", (req, res) =>{
    const ID = req.body.ID;
    console.log({ID});
    posts = posts.filter((post) => {
        return post.ID != ID;
    });
    res.render("index.ejs", {posts:posts});
    // delete the post from posts array where ID matches
});

console.log(posts)

app.post("/create-post", (req, res) =>{
    const {title, post} = req.body;
    let newPost =  {postTitle: title, postBody: post, ID: Math.random()};
    console.log(newPost);
    posts.unshift(newPost);
    console.log(req.body);
    // res.render("create-post.ejs");
    res.render("index.ejs", {posts:posts});
});

// when we have to server ejs , we have to make it a GET request
//req.body
//req.query
//req.params
//what is spread operator in JS
app.get("/edit-post", (req, res) =>{

    const {ID} = req.query;
    const postToEdit  = posts.find((post)=>{
        return post.ID == ID;
    }); 
    console.log({ID});
    console.log(postToEdit);
    res.render("edit-post.ejs", {post: {...postToEdit} });
});
app.post("/edit-post", (req, res) =>{
    console.log("I have made a post");
    console.log(req.body);
    // HERE WE RECEIVED THE NEWLY EDITTED POST WITHIN REQUEST BODY
    const edittedPost = req.body;

    // HERE WE HAVE TO DELETE OR FILTER OUT THE OLD POST WITH HELP OF ID
    posts = posts.filter((post) => {
        return edittedPost.ID != post.ID;
    });

    // HERE WE ADD THE NEWLY EDITTED POST AGAIN INTO THE POSTS ARRAY
    posts.unshift(edittedPost);
    console.log(posts);
    
    res.render("index.ejs", {posts:posts});
});

// app.delete("/create-post", (req, res) =>{
//     delete req.body;
// })

app.listen(3000, ()=> console.log("server is listening on port 3000"));