const Post = require("../../Model/Post");


module.exports = {
  Query: {
    getPosts: async () => {
      try {
        return await Post.find().exec();
      } catch (error) {
        throw new Error(error);
      }
    },
  },
};
