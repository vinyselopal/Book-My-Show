CREATE TABLE 
movies (
id integer PRIMARY KEY,
name VARCHAR NOT NULL,
length VARCHAR NOT NULL
);

CREATE TABLE
shows (
id integer PRIMARY KEY,
movie_id integer REFERENCES movies(id) NOT NULL,
start_time time NOT NULL,
price NUMERIC NOT NULL
);

CREATE TABLE
bookings (
id integer PRIMARY KEY,
seat_id integer REFERENCES seats(id) NOT NULL,
show_id integer REFERENCES shows(id) NOT NULL,
booked_by integer REFERENCES users(id) NOT NULL,
booking_details json NOT NULL
);

CREATE TABLE 
users (
id integer PRIMARY KEY,
name VARCHAR NOT NULL
);

CREATE TABLE 
theaters (
id integer PRIMARY KEY,
name VARCHAR NOT NULL,
address json NOT NULL,
city VARCHAR NOT NULL
);

CREATE TABLE
rooms (
id integer PRIMARY KEY,
theater_id integer REFERENCES theaters(id) NOT NULL
);

CREATE TABLE
seats (
id integer PRIMARY KEY,
room_id integer REFERENCES rooms(id),
theater_id integer REFERENCES theaters(id)
);
