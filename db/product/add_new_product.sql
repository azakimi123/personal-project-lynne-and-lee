INSERT INTO product (
    product_name,
    price, 
    product_description,
    product_image1,
    product_image2,
    product_image3 
) VALUES (
    ${name},
    ${price},
    ${description},
    ${image1},
    ${image2},
    ${image3}
)
RETURNING product_id, product_name, price, product_image1, product_image2, product_image3, product_description;