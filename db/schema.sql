USE burger_db;

-- Create the table actors.
CREATE TABLE burgers (
  id int AUTO_INCREMENT,
  burger_name varchar(60) NOT NULL,
  devoured BOOLEAN DEFAULT false,
  mytimestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY(id)
);
