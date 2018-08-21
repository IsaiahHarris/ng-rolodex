const express = require('express');
const router = express.Router();
const Contact = require('../server/db/models/Contact');

router.route('/')
  .get((req,res)=>{
    const id = req.query.user;
    return Contact
    .query({where: {id:id}})
    .fetchAll()
    .then(contacts=>{
      return res.json(contacts)
    })
    .catch(err=>{
      console.log('err.message', err.message);
    })
  })

  router.route('/search/:term')
  .get((req,res)=>{
    const term = req.params.term;
    return Contact
    .query({where:{name: term}})
    .fetchAll()
    .then(contacts=>{
      return res.json(contacts)
    })
    .catch(err=>{
      console.log('err.message', err.message);
    })
  })

  module.exports = router;