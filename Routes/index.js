const express = require('express');
const Router = express.Router();

Router.get('/', (req,res)=>{

  return res.render('index',{
    style: 'home.css'
  })
})

Router.get('/details', (req,res)=>{

  return res.render('details',{
    style: 'details.css'
  })
})

module.exports = Router;