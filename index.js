//conectando a mongo//
require('./DB/db');


//* Levanta el .env en procces.env*//
const dotenv = require ('dotenv').config()

const express = require ('express')
const app = express()

const bodyParser = require ('body-parser')
 const accountRouter = require ('./Components/Cuentas/router')



// parse application/json

app.use(bodyParser.json());
app.use (bodyParser.urlencoded({extended: false}))
app.use('/cuentas', accountRouter);

//levanta app//

try {
 app.listen(process.env.PORT, () => {
  console.log('Escuchando puerto:', process.env.PORT)
 });

} catch (error) {
 console.log(error);
}