import { model, Schema } from "mongoose";

const ImageSchema = {
  originalname: String,
  mimetype: String,
  filename: String,
  path: String,
  size: Number,
};

const FruitSchema = new Schema({
  name: String,
  description: String,
  price: {
    type: Number,
    required: [true, "You must provide a price"],
  },
  image: ImageSchema,
});

const Fruit = model("Fruit", FruitSchema);

export default Fruit;
