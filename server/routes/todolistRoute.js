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
            console.error('Get route error:', dbError);
        });
});
//POST route

//DELETE route

//PUT routes?

module.exports = router;