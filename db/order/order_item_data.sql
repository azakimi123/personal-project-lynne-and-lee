SELECT product.product_id, product.product_name, COUNT(product.product_id) AS OCCURENCES
FROM product
JOIN order_items
ON order_items.product_id = product.product_id
JOIN orders
ON order_items.order_id = orders.order_id
JOIN users 
ON users.user_id = orders.user_id
GROUP BY product.product_id;