module.exports = `

    DROP TABLE IF EXISTS lists; CREATE TABLE lists(id INT NOT NULL AUTO_INCREMENT, title VARCHAR(40) NOT NULL, PRIMARY KEY (id));

    DROP TABLE IF EXISTS items; CREATE TABLE items(id INT NOT NULL PRIMARY KEY AUTO_INCREMENT, text VARCHAR(100) NOT NULL, list_id INT, FOREIGN KEY (list_id) REFERENCES lists(id));

    INSERT INTO lists (title) VALUES ('Albums'), ('Films'), ('Pantry'), ('Fridge'), ('Books');  

    INSERT INTO items (text, list_id) VALUES
        ('Michael Jackson - Thriller', 1),
        ('Johnny Cash - At Folsom Prison', 1),
        ('OutKast - Aquemini', 1),
        ('Interstellar', 2),
        ('Fight Club', 2),
        ('The Grand Budapest Hotel', 2),
        ('Condensed Milk', 3),
        ('Almonds', 3),
        ('Energy Bars', 3),
        ('Milk', 4),
        ('Butter', 4),
        ('Feta cheese', 4),
        ('Permanent Record - Edward Snowden', 5),
        ('When Nietzsche wept - Irvin D. Yalom', 5),
        ('The Things We Cannot Say - Kelly Rimmer', 5);

`;