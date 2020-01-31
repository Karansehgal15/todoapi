$(
    function()
    {
        let taskbox=$("#taskbox")
        let addBtn=$("#addBtn")
        let todolist=$("#todoList")

        addBtn.click(
            function()
            {
                let newtask=taskbox.val();
                $.post
                (
                    '/todoList/',
                  {task:newtask},
                    function(data)
                    {   todolist.empty();
                        for(item of data){
                            todolist.append("<li>"+item.task+"</li>")}
                    }
                )
            })
    }
)