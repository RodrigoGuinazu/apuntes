-- Tabla roles

INSERT INTO roles (type,created_at) VALUES ('admin',NOW());
INSERT INTO roles (type,created_at) VALUES ('user',NOW());

-- Tabla users

INSERT INTO users (email, password, name, role_id, created_at) VALUES ('admin@hotmail.com', '$2b$10$91Umf3AjCqjb5fPuGE1.Su5DgJgE8KtBqdfCSPrkQ060m3ARhjMQu', 'Admin', 1, NOW());
INSERT INTO users (email, password, name, role_id, created_at) VALUES ('rodrigo@hotmail.com', '$2b$10$y0PFqCKB3xKZ4nMHsG/wu.nA/6b7BSGtgBNoA7hlUuBLXwHFZu6kW', 'Rodri', 2, NOW());

-- Tabla addresses

INSERT INTO addresses (city, street, user_id_address, created_at) VALUES ('Buenos Aires','Monroe 860', 1, NOW());

-- Tabla products

INSERT INTO products (name, price, image, created_at) VALUES ('Café Amalfi', 700, 'amalfi_mi_cafe.jpg', NOW());

INSERT INTO products (name, price, image, created_at) VALUES ('Café Zafiro', 800, 'zafiro_mi_cafe.jpg', NOW());

INSERT INTO products (name, price, image, created_at) VALUES ('Cafetera Nespresso Inissia', 11000, 'cafetera_nespresso.jpg', NOW());

-- Tabla users_products

INSERT INTO users_products (product_id, user_id, created_at) VALUES (1, 1, NOW());
INSERT INTO users_products (product_id, user_id, created_at) VALUES (3, 2, NOW());