import Fruit from "../../models/fruit.model.js";
export default async function createItem(request, response) {
  try {
    const document = {
      ...request.body,
      image: { ...request.file },
    };

    const fruit = new Fruit(document);

    await fruit.save();

    response.status(201);
    response.json(fruit);
    response.end();
  } catch (error) {
    if (error._message) {
      response.status(400);
      response.end();
      return;
    }
    console.log("create fruit error", error);
    response.status(500);
    response.end();
  }
}
