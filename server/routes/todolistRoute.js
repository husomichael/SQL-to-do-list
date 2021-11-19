const express = require('express');
const router = express.Router();

//DB Connection
const pool = require('../modules/pool.js');

//GET route
router.get('/', (req, res) =>{
    const sqlText = 'SELECT * FROM todo;';
    pool.query(sqlText)
        .then((dbRes) =>{
            const listFromDB = dbRes.rows;
            res.send(listFromDB);
        }).catch((dbError) =>{
            console.error('/todolist GET route error:', dbError);
        });
});

//POST route to create task
router.post('/', (req, res) =>{
    console.log('POST /todolist');
    const newTask = req.body;
    const sqlText = (`
    INSERT INTO todo ("importance", "task", "completed")
    VALUES 
    ($1, $2, $3);
    `);
    const sqlValues = [
        'False',
        newTask.task,
        'False'
    ];
    console.log(sqlText);
    pool.query(sqlText, sqlValues)
        .then((dbRes) =>{
            console.log(dbRes);
            res.sendStatus(201); // OK, Created
        }).catch((dbError) =>{
            console.log('/todolist POST route error:', dbError);
        });
});

//DELETE route
router.delete('/:id', (req, res) =>{
    console.log('req.params =', req.params);
    const taskToDelete = req.params.id;
    const sqlText = `
        DELETE FROM "todo"
        WHERE "id"=$1;
    `;
    const sqlValues = [
        taskToDelete
    ];
    pool.query(sqlText, sqlValues)
        .then((dbRes) =>{
            res.sendStatus(200);
        }).catch((dbError) =>{
            res.sendStatus(500);
        });
});

//PUT markComplete route
router.put('/:id', (req, res) =>{
    console.log('req.params =', req.params);
    const taskToMark = req.params.id;
    const sqlText = `
    UPDATE "todo"
    SET "completed"=$1
    WHERE "id"=$2;
    `;
    const sqlValues = [
        'True',
        taskToMark
    ];
    pool.query(sqlText, sqlValues)
        .then((dbRes) =>{
            res.sendStatus(200);
        }).catch((dbError) =>{
            res.sendStatus(500);
        });
});

module.exports = router;