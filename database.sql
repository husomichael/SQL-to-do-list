CREATE TABLE todo (
    "id" serial PRIMARY KEY,
    "importance" boolean,
    "task" varchar (255) NOT NULL,
    "completed" boolean
);

INSERT INTO todo ("importance", "task", "completed")
VALUES 
('False', 'Create a task POST ROUTE store in db rerender DOM GET ROUTE', 'False'),
('False', 'Delete a task DELETE ROUTE remove task from DB rerender DOM GET ROUTE', 'False');