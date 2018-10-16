select * from houser
where user_id = $1 and desired_rents > $2
-- where desired_rents > $1