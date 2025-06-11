CREATE TABLE students (
 id SERIAL PRIMARY KEY,
 full_name VARCHAR(255) NOT NULL,
 birth_date DATE,
 email VARCHAR(255) UNIQUE NOT NULL,
 phone VARCHAR(20),
 enrollment_year INT
);

CREATE TABLE discipline (
 id SERIAL PRIMARY KEY,
 name VARCHAR(255) NOT NULL,
 description TEXT,
 credits INT,
 hours INT
);

CREATE TABLE student_discipline(
 student_id INT REFERENCES students(id) ON DELETE CASCADE,
 discipline_id INT REFERENCES discipline(id) ON DELETE CASCADE,
 group_number INT,
 PRIMARY KEY (student_id, discipline_id);
);

SELECT s.full_name, s.email
FROM student s
JOIN student_discipline sd ON s.id = sd.student_id
JOIN discipline d ON sd.discipline_id = d.id
WHERE d.name = 'Програмування' AND sd.group_number = 5;