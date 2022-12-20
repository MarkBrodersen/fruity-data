import Fruit from "../../models/fruit.model.js";

export default async function deleteItem(request, response) {
  try {
    Fruit.findOneAndDelete(request.params.id);
    response.status(200);
    response.end();
  } catch (error) {
    if (error._message) {
      response.status(400);
      response.end();
      return;
    }
    console.log("update fruit error", error);
    response.status(500);
    response.end();
  }
}
