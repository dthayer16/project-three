const router = require("express").Router();
const { requireAuth, requireSignin, tokenizer } = require("../auth"); 
const db = require("../../models");
// ######## GET Routes ########
router.get("/info", requireAuth, function(req, res) {
    console.log("info route hit")
  db.User.findById(req.user).then(dbUser => res.json(dbUser));
});
// ######## POST Routes ########
router.post("/signin", requireSignin, function(req, res) {
    console.log("Signin route hit")
  res.json({ token: tokenizer(req.user), email: req.user.email });
});
router.post("/signup", function(req, res) {
  console.log("Signup route hit")
  const { email, password } = req.body;
  console.log(req.body);
  if (!email || !password) {
    res.status(422).send({ error: "You must provide an email and password" });
  }
  db.User.findOne({ email })
    .then(dbuser => {
      // if the user exists return an error
      if (dbuser) {
        return res.status(422).send({ error: "Email already in use" });
      }
      //create new user object
      const user = new db.User({ email, password });
      // save the user
      user.save().then(user => {
        // respond with the success if the user existed
        res.json({ token: tokenizer(user), user: { email: user.email } });
      });
    })
    .catch(err => {
      return next(err);
    });
});
module.exports = router;