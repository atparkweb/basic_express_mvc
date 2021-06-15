const mockData = [{ id: 1623305681502, name: "Andy", age: 65 }];

const userModel = {
  // cb: Callback handler function with 2 params (error, data)
  getUser(id, cb) {
    console.log("model: getUser");
    try {
      const result = mockData.filter(user => user.id === id);
      cb(null, result);
    } catch (err) {
      cb(new Error("Unable to get user"), null);
    }
  },

  addUser(newUser, cb) {
    console.log("model: addUser", newUser);
    // newUser object should be validated here and saved to DB
    // using local mockData with push as a placeholder
    try {
      mockData.push({ id: Date.now(), ...newUser });
      cb(null, mockData);
    } catch (err) {
      cb(new Error("Unable to add user"), null);
    }
  },

  removeUser(id, cb) {
    console.log("model: removeUser");
    try {
      mockData = mockData.filter(d => d.id !== id);
      cb(null, mockData);
    } catch (err) {
      cb(new Error("Unable to remove user"), null);
    }
  },
};

module.exports = userModel;
