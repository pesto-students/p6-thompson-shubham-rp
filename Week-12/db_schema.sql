-- WAREHOUSE DATABASE

CREATE DATABASE WAREHOUSE;

USE WAREHOUSE;

-- CITIES TABLE 

CREATE TABLE CITIES(
    CITY_ID INTEGER AUTO_INCREMENT PRIMARY KEY,
    CITY CHAR(20),
    STATE CHAR(20)
);

-- WAREHOUSES TABLE

CREATE TABLE WAREHOUSES(
    WID INTEGER AUTO_INCREMENT PRIMARY KEY,
    WNAME CHAR(30),
    LOCATION CHAR(20),
    -- EXTRA CONTEXT JSON,
    CITY_ID INTEGER,
    FOREIGN KEY (CITY_ID) REFERENCES CITIES(CITY_ID)
);

-- STORES TABLE

CREATE TABLE STORES(
    SID INTEGER AUTO_INCREMENT PRIMARY KEY,
    STORE_NAME CHAR(20),
    LOCATION_CITY CHAR(20),
    WID INTEGER,
    FOREIGN KEY (WID) REFERENCES WAREHOUSES(WID)
);

-- CUSTOMERS TABLE

CREATE TABLE CUSTOMERS(
    CNO INTEGER AUTO_INCREMENT PRIMARY KEY,
    CNAME CHAR(20),
    ADDR VARCHAR(50),
    CU_CITY CHAR(20)
);

-- ORDERS TABLE

CREATE TABLE ORDERS(
    ONO INTEGER AUTO_INCREMENT PRIMARY KEY,
    ODATE DATE,
    CNO INTEGER,
    FOREIGN KEY (CNO) REFERENCES CUSTOMERS(CNO)
);

-- ITEMS TABLE

CREATE TABLE ITEMS(
    ITEMNO INTEGER AUTO_INCREMENT PRIMARY KEY,
    DESCRIPTION TEXT,
    WEIGHT DECIMAL(5,2),
    COST DECIMAL(5,2)
);

-- ITEMS TO ORDERS TABLE

CREATE TABLE ITEMS_ORDERS(
    ITEM_ORDER_ID INTEGER AUTO_INCREMENT PRIMARY KEY,
    ORDERED_QUANTITY INTEGER,
    ITEMNO INTEGER,
    ONO INTEGER,
    FOREIGN KEY (ITEMNO) REFERENCES ITEMS(ITEMNO),
    FOREIGN KEY (ONO) REFERENCES ORDERS(ONO)
);
 
-- STORES TO ITEMS TABLE

CREATE TABLE STORES_ITEMS(
    STORE_ITEM_ID INTEGER AUTO_INCREMENT PRIMARY KEY,
    QUANTITY INTEGER,
    SID INTEGER,
    ITEMNO INTEGER,
    FOREIGN KEY (SID) REFERENCES STORES(SID),
    FOREIGN KEY (ITEMNO) REFERENCES ITEMS(ITEMNO)

);

-- CITY DATA

INSERT INTO CITIES(CITY, STATE) VALUES ('PANAJI', 'GOA');
INSERT INTO CITIES(CITY, STATE) VALUES ('MUMBAI', 'MAHARASHTRA');
INSERT INTO CITIES(CITY, STATE) VALUES ('BANGALORE', 'KARNATAKA');

-- WAREHOUSE DATA
INSERT INTO WAREHOUSES(WNAME, LOCATION, CITY_ID) VALUES ('WAREHOUSE_1', 'MIRAMAR' ,1);
INSERT INTO WAREHOUSES(WNAME, LOCATION, CITY_ID) VALUES ('WAREHOUSE_2', 'BANDRA' ,2);
INSERT INTO WAREHOUSES(WNAME, LOCATION, CITY_ID) VALUES ('WAREHOUSE_3', 'NAVI MUMBAI' ,2);
INSERT INTO WAREHOUSES(WNAME, LOCATION, CITY_ID) VALUES ('WAREHOUSE_4', 'KORAMANGALA' ,3);

-- STORES DATA
INSERT INTO STORES(STORE_NAME, LOCATION_CITY, WID ) VALUES('STORE_1', 'CHURCHGATE', 2);
INSERT INTO STORES(STORE_NAME, LOCATION_CITY, WID ) VALUES('STORE_2', 'BELAGAVI', 1);
INSERT INTO STORES(STORE_NAME, LOCATION_CITY, WID ) VALUES('STORE_3', 'CUBBON PARK', 4);

-- CUSTOMERS DATA
INSERT INTO CUSTOMERS(CNAME, ADDR, CU_CITY) VALUES('SACHIN TENDULKAR', 'BANDRA_HOUSE', 'MUMBAI');
INSERT INTO CUSTOMERS(CNAME, ADDR, CU_CITY) VALUES('RAHUL DRAVID', 'INDIRANAGAR', 'BANGALORE');
INSERT INTO CUSTOMERS(CNAME, ADDR, CU_CITY) VALUES('MS DHONI', 'MSD_HOUSE', 'CHENNAI');

-- ORDERS DATA
INSERT INTO ORDERS(ODATE,CNO) VALUES('2022-12-31', 1);
INSERT INTO ORDERS(ODATE,CNO) VALUES('2023-01-08', 2);

-- ITEMS DATA
INSERT INTO ITEMS(DESCRIPTION, WEIGHT, COST) VALUES('WATCH', 0.12, 50.00);
INSERT INTO ITEMS(DESCRIPTION, WEIGHT, COST) VALUES('MOBILE PHONE', 0.55, 90.00);

-- ITEMS_ORDERS DATA
INSERT INTO ITEMS_ORDERS(ORDERED_QUANTITY, ONO, ITEMNO) VALUES(3, 1, 1);
INSERT INTO ITEMS_ORDERS(ORDERED_QUANTITY, ONO, ITEMNO) VALUES(1, 2, 2);
INSERT INTO ITEMS_ORDERS(ORDERED_QUANTITY, ONO, ITEMNO) VALUES(2, 1, 2);

-- STORE_ITEMS DATA
INSERT INTO STORES_ITEMS(QUANTITY, SID, ITEMNO) VALUES(30, 1, 1);
INSERT INTO STORES_ITEMS(QUANTITY, SID, ITEMNO) VALUES(8, 2, 2);

-- DISPLAY ALL TABLES
SELECT * FROM CITIES;
SELECT * FROM WAREHOUSES;
SELECT * FROM STORES;
SELECT * FROM CUSTOMERS;
SELECT * FROM ORDERS;
SELECT * FROM ITEMS;
SELECT * FROM ITEMS_ORDERS;
SELECT * FROM STORES_ITEMS;