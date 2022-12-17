import { faker } from "@faker-js/faker";

export default function handler(req, res) {
  res.status(200).json({
    message: "You Logged-In successfully",
    token: faker.internet.ip(),
  });
}
