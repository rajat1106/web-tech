create database wt_tech;
use web_tech;
CREATE TABLE w_tech (
    id INT primary key,
    FirstName VARCHAR(255),
    LatName VARCHAR(255),
    prn LONG
);
 
INSERT INTO w_tech(id,FirstName,LastName,prn) values (1, Rajat, Harne, 12010059);
INSERT INTO w_tech(id,FirstName,LastName,prn) values (2, Saharsh, Samir, 12010069);
INSERT INTO w_tech(id,FirstName,LastName,prn) values (3, Rishab, khandelwal, 12010059);

UPDATE w_tech
SET FirstName= 'arpit'
WHERE id=3;

SELECT * FROM w_tech;