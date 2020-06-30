const Nedb = require("nedb-promise");
const blogs = new Nedb({ filename: "./db/blogs.db", autoload: true });

module.exports = {
  async all() {
    return await blogs.find({});
  },
  async create({ title, text }) {
    if (title == "" || text == "") return;
    const blog = await blogs.insert({
      title,
      text,
      createdAt: new Date(),
    });

    return {
      id: blog._id,
      title,
      text,
      createdAt: new Date(),
    };
  },
};
