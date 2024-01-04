--
-- PostgreSQL database dump
--

-- Dumped from database version 16.0
-- Dumped by pg_dump version 16.0

-- Started on 2023-12-29 21:10:29

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 215 (class 1259 OID 57397)
-- Name: Netflix_Test_Data; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Netflix_Test_Data" (
    "Title" character varying(50) NOT NULL,
    "OrginalTitle" character varying(50),
    "Release_Date" date NOT NULL,
    "Hours_Viewed" bigint NOT NULL,
    "Number_of_Ratings" integer NOT NULL,
    "Rating" numeric NOT NULL,
    "Genre" character varying(50) NOT NULL,
    "Country" character varying(50) NOT NULL,
    "TV_Rating" character varying(50) NOT NULL,
    "Description" character varying(2000) NOT NULL
);


ALTER TABLE public."Netflix_Test_Data" OWNER TO postgres;

--
-- TOC entry 4829 (class 0 OID 57397)
-- Dependencies: 215
-- Data for Name: Netflix_Test_Data; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Netflix_Test_Data" ("Title", "OrginalTitle", "Release_Date", "Hours_Viewed", "Number_of_Ratings", "Rating", "Genre", "Country", "TV_Rating", "Description") FROM stdin;
The Night Agent	\N	2023-03-23	812100000	7696	6	Comedy	USA,China,Korea	R	Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
Ginny & Georgia	\N	2023-01-05	665100000	5216	5.7	Action	Global	PG-13	Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
The Glory	더 글로리: 시즌 1	2022-12-30	622800000	11869	8.4	dystopia	USA,China,Korea	M	Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
Wednesday	\N	2022-11-23	507700000	23545	73	Animation	Global	PG	Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
Queen Charlotte: A Bridgerton Story	\N	2023-05-04	503000000	50077	7.4	Horror	Global	G	Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
You	\N	2023-02-09	440600000	45624	6.6	Sport	China	R	Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
La Reina del Sur	\N	2022-12-30	429600000	3323	7.9	Fantasy	USA,China,Korea	PG-13	Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
Outer Banks	\N	2023-02-23	402500000	725524	6.1	Western, Mystery	Germany	M	Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
Ginny & Georgia	\N	2021-02-24	302100000	5216	5.7	Adventure	Global	PG	Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
FUBAR	\N	2023-05-25	266200000	35	7.6	Crime	Global	PG	Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
Manifest	\N	2022-11-04	262600000	64	8.4	Drama	Europe	G	Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
Kaleidoscope: Limited Series	\N	2023-01-01	252500000	2364	9.5	Family, Horror	Japan	R	Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
Firefly Lane	\N	2022-12-02	251500000	11869	8.4	Family, Horror	Global	PG-13	Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
The Mother	\N	2023-05-12	249900000	44102	5.6	Horror	USA,China,Korea	M	Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
Physical: 100	피지컬: 100: 시즌 1	2023-01-24	235000000	123	7.6	Sport	USA	R	Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
Crash Course in Romance: Limited Series	 일타 스캔들: 리미티드 시리즈	2023-01-14	234800000	3963	7.8	Comedy	France	PG-13	Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
Love Is Blind	\N	2023-03-24	229700000	72	8.5	Sport	Global	M	Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
BEEF	\N	2023-04-06	221100000	7143	5.5	Horror	Germany	PG	Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
The Diplomat	\N	2023-04-20	214100000	65	8.9	Dystopia	USA,China,Korea	G	Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
\.


-- Completed on 2023-12-29 21:10:29

--
-- PostgreSQL database dump complete
--

