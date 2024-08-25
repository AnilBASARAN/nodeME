import express from "express";
import path from "path";
import router from "./router";  // Import the router

const app = express();
const port = 5002;

app.use(express.static("static"));

// Correctly reference the 'index.html' in 'src/pages'
app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "pages/index.html"));
});

// Tell your app to use the router
app.use("/api", router); // This will add '/api' prefix to your routes

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

export default app;
