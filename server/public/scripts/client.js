console.log('js');

$(document).ready(readyNow);

function readyNow(){
    console.log('jq');
    renderList();
    $('#create-button').on('click', createTask);
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
                    <td><button class="delete-button" id="${todo.id}">Delete</button></td>
                </tr>
            `);
        }
    }).catch((error) =>{
        console.log('/todolist GET error:', error);
    });
}//END getList

// DELETE route delete a task

// POST route create a task
function createTask(){
    console.log('in createTask');
    const taskToSend = {
        task: $('#task-input').val()
    };
    $.ajax({
        method:'POST',
        url:'/todolist',
        data: taskToSend
    }).then((response) =>{
        console.log('POST /todolist response:', response);
        renderList();
    }).catch((error) =>{
        console.log('/todolist POST error:', error);
    });
    $('#task-input').val('');
}

// PUT route complete a task

//PUT route importance marker