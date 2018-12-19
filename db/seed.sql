DROP DATABASE IF EXISTS hogwarts;
CREATE DATABASE hogwarts;

\c hogwarts;

DROP TABLE IF EXISTS teachers;
DROP TABLE IF EXISTS students;
DROP TABLE IF EXISTS classes;
DROP TABLE IF EXISTS wands;

CREATE TABLE teachers (
  id SERIAL PRIMARY KEY,
  name VARCHAR NOT NULL,
  subject VARCHAR NOT NULL
);

CREATE TABLE students (
  id SERIAL PRIMARY KEY,
  name VARCHAR NOT NULL,
  house VARCHAR NOT NULL
);

CREATE TABLE classes (
  id SERIAL PRIMARY KEY,
  teacher_id INT REFERENCES teachers(id),
  student_id INT REFERENCES students(id)
);

CREATE TABLE wands (
  id SERIAL PRIMARY KEY,
  type VARCHAR,
  length NUMERIC,
  core VARCHAR,
  student_id INT REFERENCES students(id)
);

INSERT INTO teachers(name, subject) VALUES('Snape', 'D.A.D.A'),('Neville Longbottom', 'Herbology'), ('Horace', 'Potions');

INSERT INTO students(name, house) VALUES('Harry Potter', 'Gryffindor'),('Albus Dumbledore', 'Gryffindor'), ('Hengist of Woodcroft', 'Hufflepuff'),('Artemisia Lufkin', 'Hufflepuff'), ('Gilderoy Lockhart', 'Ravenclaw'), ('Merlin', 'Slytherin'), ('Tom Riddle', 'Slytherin');

INSERT INTO classes(teacher_id, student_id) VALUES(1, 1), (1, 2), (2, 1), (2, 2), (2, 3), (1, 4);

INSERT INTO wands(type, length, core, student_id) VALUES('Holly', 11, 'Phoenix feather', 1), ('Elder', 15, 'Thestral tail hair', 2), ('Cherry', 9, 'Dragon heartstring', 5);