create table houser (
    id serial primary key,
    user_id INTEGER REFERENCES users(users_id),
    name text,
    loan money,
    monthly_mortgage money,
    recommended_rent money,
    desired_rent money,
    address text,
    city text,
    state text,
    zip INTEGER,
    image text
) 

insert into houser (user_id, name, loan, monthly_mortgage, recommended_rent, desired_rent, address, city, state, zip, image) 
values (1,'Secluded', 5000000, 20000, 1000, 2000, 'The Place', 'Redding', 'CA', 96001, 'http://justcope.co/wp-content/uploads/2018/03/beautiful-house-pictures-nice-small-houses-beautiful-house-plans-with-photos-best-houses-ideas-on-homes-nice-houses-and-beautiful-house-image-in-bangladesh.jpg' ),
         (2,'Placer', 9000000, 30000, 2000, 5000, 'My Placer', 'Provo', 'UT', 84604, 'http://crichunter.com/wp-content/uploads/2018/06/realy-nice-house-images-really-nice-houses-for-cheap.jpg')


create table users(
    users_id serial primary key,
    username text,
    password text
)

insert into users(
    username, password) values ('claycad', 'adam'),
                                         ('user', 'user1')