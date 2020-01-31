xp=require('express')
srvr=xp()
todoRoute=require('./todos/todos')

srvr.use(xp.json());
srvr.use(xp.urlencoded({extended:true}));
srvr.use('/todoList',todoRoute);
srvr.use('/public',xp.static(__dirname+"/public"));
srvr.listen(2121);