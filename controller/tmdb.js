const{
    findMovieListModel,findTenMovieListModel
}=require(process.cwd()+'/models/tmdb');
const ejs=require('ejs');
const fs = require('fs');


const findMovieList=async(req,res)=>{
    const{list_id}=req.params;
    
    let rs=await findMovieListModel(list_id);
    fs.readFile('./view/index.ejs',function(err,nowData){
         var template=nowData.toString();
         var dictionary={data:rs};
         var html=ejs.render(template,dictionary);
         res.status(200).end(html);
    });
}

//get ten movies
const findTenMovieList=async(req,res)=>{
    let rs= await findTenMovieListModel();
    fs.readFile('./view/ten.ejs',function(err,nowData){
        var template=nowData.toString();
        var dictionary={data:rs};
        var html=ejs.render(template,dictionary);
        res.status(200).end(html);
   });
}


//export
module.exports={
    findMovieList,
    findTenMovieList
}