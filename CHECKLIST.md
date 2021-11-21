[x]Think through table structure.
    -- Design on app.dbdesigner.net
    -- Actually make some CREATE TABLE statements.
    Database: to-do-list
    Table: todo
[x]Make a branch for initializing stuff.

#### Front-End

Front end Initialization:
[x]File folders
[x]Build boilerplate HTML
[x]Source style.css
[x]Source client.js
[x]Source jQuery.js
[x]Project structure
[x]Create database.sql
[x].gitignore

Database planning:
[x]Name database. 
[x]xName table/s. 
[x]Figure out structure of column names. 
[x]Write up SQL statements for building table. 
[x]Write up statements to put in some dummy data.

#### Back-End

Server setup:
[x]run npm init --y
[x]make sure "start" script exists in package.json
[x]npm install express
[x]npm install body-parser
[x]npm install pg
[x]create server.js
[x]create todoRouter.js in routers folder in server folder
[x]create pool.js
[x]wire up todoRouter.js export router
[x]wire up pool.js and link to DB and export pool
[x]write server code in server.js

# FEATURES
[x]Render GET ROUTE

[x]Create a task *POST ROUTE*
    store in db
    re-render DOM *GET ROUTE*

[x]delete a task *DELETE ROUTE*
    remove task from DB
    re-render DOM *GET ROUTE*

[x]task should be completeable
    update task in DB *PUT ROUTE*
    should be "checked off"
    CSS to differentiate "complete" tasks
    re-render DOM *GET ROUTE*

[x]task could have a mark important button
    sort tasks in SQL query from DB to be importance first *PUT ROUTE*
    CSS to differentiate importance of tasks. (DEFCON level colors lol)
    re-render DOM *GET ROUTE*

[] CSS! Make it pretty. 