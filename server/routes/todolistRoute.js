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
})
//DELETE route

//PUT routes?

module.exports = router;