var friendData = require("../data/friends");

module.exports = function(app) {

  app.get("/api/friends", function(req, res) {
    res.json(friendData);
  });

  app.post("/api/friends", function(req, res) {
    // add the part where you find the difference
    // use the reduce method 
    //  store the difference in a friend variable and then display the friend
      friendData.push(req.body);
      res.json(friend);
  });


  app.post("/api/clear", function(req, res) {
    friendData.length = [];

    res.json({ ok: true });
  });
};
