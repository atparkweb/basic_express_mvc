const express = require("express");
const userRouter = require("./routes/user");

const app = express();
app.use(express.json());
app.use("/user", userRouter);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log("Server started and listening on PORT: " + port);
});
