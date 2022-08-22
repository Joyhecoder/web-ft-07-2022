
-- INSERT INTO student VALUES (
--     'Joy', 'Joy@dc.com', 'joy@gitbub.com', 10, 'F', '2022-07-05', FALSE
  
--   );

-- INSERT INTO student VALUES 
--     ('Shannon', 'Shannon@dc.com', 'Shannon@gitbub.com', 10, 'F', '2022-07-05', FALSE),
--     ('Nomi', 'Nomi@dc.com', 'Nomi@gitbub.com', 10, 'M', '2022-07-05', FALSE),
--     ('Tommy', 'Tommy@dc.com', 'Tommy@gitbub.com', 10, 'M', '2022-07-05', FALSE),
--     ('Austin', 'austin@dc.com', 'austin@gitbub.com', 10, 'M', '2022-07-05', FALSE);
    
-- UPDATE student SET  points = 8;
-- UPDATE student SET points =20 WHERE name= 'Joy';
-- UPDATE student SET points = 15 WHERE gender = 'M';
-- UPDATE student SET points = 25 WHERE name ilike 'shannon';
-- UPDATE student SET points = 30 WHERE name ilike 'shannon' OR name='kipp';

-- DELETE FROM student WHERE name='Austin';

-- DELETE FROM student WHERE gender ='M';

-- CREATE TABLE blogs (
--     id SERIAL NOT NULL PRIMARY KEY,
--     title varchar(150),
--     start_date DATE,
--     isVisible BOOLEAN DEFAULT FALSE
-- );

-- INSERT INTO blogs VALUES
--     (DEFAULT, 'js is awesome', '2022-08-22', TRUE),
--     (DEFAULT, 'learning node', '2022-08-22', TRUE),
--     (DEFAULT, 'installing Postgres on Macs', '2022-08-22', TRUE),
--     (DEFAULT, 'installing Postgre on PCs', '2022-08-22', TRUE),
--     (DEFAULT, 'Google APIs', '2022-08-22', TRUE);

-- DELETE FROM blogs WHERE id=5;

-- INSERT INTO blogs VALUES (DEFAULT, 'google APIs', '2022-08-21');

-- SELECT * FROM student;
-- SELECT title, start_date FROM blogs;

-- SELECT * FROM student WHERE gender='F';
-- SELECT name, points FROM student WHERE points >= 20;
-- SELECT name, points, gender FROM student WHERE points = 10 AND gender='F';
-- SELECT * FROM student WHERE github_username ilike '%An%';

-- ALTER TABLE blogs
-- ADD  isPublished boolean DEFAULT TRUE;

-- ALTER TABLE blogs
-- DROP COLUMN isVisible;

-- ALTER TABLE blogs
-- ALTER COLUMN title TYPE varchar(30);

-- SELECT COUNT(*) FROM student;
-- SELECT COUNT(*), SUM(points), AVG(points), MIN(points), MAX(points) FROM student;

-- SELECT * FROM student ORDER BY name DESC;

-- SELECT * FROM student ORDER BY points DESC, name ASC;

-- SELECT * FROM student ORDER BY gender;
-- SELECT * FROM student ORDER BY gender LIMIT 3;
SELECT * FROM student ORDER BY gender LIMIT 3 OFFSET 3;

