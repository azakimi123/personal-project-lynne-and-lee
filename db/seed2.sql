-- query for getting orders and products
SELECT product.product_name, product.product_id, product.price, orders.date, users.username, users.user_id
FROM product
JOIN order_items
ON order_items.product_id = product.product_id
JOIN orders
ON order_items.order_id = orders.order_id
JOIN users 
ON users.user_id = orders.user_id;