CREATE TABLE users(
    user_id SERIAL PRIMARY KEY,
    username VARCHAR(100),
    user_email VARCHAR(300),
    user_password VARCHAR(300),
    user_profile_pic TEXT,
    is_admin BOOLEAN
);


CREATE TABLE orders(
    order_id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(user_id),
    date DATE 
);

CREATE TABLE product(
    product_id SERIAL PRIMARY KEY,
    product_name VARCHAR(200),
    price INT,
    product_descripton VARCHAR(500),
    product_image1 TEXT,
    product_image2 TEXT,
    product_image3 TEXT
);

CREATE TABLE order_items(
    order_item_id SERIAL PRIMARY KEY,
    product_id INT REFERENCES product(product_id),
    order_id INT REFERENCES orders(order_id)
);

CREATE TABLE review(
    review_id SERIAL PRIMARY KEY,
    comment VARCHAR(350),
    review_image TEXT,
    user_id INT REFERENCES users(user_id),
    product_id INT REFERENCES product(product_id)
);


-- inserting data
INSERT INTO product (
    product_name,
    price, 
    product_descripton,
    product_image1,
    product_image2,
    product_image3 
) VALUES (
    'First Birthday Cake Topper',
    20,
    'This cake topper is approximately 2”x3.5” with a 10” skewer attached for cakes or a 6” skewer attached for cupcakes. The number can be made with metallic gold or sparkle gold felt.',
    'https://i.etsystatic.com/18762162/r/il/b79f96/1863949046/il_794xN.1863949046_77rv.jpg',
    'https://i.etsystatic.com/18762162/r/il/f04f80/1839836709/il_794xN.1839836709_pgry.jpg',
    'https://i.etsystatic.com/18762162/r/il/ec1748/2140544295/il_794xN.2140544295_cu6l.jpg'
);

INSERT INTO users (
    username,
    user_email,
    user_password,
    user_profile_pic,
    is_admin
) VALUES (
    'aaron3',
    'aaron3@mail.com',
    'pass3',
    'https://image.flaticon.com/icons/svg/2948/2948035.svg',
    TRUE
);


INSERT INTO orders (
    user_id,
    date
) VALUES (
    2,
    (SELECT CURRENT_DATE)
);
