-- 1. create database
CREATE DATABASE binar_db;

-- 2. create table employee
CREATE TABLE employee(
  id SERIAL PRIMARY KEY,
  nama VARCHAR(255) NOT NULL,
  tanggal_lahir DATE NOT NULL,
  jabatan VARCHAR(20),
  bekerja_sejak DATE not null
);

-- 3. Insert data into table
INSERT INTO employee(nama, tanggal_lahir, jabatan, bekerja_sejak)
VALUES('sabrina', '1980/12/31', 'CEO','2022/01/04'),
      ('Mas Gun', '1992/05/01', 'CTO', '2022/04/20');


-- 4. select ALL columns (*); * = ALL
SELECT * FROM employee;

-- 5. select berdasarkan column tertentu
SELECT nama, bekerja_sejak FROM employee;

-- 6. insert new employee
INSERT INTO employee(nama, tanggal_lahir, jabatan, bekerja_sejak)
VALUES ('Ari', '2000/01/01', 'Developer', '2022/07/01');

-- 7. select data with condition
SELECT * FROM employee WHERE bekerja_sejak < '2022/04/30';

-- 8. select with condition (OR)
SELECT * FROM employee WHERE id = 1 OR id != 2;

-- 9. test insert > max type size
INSERT INTO employee(nama, tanggal_lahir, jabatan, bekerja_sejak)
VALUES ('Test gagal', '2000/01/01', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', '2022/07/01');

-- 10. Update data
UPDATE employee
    SET jabatan = null
WHERE id = 3;

-- 11. Delete Data
DELETE FROM employee WHERE id = 4;

-- 12. Drop table column
ALTER TABLE employee DROP COLUMN jabatan;

-- 13. Add Jabatan colum (Again)
ALTER TABLE employee ADD COLUMN jabatan VARCHAR(20);