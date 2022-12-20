import createItem from "./createItem.js";
import upload from "../../middlewares/upload.js";
import authorization from "../../middlewares/auth.js";
import getAllItems from "./getAllItems.js";
import updateItem from "./updateItem.js";
import deleteItem from "./deleteItem.js";
export default function item(app) {
  app
    .route("/api/v1/item/:id?")
    .get(getAllItems)
    .delete(deleteItem)
    .all(authorization)
    .post(upload.single("image"), createItem)
    .patch(upload.single("image"), updateItem);
}
