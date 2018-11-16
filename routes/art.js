const express = require('express')

const { Router } = express

const Art = require('../models/art')
const artRouter = Router()

artRouter
  .route('/')
  .get((req, res, next) => {
    //ask the database for the right data and send it to the client
    Art.find(req.query, (err, art) => {
      if (err) {
        res.status(400)
        next(err)
      } else {
        res.status(200).send(art)
      }
    })
  })
  .post((req, res, next) => {
    // convert request body into a document
    const newArt = new Art(req.body)
    //save the document to the collection (model)
    newArt.save((err, savedArt) => {
      if (err) {
        res.status(400)
        next(err)
      } else {
        res.status(201).send(savedArt)
      }
    })
  })

module.exports = artRouter
