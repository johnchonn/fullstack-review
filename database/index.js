const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

const repoSchema = mongoose.Schema({
  ownerlogin: String,
  ownerid: Number,
  full_name: String,
  git_url: String,
  repoid: Number,
  reponame: String,
  follwers_url: String,
  subscribers: String
});

let Repo = mongoose.model('Repo', repoSchema);




let save = (user) => {
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB
  let repo = new Repo({
    ownerlogin: user.ownerlogin,
    ownerid: user.ownerid,
    full_name: user.full_name,
    git_url: user.git_url,
    repoid: user.repoid,
    reponame: user.reponame,
    followers_url: user.followers_url,
    subscribers: user.subscribers
  }).save((err, data) => {
    if (err) {
      console.log(err);
    } else {
      console.log('sucess');
    }
  })


  console.log(user);
}

module.exports.save = save;