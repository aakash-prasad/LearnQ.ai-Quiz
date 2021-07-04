
const dropdown = async(e)=>{
  e.preventDefault();
  let select = document.getElementById('temp')
  let dificultyLevel = (select.options[select.selectedIndex].value)
  let level = {dificultyLevel:dificultyLevel}
  console.log(dificultyLevel)
  //USE FETCH API AND SEND THE REQUEST
  if(dificultyLevel == 'Easy'){
    document.location.href="/Easy";
    try{
      let response = await fetch('/Easy',{
        method: 'POST',
        headers: {   
          'Content-Type': 'application/json',                 
        },
        body: JSON.stringify(level),
      })
      //console.log(response)
      
    }catch(err){console.log(err)}
  }
  if(dificultyLevel == 'Medium'){
    document.location.href="/Medium";
    try{
      let response = await fetch('/Medium',{
        method: 'POST',
        headers: {   
          'Content-Type': 'application/json',                 
        },
        body: JSON.stringify(level),
      })
      console.log(response)
      
    }catch(err){console.log(err)}
  }
  if(dificultyLevel == 'Hard'){
    document.location.href="/Hard";
    try{
      let response = await fetch('/Hard',{
        method: 'POST',
        headers: {   
          'Content-Type': 'application/json',                 
        },
        body: JSON.stringify(level),
      })
      console.log(response)
      
    }catch(err){console.log(err)}
  } 
   
}
let answers = document.querySelectorAll('.answer');

getCheckedAnswer = ()=>{
  let selectedId
  answers.forEach((currentElement)=>{
    if(currentElement.checked){
      selectedId = currentElement.id
    }
  })
  return selectedId;
}

let questionCount = 0;
const nextQuestion = async()=>{
  const checkedAnswerId = getCheckedAnswer();

  questionCount++;
  console.log(questionCount)
  
  let checkedAnswer ={checkedAnswerId:checkedAnswerId}
  try{
    let response = await fetch('/Score',{
      method: 'POST',
      headers: {   
        'Content-Type': 'application/json',                 
      },
      body: JSON.stringify(checkedAnswer),
    })
    //console.log(response)
    
  }catch(err){console.log(err)}

  

}


let select = document.getElementById('start');
select.addEventListener('click', dropdown);

let next = document.getElementById('next');
next.addEventListener('click', nextQuestion);


// SCRIPT FOR DETAILS.HANDLEBARS


