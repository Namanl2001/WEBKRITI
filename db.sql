CREATE TABLE users(
	user_id int(3) PRIMARY KEY AUTO_INCREMENT,
    full_name varchar(35) ,
    dob varchar(10) ,
    sex varchar(1),
    phone bigint (10),
    email varchar(45),
    user_name varchar(35),
    pwdHash CHAR(60)
    );

     CREATE TABLE contacts(
    register_id int NOT NULL auto_increment,
    user_id int,
    event_id varchar(1),
    clg_name varchar(50),
    fname varchar(45),
    phone bigint(10),
	PRIMARY KEY (register_id),
    FOREIGN KEY (user_id) REFERENCES users(user_id)
); 