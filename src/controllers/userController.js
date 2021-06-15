const userModel = require("../models/user");

const userController = {
  index(req, res) {
    console.log("controller: home");
    // Logic for home view goes here
    // to get data, use a userModel method
    res.send("welcome home");
  },
  view(req, res) {
    console.log("controller: get");
    userModel.getUser(req.params.id, (error, data) => {
      if (error) {
        res.status(404).end("Not found");
      } else {
        res.status(200).send(data);
      }
    });
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
