const express = require('express');
const router = express.Router();
const Contact = require('../server/db/models/Contact');

router.route('/')
  .get((req,res)=>{
    return Contact.fetchAll({withRelated: ['created_by']})
    .then(contacts=>{
      return res.json(contacts)
    })
    .catch(err=>{
      console.log('err.message', err.message);
    })
  })

  module.exports = router;