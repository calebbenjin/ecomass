import bcrypt from "bcryptjs"

const users = [
  {
    name: "Admin user",
    email: "admin@example.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true
  },
  {
    name: "James rollin",
    email: "james@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "John deo",
    email: "john@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Jane doe",
    email: "jane@example.com",
    password: bcrypt.hashSync("123456", 10),
  }
]


export default users