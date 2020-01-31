route=require('express').Router();

taskslist=[];

route.get('/',function(req,res,next)
{  res.send(taskslist); })

route.post('/',function(req,res){
    taskslist.push({task:req.body.task})
        res.send(taskslist);
})

module.exports=route