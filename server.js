xp=require('express')
srvr=xp()
const port=process.env.port || 2121;
todoRoute=require('./todos/todos')
srvr.use(xp.json());
srvr.use(xp.urlencoded({extended:true}));
srvr.use('/todoList',todoRoute);
var path = require('path');
// srvr.use();
srvr.use('/public',xp.static(path.join(__dirname, 'public')));
srvr.listen(port);