CREATE DATABASE ucode_web;
CREATE USER 'mbunin'@'localhost' IDENTIFIED WITH mysql_native_password BY 'securepass';
GRANT ALL PRIVILEGES ON ucode_web . * TO 'mbunin'@'localhost';
FLUSH PRIVILEGES;