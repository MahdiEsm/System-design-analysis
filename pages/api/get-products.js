import { faker } from "@faker-js/faker";

export default function handler(req, res) {
  let arr = [];
  let len = 40;
  for (let i = 0; i < len; i++) {
    arr.push({
      product: faker.commerce.product(),
      name: faker.commerce.productName(),
      price: faker.commerce.price(100, 200, 0, "$"),
      desc: faker.commerce.productDescription(),
      color: faker.color.human(),
    });
  }
  res.status(200).json({
    message: "Search was successfully",
    items: arr,
  });
}
