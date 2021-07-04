const express = require('express');
const Router = express.Router();
const Questions = require('../Models/Questions')

Router.get('/', (req,res)=>{
  console.log('From GET')
  return res.render('index',{
    style: 'home.css',
    title: 'Home'
  })
})


// Router.get('/assesment', (req,res)=>{

//   return res.render('assesment',{
//     style: 'assesment.css',
//     title: 'Assesment'
//   })
// })

// Router.post('/assesment', async(req,res)=>{
//   const difficultyLevel = (req.body.dificultyLevel)
//   console.log(difficultyLevel)
//   const questionArray =await Questions.findAll({
//     where:{
//       difficulty_level:difficultyLevel
//     }
//   })
//   console.log(questionArray.length)
//   console.log(questionArray[1].dataValues)
// })





Router.get('/Easy', async(req,res)=>{
  console.log('Get function from Easy')
  const questionArray =await Questions.findAll({
    where:{
      difficulty_level:'Easy'
    }
  })
  //console.log(questionArray.length)
  console.log(questionArray[0].dataValues)
  let question = questionArray[0].dataValues.question
  let option1 = questionArray[0].dataValues.option_1
  let option2 = questionArray[0].dataValues.option_2
  let option3 = questionArray[0].dataValues.option_3
  let option4 = questionArray[0].dataValues.option_4
  
  return res.render('assesment',{
    style: 'assesment.css',
    title: 'Assesment',
    question:question,
    option1:option1,
    option2,
    option3,
    option4,
  })
})

Router.post('/Easy', async(req,res)=>{
  const difficultyLevel = (req.body.dificultyLevel)
  
  
})


Router.get('/Medium', (req,res)=>{
  

})

Router.post('/Medium', async(req,res)=>{



})

Router.get('/Hard', (req,res)=>{
  


})

Router.post('/Hard', async(req,res)=>{
  


})


Router.get('/Score', async(req,res)=>{

})

Router.post('/Score', async(req,res)=>{
  let checkedAnswerId = (req.body.checkedAnswerId)
  console.log(checkedAnswerId)
  const questionArray =await Questions.findAll({
    where:{
      difficulty_level:'Easy'
    }
  })
  let score = 0;
  let correctAnswer = (questionArray[0].correct_option)
  console.log(correctAnswer)
  if(checkedAnswerId == correctAnswer){
    score++;
  }
  console.log(`Score is ${score}`)
})



module.exports = Router;