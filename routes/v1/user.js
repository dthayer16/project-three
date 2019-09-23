const router = require("express").Router();
const { requireAuth, requireSignin, tokenizer } = require("../auth");
const db = require("../../models");

router.get("/info", requireAuth, function (req, res) {

  db.User.findById(req.user)
    .then(dbUser => res.json(dbUser));

});

router.post("/signin", requireSignin, function (req, res) {

  res.json(
    {
      token: tokenizer(req.user),
      email: req.user.email
    });
});
router.post("/signup", function (req, res) {

  const { email, password } = req.body;

  if (!email || !password) {
    res.status(422)
      .send({ error: "You must provide an email and password" });
  }

  db.User.findOne({ email })
    .then(dbuser => {

      if (dbuser) {
        return res.status(422).send({ error: "Email already in use" });
      }

      const user = new db.User({ email, password });

      user.save()
        .then(user => {
          res.json({
            token: tokenizer(user),
            user: { email: user.email }
          });
        });
    })
    .catch(err => {
      return next(err);
    });
});

module.exports = router;