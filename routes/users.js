const express = require('express');
const router = express.Router();
const User = require('../server/db/models/User');

router.route('/')
  .get((req, res) => {
    return User.fetchAll()
      .then(users => {
        return res.json(users)
      })
      .catch(err => {
        console.log('err.message', err.message);
      })
  })

router.route('/profile')
  .get((req, res) => {
    const id = req.query.user;
    console.log('id', id);
    return User
    .query({where: {id:id}})
    .fetch()
    .then(user=>{
      return res.json(user)
    })
    .catch(err => {
      console.log('err.message', err.message);
    })
  })


module.exports = router;