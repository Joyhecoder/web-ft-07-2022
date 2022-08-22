
--create database table
-- CREATE TABLE restaurant(
--     id SERIAL NOT NULL PRIMARY KEY,
--     name varchar,
--     distance integer,
--     stars integer,
--     category varchar,
--     favorite_dish varchar,
--     does_takeout BOOLEAN,
--     last_time_you_ate_there Date
-- );


--insert data
-- INSERT INTO restaurant VALUES
--     (DEFAULT, 'Olive Garden', 5, 4.5, 'Italian', 'pasta', TRUE, '2021-10-04'),
--     (DEFAULT, 'Torchy', 8, 4.7, 'Tex-Mex', 'burrito', TRUE, '2021-10-04');

-- INSERT INTO restaurant VALUES
--     (DEFAULT, 'Slurp', 4, 4.5, 'Ramen', 'brisket ramen', TRUE, '2022-07-04'),
--     (DEFAULT, 'The Union Kitchen', 1, 4, 'American', 'Beignets', TRUE, '2022-05-04'),
--     (DEFAULT, 'Crust Pizza Co', 1, 5, 'Pizza', 'BBQ Chicken Pizza', TRUE, '2022-01-04'),
--     (DEFAULT, 'Island Fin Poke Company', 1, 3, 'Poke', 'Vegetable Poke', TRUE, '2021-11-14'),
--     (DEFAULT, 'Ginger Thai', 4, 4, 'Asian', 'Pad THai', TRUE, '2022-04-14');

--writing queries
-- SELECT name FROM restaurant WHERE stars=5;
-- SELECT favorite_dish FROM restaurant WHERE stars=5;
-- SELECT  id FROM restaurant WHERE name='Torchy';
-- SELECT  * FROM restaurant WHERE category='Pizza';
-- SELECT  * FROM restaurant WHERE does_takeout=TRUE;
-- SELECT  * FROM restaurant WHERE does_takeout=TRUE AND category ='Pizza';
-- SELECT * FROM restaurant WHERE distance < 2;
-- SELECT * FROM restaurant WHERE last_time_you_ate_there < '2022/08/15';
-- SELECT * FROM restaurant WHERE last_time_you_ate_there < '2022/08/15' AND stars=5;




--aggregation and sorting queries
-- SELECT * FROM restaurant ORDER BY distance;
-- SELECT * FROM restaurant ORDER BY distance LIMIT 2;
-- SELECT * FROM restaurant ORDER BY stars DESC LIMIT 2;
-- SELECT * FROM restaurant WHERE stars = 5 AND distance < 2 LIMIT 2;
-- SELECT COUNT(*) FROM restaurant;

-- SELECT COUNT(category) FROM restaurant;
-- SELECT COUNT(category), AVG(stars) FROM restaurant;
-- SELECT COUNT(category), MAX(stars) FROM restaurant;

