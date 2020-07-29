UPDATE product 
SET product_name = ${name},
price = ${price},
product_image1 = ${image1},
product_image2 = ${image2},
product_image3 = ${image3},
product_description = ${description}
WHERE product_id = ${id}
RETURNING product_name, price, product_image1, product_image2, product_image3, product_description;


-- SET product_image1 = ${image1},
-- SET product_image2 = ${image2},
-- SET product_image3 = ${image3},
-- SET product_description = ${description}