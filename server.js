const express = require("express");
const PORT = 8080;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set(`views`, `./views`);
app.set("views", __dirname + "/views");

app.get(`/`, (req, res, next) => {
  let user = [
    {
      name: `kyfa`,
      edad: 22,
    },
    {
      name: `oda`,
      edad: 55,
    },
  ];
  res.render(`pages/index.ejs`, { user: user });
});

app.listen(PORT, () => {
  console.log(`Sv ${PORT}`);
});
