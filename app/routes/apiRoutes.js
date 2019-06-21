var friendData = require("../data/friends");

module.exports = function(app) {

  app.get("/api/friends", function(req, res) {
    res.json(friendData);
  });

  app.post("/api/friends", function(req, res) {
      var defaultDifference = 10000;
      var friend = {};

      for(var i=0; i < req.body.scores.length; i++){
        req.body.scores[i] = Number(req.body.scores[i]);
    }

      friendData.forEach(element => {
          var num = element.scores.reduce((a,b) => a + b);

          if(Math.abs(num - req.body.scores.reduce((a,b) => a + b, 0)) < defaultDifference) {
              defaultDifference = Math.abs(num - req.body.scores.reduce((a,b) => a + b, 0));
              friend = element;
          }
      })

      friendData.push(req.body);
      res.json(friend);
  });


  app.post("/api/clear", function(req, res) {
    friendData.length = [];

    res.json({ ok: true });
  });
};
