console.log('js');
let taskToEditForSend = 0;
$(document).ready(readyNow);

function readyNow(){
    console.log('jq');
    renderList();
    $('#create-button').on('click', createTask);
    $(document).on('click', '.delete-button', deleteTask);
    $(document).on('click', '.complete-button', markComplete);
    $(document).on('click', '.important-button', markImportant);
    $(document).on('click', '.edit-button', editTask);
    // $(document).delegate('.edit-btn-primary', 'click', editTaskSend(taskToEditForSend));
}

//GET /todolist route to render todolist
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
                    <td><button class="complete-button" data-id="${todo.id}">Complete</button></td>
                    <td><button class="important-button" data-id="${todo.id}">Important</button></td>
                    <td>${todo.importance}</td>
                    <td class="task-data" data-id="${todo.id}">${todo.task}</td>
                    <td>${todo.completed}</td>
                    <td><button class="delete-button" data-id="${todo.id}">Delete</button></td>
                    <td><button type="button" class="edit-button" data-id="${todo.id}" data-bs-toggle="modal" data-bs-target="#edit-modal">Edit</button></td>
                </tr>
            `);
        }
    }).catch((error) =>{
        console.log('/todolist GET error:', error);
    });
}//END getList

//POST /todolist route create a task
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
}//END createTask

//DELETE /todolist route to delete a task
function deleteTask(){
    const taskToDelete = $(this).data('id');
    console.log('taskToDelete:', taskToDelete);
    $.ajax({
        method: 'DELETE',
        url: `/todolist/${taskToDelete}`
    }).then((response) =>{
        console.log('deleteTask response:', response);
        renderList();
    }).catch((error) =>{
        console.log('deleteTask error:', error);
    });
}//END deleteTask

//PUT /todolist route to mark a task complete
function markComplete(){
    console.log('in markComplete');
    const taskToMark = $(this).data('id');
    $.ajax({
        method: 'PUT',
        url: `/todolist/${taskToMark}`
    }).then((res) =>{
        renderList();
    }).catch((error) =>{
        console.log('markComplete error:', error);
    });
}//END markComplete


//PUT /todolist route for importance marker
function markImportant(){
    console.log('in markImportant');
    const taskToMark = $(this).data('id');
    $.ajax({
        method: 'PUT',
        url: `/todolist/important/${taskToMark}`
    }).then((res) =>{
        renderList();
    }).catch((error) =>{
        console.log('markComplete error:', error);
    });
}//END markImportant

// //PUT /todolist route to send edit task
// function editTaskSend(ID){
//     console.log('in editTaskSend');
//     let taskToEdit = ID;
//     const taskChanges = {
//         task: $('#edit-input').val('')
//     };
//     $.ajax({
//         method: 'PUT',
//         url: `/todolist/edit/${taskToEdit}`,
//         data: taskChanges
//     }).then((res) =>{
//         renderList();
//     }).catch((error) =>{
//         console.log('editTaskSend error:', error);
//     });
// }

// //Function to fill modal input with current task to edit.
// function editTask(){
//     console.log('in editTask');
//     taskToEditForSend = $(this).data('id');
//     console.log('taskToEditForSend:', taskToEditForSend);
//     $.ajax({
//         method: 'GET',
//         url:`/todolist/editget/${taskToEditForSend}`
//     }).then((response) =>{
//         console.log(response);
//         const taskResponseArray = response[0].task
//         console.log(taskResponseArray);
//         $('#edit-input').val(`${taskResponseArray}`);
//     }).catch((error) =>{
//         console.log('editTask error:', error);
//     });
// }