import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
const listItem = ["Tidy my room", "Do homework", "Go running"];
// Define a route to render the form

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index.ejs", { list: listItem });
});

// Define a route to handle form submission
app.post("/submit", (req, res) => {
  if (req.body.todo) {
    listItem.unshift(req.body.todo);
  }
  res.redirect("/");
});

app.post("/delete", (req, res) => {
  const { index } = req.body;
  if (index !== undefined) {
    listItem.splice(index, 1);
  }
  res.redirect("/");
});

app.listen(port, () => {
  console.log(`Server is listening on http://localhost:${port}`);
});
