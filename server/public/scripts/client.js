console.log('js');

$(document).ready(readyNow);

function readyNow(){
    console.log('jq');
    renderList();
}

//GET Route render todo list
function renderList(){
    console.log('in getList');

    $.ajax({
        method: 'GET',
        url: '/todolist'
    }).then((response) =>{
        const todoList = response;
        $('#view-todolist').empty();
        console.log('GET /todolist response:', todoList);
        for(let todo of todoList){
            $('#view-todolist').append(`
                <tr>
                    <td>${todo.importance}</td>
                    <td>${todo.task}</td>
                    <td>${todo.completed}</td>
                </tr>
            `);
        }
    }).catch((error) =>{
        console.log('/todolist GET error:', error);
    })
}//END getList

// DELETE route delete a task

// POST route create a task

// PUT route complete a task

//PUT route importance marker