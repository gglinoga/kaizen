DROP DATABASE IF EXISTS kaizen_db;
CREATE DATABASE kaizen_db;

USE kaizen_db;

DROP TABLE IF EXISTS courses;
CREATE TABLE courses
(
	id int NOT NULL AUTO_INCREMENT,
   	PRIMARY KEY (id),
	course_name varchar(100) NOT NULL,
    img text
);

DROP TABLE IF EXISTS lessons;
CREATE TABLE lessons
(
	id int NOT NULL AUTO_INCREMENT,
	PRIMARY KEY (id),
	lesson_name varchar(100) NOT NULL,
    course_id int NOT NULL,
    text_content text NOT NULL,
    img text,
    quiz json,
    lesson_num int NOT NULL,
    lesson_description text NOT NULL
);

DROP TABLE IF EXISTS users;
CREATE TABLE users
(
	id int NOT NULL AUTO_INCREMENT,
    PRIMARY KEY (id),
    first_name varchar(100) NOT NULL,
    last_name varchar(100) NOT NULL,
    email varchar(100) NOT NULL,
    user_password varchar(100) NOT NULL,
    current_course json
);

INSERT INTO courses (course_name, img)
VALUES ('photoshop', 'https://seeklogo.com/images/P/photoshop-cs6-logo-E67E1EDDE0-seeklogo.com.png'), ('javascript', 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1024px-Unofficial_JavaScript_logo_2.svg.png'), ('react', 'http://assets.stickpng.com/thumbs/584830f5cef1014c0b5e4aa1.png');

INSERT INTO lessons (id, lesson_name, course_id, text_content, img, lesson_num, lesson_description)
VALUES	(1, "getting started", 1, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', 'img here', 1, 'getting started with photoshop!'),
		(2, 'layers', 1, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', 'img here', 2, 'learn about layers!'),
		(3, 'getting started', 2, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', 'img here', 1, 'getting started with javascript!'),
		(4, 'variables', 2, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', 'img here', 2, 'venture into variables!'),
		(5, 'getting started', 3, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', 'img here', 1, 'getting started with react!'),
		(6, 'components', 3, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', 'img here', 2, 'create some components!');
