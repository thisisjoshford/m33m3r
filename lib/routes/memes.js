const { Router } = require('express');
const Meme = require('../models/Meme');

module.exports = Router()
  .post('/', (req, res, next) => {
    // console.log(req);
    Meme
      .create({
        ...req.body,
      })
      .then(post => {
        // console.log(post);
        res.send(post);})
      .catch(next);
  });
  

