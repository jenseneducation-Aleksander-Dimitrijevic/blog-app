const Nedb = require("nedb-promise");
const blogs = new Nedb({ filename: "./db/blogs.db", autoload: true });

module.exports = {
  async all() {
    return await blogs.find({});
  },
  async getUserBlogs(userID) {
    return await blogs.find({ owner: userID });
  },
  async create(input, userID) {
    const { title, text } = input;
    if (title == "" || text == "") return;
    const newBlog = await blogs.insert({
      owner: userID,
      title,
      text,
      createdAt: new Date(),
    });

    if (newBlog._id === userID) {
      return {
        owner: userID,
        title,
        text,
        createdAt: new Date(),
      };
    }
    return;
  },
};
