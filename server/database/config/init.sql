BEGIN;
DROP TABLE IF EXISTS users, posts, comments CASCADE;
CREATE TABLE users (
    username VARCHAR(100) PRIMARY KEY,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    email TEXT UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL
);
CREATE TABLE posts (
    id SERIAL PRIMARY KEY,
    user_name VARCHAR(100) REFERENCES users(username),
    post_text TEXT NOT NULL,
    image_url TEXT, 
    likes INTEGER NOT NULL
);
CREATE TABLE comments (
    id SERIAL PRIMARY KEY,
    user_name VARCHAR(100) REFERENCES users(username),
    post_id INTEGER REFERENCES posts(id),
    comment_text TEXT NOT NULL
);


INSERT INTO users (username, first_name, last_name, email, password) VALUES ('ahmad', 'Ahmad', 'Sabbah', 'sabbahahmad093@gmail.com', 'password');
INSERT INTO users (username, first_name, last_name, email, password) VALUES ('mohd', 'Mohamed', 'Sabbah', 'sabbahahma@gmail.com', 'password');
INSERT INTO posts(user_name, post_text, image_url, likes) VALUES ('ahmad','Hello', 'image',50);
INSERT INTO posts(user_name, post_text, image_url, likes) VALUES ('mohd','Hey', 'image',100);
INSERT INTO comments(user_name, post_id, comment_text) VALUES ('ahmad', 1, 'Good');



COMMIT;