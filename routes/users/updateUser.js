import { unlink } from "node:fs/promises";
import User from "../../models/user.model.js";

export default async function updateUser(request, response) {
  try {
    let document = {};

    if (!request.file) {
      document = { ...request.body };
    } else {
      document = {
        ...request.body,
        image: { ...request.file },
      };
      const oldResult = await User.findById(request.params.id);
      await unlink(oldResult.image.path);
    }

    const result = await User.findByIdAndUpdate(request.params.id, document, {
      returnOriginal: false,
    });

    response.status(200);
    response.json(result);
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
