import express from "express";

import item from "./routes/items/index.js";
import users from "./routes/users/index.js";
import auth from "./routes/auth/index.js";
import "./database.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
item(app);
users(app);
auth(app);

app.listen(1337, function () {
  console.log("The App is listening on port 1337");
});
