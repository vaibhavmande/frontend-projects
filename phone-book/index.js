const faker = require("faker");
const QUANTITY = 10000;

module.exports = () => {
  const data = {
    users: [],
  };

  for (let i = 1; i <= QUANTITY; i++) {
    const name = faker.name.firstName() + " " + faker.name.lastName();
    const phone = faker.phone.phoneNumber();
    const city = faker.address.city();
    const zip = faker.address.zipCode();

    data.users.push({
      id: i,
      name,
      phone,
      city,
      zip,
    });
  }

  return data;
};
