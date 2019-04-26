const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use("/api", require("./routes/api"));
app.get("/", (req, res) => {
  return res.json({ message: "Hey There!" });
});

app.listen(port, () => console.log(`Server at ${port}`));

module.exports = app;
