[Uploading DBMS.PROJECT.REPORT.1.1.md…]()

Blood Donation Camp Management System
📖 Introduction
The Blood Donation Camp Management System is a comprehensive database project designed to automate and streamline the processes involved in managing blood donation camps. The system addresses the challenges of manual record-keeping, which can be time-consuming and prone to errors. By digitizing donor registration, blood tracking, and inventory management, this project aims to ensure the efficient and timely availability of safe blood for patients in need, ultimately saving lives.

📊 ER Diagram
An Entity-Relationship (ER) diagram was designed to model the database structure. It visually represents the relationships between various entities such as Blood_Donor, Recipient, Hospital_Info, Blood_Specimen, and BC_Manager.

(The full ER Diagram is available in the project report.)

🗄️ Database Schema
The database is built using SQL and consists of several interconnected tables to maintain data integrity and reduce redundancy.

Tables:

City: Stores city information (City_Pin, City_Name).

Blood_Donor: Contains details of blood donors.

Donor_Phones: Stores contact numbers for donors (supports multiple numbers).

Recipient: Holds information about blood recipients.

Recipient_Phones: Stores contact numbers for recipients.

BC_Manager: Contains details of the Blood Camp managers.

Recording_Staff: Stores information about the staff responsible for data entry.

Disease_Finder: Contains information about the doctors who screen the blood.

Blood_Specimen: Tracks each blood specimen, its status, and who handled it.

Hospital_Info: Stores details of hospitals that request blood.

registers: A linking table between Blood_Donor and Recording_Staff.

records: A linking table between Recipient and Recording_Staff.

gives_order_to_blood_bank: A linking table between Hospital_Info and BC_Manager.

requests_to: A linking table between Recipient and BC_Manager.

✨ Features
Donor and Recipient Management: Efficiently register and manage records for both blood donors and recipients.

Blood Specimen Tracking: Monitor the status of each blood unit, from collection to screening.

Inventory Management: Keep track of blood requests from hospitals and manage the available blood stock.

Reporting and Analytics: Generate various reports, such as the number of donors per city, average blood quantity requested, and the busiest camp managers.

Data Integrity: Utilizes primary keys, foreign keys, and relationships to ensure data consistency across the system.

💻 Technologies Used
Database: MySQL

Language: SQL, PL/SQL (for stored procedures and functions)

🔍 Sample Queries & Procedures
Here are some examples of the SQL queries and procedures implemented in the system to extract meaningful insights.

Find the average blood quantity requested for each blood group:
SELECT reci_Bgrp, AVG(reci_Bqnty) AS avg_quantity
FROM Recipient
GROUP BY reci_Bgrp;

List donors who live in cities with more than one hospital:
SELECT bd.bd_name, c.City_Name
FROM Blood_Donor bd
JOIN City c ON bd.City_Pin = c.City_Pin
WHERE bd.City_Pin IN (
    SELECT City_Pin FROM Hospital_Info
    GROUP BY City_Pin
    HAVING COUNT(*) > 1
);

Stored Procedure to get donors by city:
DELIMITER $$
CREATE PROCEDURE Get_Donors_By_City(IN city_name VARCHAR(100))
BEGIN
    SELECT bd.bd_name
    FROM Blood_Donor bd
    JOIN City c ON bd.City_Pin = c.City_Pin
    WHERE c.City_Name = city_name;
END$$
DELIMITER ;

Function to count donors by blood group:
DELIMITER $$
CREATE FUNCTION Donor_Count_By_Group(p_group VARCHAR(5))
RETURNS INT
DETERMINISTIC
BEGIN
    DECLARE total INT;
    SELECT COUNT(*) INTO total
    FROM Blood_Donor
    WHERE bd_Bgroup = p_group;
    RETURN total;
END$$
DELIMITER ;

👥 Contributors
This project was developed by:

Kanishk Kumar Agarwal - 102313046

Harshhit Gupta - 102303896

Manik Sharma - 102303887

🚀 Conclusion
This project successfully demonstrates how a well-designed database can significantly improve the efficiency and effectiveness of blood donation initiatives. It serves as a critical tool for managing life-saving operations and promotes a more organized, data-driven approach to public health
