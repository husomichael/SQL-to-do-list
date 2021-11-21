CREATE TABLE todo (
    "id" serial PRIMARY KEY,
    "importance" boolean,
    "task" varchar (255) NOT NULL,
    "completed" boolean
);

INSERT INTO todo ("importance", "task", "completed")
VALUES 
('False', 'Wash the car.', 'False'),
('False', 'Walk the dog.', 'False');