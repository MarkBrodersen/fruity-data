import { ObjectId } from "mongodb";
import Fruit from "../../models/fruit.model.js";
import dotenv from "dotenv";
dotenv.config();

function URLBuilder(id, resource) {
  return process.env.HOST_ADDRESS + `/api/v1/${resource}/${id}`;
}

export default async function getAllItems(request, response) {
  const id = request.params.id;
  const limit = parseInt(request.query.limit || 20);
  const skip = parseInt(request.query.skip || 0);

  const query = id ? { _id: ObjectId(id) } : {};
  const result = await Fruit.find(query).limit(limit).skip(skip);
  const length = await Fruit.countDocuments();

  const nextLink =
    skip + limit >= length
      ? null
      : process.env.HOST_ADDRESS +
        `/api/v1/fruit?limit=${limit}&skip=${skip + limit}`;
  const previousLink =
    skip === 0
      ? null
      : process.env.HOST_ADDRESS +
        `/api/v1/fruit?limit=${limit}&skip=${
          skip - limit < 0 ? 0 : skip - limit
        }`;

  const presentation = {
    count: length,
    next: nextLink,
    previous: previousLink,
    results: result.map((item) => ({
      ...item._doc,
      url: URLBuilder(item._id, "fruit"),
    })),
  };

  response.json(id ? result[0] : presentation);
  response.end();
}
