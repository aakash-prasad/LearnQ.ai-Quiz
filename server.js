const express = require('express');
const app = express();
const exphbs = require('express-handlebars')
const path = require('path')

const {conn} = require('./connection')


//DEFINING THE PORT
const PORT = process.env.PORT || 3000
//CONNECTION CHECK:

const checkConnection = async()=>{
  try{
    await conn.authenticate();
    console.log(`Database Connection succesful`)
  }catch(err){console.log(`Error while connecting: ${err}`)}
  
}
checkConnection();
//SETTING THE PATH
const staticPath = path.join(__dirname, '/public')

//LOAD VIEW ENGINE
app.use(express.static(staticPath));

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars')


//MIDDLEWEARS:
app.use(express.json())
app.use('/', require('./routes/index'))

//Listen server
app.listen(3000, ()=>{
  console.log(`Server Running at PORT ${PORT}`)
})