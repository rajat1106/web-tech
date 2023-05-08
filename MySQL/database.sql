create schema 'world'.'wt_tech'(
    id INT primary key,
    FirstName VARCHAR(255),
    LastName VARCHAR(255),
    prn LONG
);
 
INSERT INTO w_tech(id,FirstName,LastName,prn) values (1,'Rajat', 'Harne', 12010059);
INSERT INTO w_tech(id,FirstName,LastName,prn) values (2,'Saharsh', 'Samir', 12010069);
INSERT INTO w_tech(id,FirstName,LastName,prn) values (3,'Rishab', 'khandelwal', 12010059);
INSERT INTO w_tech(id,FirstName,LastName,prn) values (4,'adam', 'tate', 120156246);

UPDATE w_tech
SET FirstName= 'arpit'
WHERE id=3;

ALTER TABLE w_tech
ADD City varchar(255);

DELETE FROM w_tech 
WHERE id=2;

SELECT *, Count(prn) As Duplicate from w_tech group by prn having Count(prn) > 1;


SELECT * FROM w_tech;