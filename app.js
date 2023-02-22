// import express
const express = require('express')

const app = express()


const cors = require('cors')
// set cors 
app.use(cors())

app.use(express.static("public"));

app.use(express.urlencoded({ extended: false }));




const tmdbController=require(process.cwd()+'/controller/tmdb');

app.get('/',tmdbController.findTenMovieList);
app.get('/list/:list_id',tmdbController.findMovieList);




// Call the app.listen method
app.listen(3007, function () {
    //node app.js   
    console.log("http://localhost:3007/");
})