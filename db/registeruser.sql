insert into users(
    username, password) 
    values ( $1, $2)
returning *

-- update users
-- set username = $1, password = $2
