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

    return {
      owner: userID,
      blogID: newBlog._id,
      title,
      text,
      createdAt: new Date(),
    };
    return;
  },

  async updateBlog({ id, body }) {
    let blog = await blogs.findOne(
      { _id: id },
      { $set: { title: body.title, text: body.text } }
    );
    blog = await blogs.update(blog, {
      $set: { title: body.title, text: body.text },
    });
    return blog;
  },

  async deleteBlog(id) {
    return await blogs.remove({ _id: id });
  },
};
