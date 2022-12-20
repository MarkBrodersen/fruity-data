import authorization from "../../middlewares/auth.js";
import upload from "../../middlewares/upload.js";
import createUser from "./createUser.js";
import getAllUsers from "./getUser.js";
import updateUser from "./updateUser.js";

export default function users(app) {
  app
    .route("/api/v1/users/:id?")
    .get(getAllUsers)
    .all(authorization)
    .patch(upload.single("image"), updateUser)
    .post(upload.single("image"), createUser);
}
