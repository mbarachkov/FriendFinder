
const friends = require("../data/friends.js");

module.exports = (app) => {

  app.get("/api/friends", (req, res) => {
    res.json(friends);
  });

  app.post("/api/friends", function (req, res) {
    const match = {
      name: "",
      photo: "",
      pointDiff: 1000
    }
    var userData = req.body;
    var userScores = userData.scores;
    var totalDiff = 0;
    for (var i = 0; i < friends.length - 1; i++) {
      console.log(friends[i].name)
      totalDiff = 0;
      for (var x = 0; x < 10; x++){
        totalDiff += Math.abs(parseInt(userScores[x]) - parseInt(friends[i].scores[x]));
        if (totalDiff <= match.pointDiff){
          match.name = friends[i].name;
          match.photo = friends[i].photo;
          match.pointDiff = totalDiff;
        }
      }
    }
    friends.push(userData);
    res.json(match);
  });


  app.post("/api/clear", (req, res) => {
    friendsArr.length = 0;

    res.json({ ok: true });
  });
};
