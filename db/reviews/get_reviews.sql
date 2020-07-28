SELECT * 
FROM review
JOIN  users
ON review.user_id = users.user_id
LIMIT 3;