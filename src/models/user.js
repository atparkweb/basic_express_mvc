const mockData = [{ id: 1623305681502, name: "Andy", age: 65 }];

const userModel = {
  // cb: Callback handler function with 2 params (error, data)
  getUser(id, cb) {
    console.log("model: getUser");
    const result = mockData.filter(user => user.id === id);
    cb(null, result);
  },

  addUser(newUser, cb) {
    console.log("model: addUser", newUser);
    // newUser object should be validated here and saved to DB
    mockData.push({ id: Date.now(), ...newUser });
    cb(null, mockData);
  },

  removeUser(id, cb) {
    console.log("model: removeUser");
    mockData = mockData.filter(d => d.id !== id);
    db.delete();
    cb(null, mockData);
  },
};

module.exports = userModel;
