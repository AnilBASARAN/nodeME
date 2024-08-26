import express from "express";
import path from "path";
import router from "./router";  // Import the router
import morgan from 'morgan'
import { protect } from "./modules/auth";
import { createNewUser, signin } from "./handlers/user";

const app = express();
const port = 5002;

app.use(express.static("static"));
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended:true}))

// our custom middleware 
app.use((req,res,next)=>{
  req.ssh_secret = "doggy"
  next()
})
// hey
// Correctly reference the 'index.html' in 'src/pages'
app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "pages/index.html"));
});

// Tell your app to use the router
app.use("/api",protect,router); // This will add '/api' prefix to your routes
// if we put these 2 before the protect, it will ask are you signed in before even you gotta chance to sign in so
// we put them in a different route, without /api so they wouldnt go under that umbrella
app.post('/user',createNewUser)
app.post('/signin',signin)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

export default app;
