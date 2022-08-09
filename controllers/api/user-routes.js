const router = require('express').Router();
const { Post, Comment, Users } = require('../../models');

router.get('/', (req, res) => {
  Users.findAll({
    attributes: { exclude: ['password'] }
  })
    .then(dbUserData => res.json(dbUserData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router
