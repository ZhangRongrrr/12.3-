let data=require('./src/data.json')

module.exports={
    devServer:{
        before(app){
            app.get('/data',(req,res)=>{
                console.log(data);
                res.send(data)
            })
        }
    }
}