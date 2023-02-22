const axios = require('axios');
//API
const api_key="361f05c43d80eb10c49a953abd35668b";


const findMovieListModel=async(list_id)=>{
    var data=null;
    await axios.get('https://api.themoviedb.org/3/list/'+list_id+"?api_key="+api_key).then(function(res){
        data=res.data;
    });
    return data;
}


const findTenMovieListModel=async()=>{
    var data=[];
    for(var i=1;i<=10;i++){
        await axios.get('https://api.themoviedb.org/3/list/'+i+"?api_key="+api_key).then(function(res){
            data.push(res.data.name);
        });
    }
    return data;
}


module.exports={
    findMovieListModel,
    findTenMovieListModel
}
