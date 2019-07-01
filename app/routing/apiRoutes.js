
const friends = require("../data/friends");

module.exports = (app) => {

  app.get("/api/friends", (req, res) => {
    res.json(friends);
  });



  app.post("/api/clear", (req, res) => {
    friendsArr.length = 0;

    res.json({ ok: true });
  });
};
