const Nedb = require("nedb-promise");
const users = new Nedb({ filename: "./db/users.db", autoload: true });
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
require("dotenv").config();

module.exports = {
  async register({ name, email, password, repeatPassword }) {
    if (name == "" || email == "" || password == "" || repeatPassword == "")
      return;
    const user = await users.findOne({ email });
    if (user) return;
    if (password !== repeatPassword) return;
    const newUser = await users.insert({
      name,
      email,
      password: await bcrypt.hash(password, 10),
    });
    const token = jwt.sign(
      {
        userID: newUser._id,
        email,
      },
      process.env.SECRET
    );
    return {
      name,
      email,
      token,
    };
  },

  async verify({ email, password }) {
    if (email == "" || password == "") return;
    const user = await users.findOne({ email });
    if (!user) return;
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (passwordMatch) {
      const token = jwt.sign(
        {
          userID: user._id,
          email,
        },
        process.env.SECRET
      );
      return {
        name: user.name,
        email,
        token,
      };
    }
    return;
  },
};
