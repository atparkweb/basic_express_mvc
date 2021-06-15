const userModel = require("../models/user");

const userController = {
  index(req, res) {
    console.log("controller: home");
    res.send("welcome home");
  },
  view(req, res) {
    console.log("controller: get");
    res.send("user " + req.params.id + " deatils...");
  },
  delete(req, res) {
    console.log("controller: delete");
    userModel.removeUser(req.params.id, (error, data) => {
      if (error) {
        res.status(500).send("Something went wrong");
      } else {
        res.status(200).send(data);
      }
    });
  },
  create(req, res) {
    console.log("controller: create");
    userModel.addUser(req.body, (error, data) => {
      if (error) {
        res.status(500).send(error);
      } else {
        res.status(200).send(data);
      }
    });
  },
};

module.exports = userController;
