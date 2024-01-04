
-- Exported from QuickDBD: https://www.quickdatabasediagrams.com/
-- NOTE! If you have used non-SQL datatypes in your design, you will have to change these here.


CREATE TABLE "netflix_test_data" (
    "Title" varchar(50)   NOT NULL,
    "OrginalTitle" varchar(50),
    "Release_Date" date   NOT NULL,
    "Hours_Viewed" bigint   NOT NULL,
    "Number_of_Ratings" int   NOT NULL,
    "Rating" decimal   NOT NULL,
    "Genre" varchar(50)   NOT NULL,
    "Country" varchar(50)   NOT NULL,
    "TV_Rating" varchar(50)   NOT NULL,
    "Description" varchar(2000)   NOT NULL
);

