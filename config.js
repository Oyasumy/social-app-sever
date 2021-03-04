require('dotenv').config()

module.exports = {
  MONGOOSE_CONNECT: `mongodb+srv://oyasumy:${process.env.PASS_MONGODB}@cluster0.zk99n.mongodb.net/social-app?retryWrites=true&w=majority`,
  SECRET_KEY:process.env.SECRET_KEY
};
