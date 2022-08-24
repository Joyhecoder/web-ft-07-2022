    -- CREATE TABLE restaurant2(
    --     id SERIAL NOT NULL PRIMARY KEY,
    --     name VARCHAR,
    --     address VARCHAR,
    --     category VARCHAR

    -- );
 
    -- CREATE TABLE reviewer(
    --     id SERIAL NOT NULL PRIMARY KEY,
    --     name VARCHAR,
    --     email VARCHAR,
    --     category VARCHAR,
    --     karma integer check(karma between 0 and 7)
    -- );

    -- CREATE TABLE reivew(
    --     id SERIAL NOT NULL PRIMARY KEY,
    --     reviewer_id integer REFERENCES reviewer(id),
    --     stars integer check(stars between 1 and 5),
    --     title VARCHAR,
    --     reivew VARCHAR,
    --     restaurant_id integer REFERENCES restaurant2(id)
    -- );


    --insert data 

-- INSERT INTO restaurant2 VALUES 
-- (DEFAULT, 'Olive Garden', '1234 Almond St Houston TX', 'Italian'),
-- (DEFAULT, 'Torchys', '2341 Peanut St Houston TX', 'Tex-Mex'),
-- (DEFAULT, 'Franks Grill', '3412 Walnut Bend Houston TX', 'American'),
-- (DEFAULT, 'Outback Steakhouse', '4123 Pecan Rd Houston TX',  'American'),
-- (DEFAULT, 'Pappas BBQ', '4123 Beanwi Rd Houston TX', 'BBQ'),
-- (DEFAULT, 'Raising Canes', '3124 Pelbri Rd Houston TX', 'Fried Chicken'),
-- (DEFAULT, 'Garden of Olives', '1231 Groot St Houston TX', 'Italian'),
-- (DEFAULT, 'Flaming Tacos', '2342 Ole St Houston TX', 'Tex-Mex'),
-- (DEFAULT, 'Chucks Grill', '3413 Latrick Bend Houston TX', 'American'),
-- (DEFAULT, 'Salt Grass Steakhouse', '4124 Shuum Rd Houston TX',  'American'),
-- (DEFAULT, 'Hidaway BBQ', '4125 Swantro Rd Houston TX', 'BBQ'),
-- (DEFAULT, 'Chick-fil-a', '3126 Helm Rd Houston TX', 'Fried Chicken');

-- ALTER TABLE reviewer
-- DROP COLUMN category;

-- INSERT INTO reviewer VALUES
-- (DEFAULT, 'Karen', 'tookaren@hotmail.com', 2),
-- (DEFAULT, 'Billy', 'billywilly@hotmail.com', 3),
-- (DEFAULT, 'Bobby', 'bobbynewport@hotmail.com', 0),
-- (DEFAULT, 'Samantha', 'sam185@hotmail.com', 7),
-- (DEFAULT, 'Krieg', 'psychokrieg@hotmail.com', 1),
-- (DEFAULT, 'Charles', 'charleschuck@hotmail.com', 4),
-- (DEFAULT, 'Matt', 'magicmatt@hotmail.com', 6),
-- (DEFAULT, 'Rick', 'rick@hotmail.com', 5);


-- INSERT INTO reivew VALUES
-- (DEFAULT, 1, 1, 'Sooo Rude...', 'The employees were so rude to me.', 1),
-- (DEFAULT, 2, 3.5, 'Great Food', 'Food was good, atmosphere was OK', 2),
-- (DEFAULT, 3, 5, 'It was OK', 'It was OK. Food was not too great', 3),
-- (DEFAULT, 4, 2.5, 'Kinda Rude', 'Food was great. Employees were kinda rude.', 4),
-- (DEFAULT, 5, 4.5, 'Amazing', 'The food was sooo good. I have to go again.', 5),
-- (DEFAULT, 6, 3.5, 'Not my style but good food.', 'Atmosphere was not for me but the food was good.', 6),
-- (DEFAULT, 7, 4, 'Slow service', 'Service was slow but food was good when we got it.', 7),
-- (DEFAULT, 8, 3, 'Great Experience', 'Food was great and employees were so nice.', 8),
-- (DEFAULT, 1, 2.5, 'Would not go again', 'Restaurant was dirty and employees were rude. Food was OK.', 9),
-- (DEFAULT, 2, 2, 'Have to go again.', 'Great food. Wonderfull experience and atmosphere.', 10),
-- (DEFAULT, 3, 5, 'Why???', 'My only complaint is that this restaurant is on the other side of town.', 11),
-- (DEFAULT, 4, 4, 'How much food can you eat', 'Food was great. Portions were big.', 12),
-- (DEFAULT, 5, 3, 'Could not eat another bite', 'I was so full when I left. Gotta go again.', 1),
-- (DEFAULT, 6, 1, 'Not my cup of tea', 'They did not have my kind of tea.', 2),
-- (DEFAULT, 7, 2, 'Very very rude', 'Employee at the cashier yelled at me. Food was OK.', 3),
-- (DEFAULT, 8, 1.5, 'Not very good', 'Food and atmosphere was not very good.', 4);

-- !List all the reviews for a given restaurant given a specific restaurant ID.
-- !List all the reviews for a given restaurant, given a specific restaurant name.

-- SELECT restaurant2.name, restaurant2.id, reivew.reivew FROM
-- reivew
-- INNER JOIN
-- restaurant2
-- ON
-- reivew.restaurant_id = restaurant2.id
-- WHERE restaurant2.id = 1;


-- SELECT restaurant2.name, restaurant2.id, reivew.reivew FROM
-- reivew
-- INNER JOIN
-- restaurant2
-- ON
-- reivew.restaurant_id = restaurant2.id
-- WHERE restaurant2.name = 'Olive Garden';

-- !List all the reviews for a given reviewer, given a specific author name.

-- SELECT restaurant2.name, restaurant2.id, reivew.reivew, reviewer.name FROM
-- reivew
-- INNER JOIN
-- reviewer
-- ON
-- reivew.reviewer_id = reviewer.id
-- INNER JOIN
-- restaurant2
-- ON
-- reivew.restaurant_id = restaurant2.id
-- WHERE reviewer.name = 'Karen';



-- !List all the reviews along with the restaurant they were written for. In the query result, select the restaurant name and the review text.
-- SELECT restaurant2.name, reivew.reivew FROM
-- reivew
-- INNER JOIN
-- restaurant2
-- ON
-- reivew.restaurant_id = restaurant2.id
-- ORDER BY restaurant2.name
-- WHERE restaurant2.name = 'Torchys';




-- !Get the average stars by restaurant. The result should have the restaurant name and its average star rating.

-- SELECT restaurant2.name, 
-- avg(stars) 
-- FROM
-- reivew
-- INNER JOIN
-- restaurant2
-- ON
-- reivew.restaurant_id = restaurant2.id
-- GROUP BY restaurant2.name;

-- !Get the number of reviews written for each restaurant. The result should have the restaurant name and its review count.
-- SELECT restaurant2.name,count(reivew.reivew)
-- FROM
--     restaurant2
-- INNER JOIN
--     reivew
-- ON
--     reivew.restaurant_id = restaurant2.id
-- GROUP BY restaurant2.name;


-- !List all the reviews along with the restaurant, and the reviewer's name. The result should have the restaurant name, the review text, and the reviewer name. Hint: you will need to do a three-way join - i.e. joining all three tables together.
-- SELECT restaurant2.name, reviewer.name, reivew.reivew
-- FROM
--     restaurant2
-- INNER JOIN
--     reivew
-- ON
--     restaurant2.id = reivew.restaurant_id
-- INNER JOIN 
--     reviewer
-- ON
--     reivew.reviewer_id = reviewer.id
-- ORDER BY restaurant2.name;


-- !Get the average stars given by each reviewer. (reviewer name, average star rating)
-- SELECT reviewer.name, avg(stars)
-- FROM 
-- reviewer
-- INNER JOIN
-- reivew
-- ON
-- reviewer.id = reivew.reviewer_id
-- GROUP BY reviewer.name;


-- !Get the lowest star rating given by each reviewer. (reviewer name, lowest star rating)
-- SELECT reviewer.name, min(stars)
-- FROM 
-- reviewer
-- INNER JOIN
-- reivew
-- ON
-- reviewer.id = reivew.reviewer_id
-- GROUP BY reviewer.name;


--! Get the number of restaurants in each category. (category name, restaurant count)

-- SELECT category, count(*) FROM restaurant2
-- GROUP BY category;

--! Get number of 5 star reviews given by restaurant. (restaurant name, 5-star count)
-- SELECT restaurant2.name, count(stars) 
-- FROM
-- reivew
-- INNER JOIN
-- restaurant2
-- ON
-- reivew.restaurant_id = restaurant2.id
-- WHERE stars = 5
-- GROUP BY restaurant2.name;


-- !Get the average star rating for a food category. (category name, average star rating)
-- SELECT restaurant2.category, avg(stars)
-- FROM
-- restaurant2
-- INNER JOIN
-- reivew
-- ON
-- reivew.restaurant_id = restaurant2.id
-- GROUP BY restaurant2.category;
