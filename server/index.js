const express = require('express');
const github = require('../helpers/github.js');
let app = express();
const db = require('../database');
app.use(express.static(__dirname + '/../client/dist'));
app.use(express.json());


app.post('/repos', function (req, res) {
  // TODO - your code here!
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database
  const { username } = req.body;
  // console.log(username);
  github.getReposByUsername(username, (err, response) => {
    if (err) {
      res.status(404).send(err);
    } else {
      db.save(username);
      res.status(201).send(response);
    }
  });
});

// app.get('/repos', function (req, res) {
//   // TODO - your code here!
//   // This route should send back the top 25 repos
// });

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

