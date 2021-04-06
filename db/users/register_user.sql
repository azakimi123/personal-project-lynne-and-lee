INSERT INTO users (
    username,
    user_email,
    user_password,
    user_profile_pic,
    is_admin
) VALUES (
    ${username},
    ${email},
    ${hash},
    'https://image.flaticon.com/icons/svg/2948/2948035.svg',
    TRUE   
)
returning user_id, username, user_email, user_profile_pic;
