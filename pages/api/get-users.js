import { faker } from "@faker-js/faker";

export default function handler(req, res) {
  let arr = [];
  let len = 40;
  for (let i = 0; i < len; i++) {
    arr.push({
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      gender: faker.name.sex(),
      avatar: faker.internet.avatar(),
      email: faker.internet.email(),
      number: faker.phone.number("+98 9# ### #####"),
    });
  }
  res.status(200).json({
    message: "Search was successfully",
    items: arr,
  });
}
