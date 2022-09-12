--
-- PostgreSQL database dump
--

-- Dumped from database version 12.12 (Ubuntu 12.12-0ubuntu0.20.04.1)
-- Dumped by pg_dump version 12.12 (Ubuntu 12.12-0ubuntu0.20.04.1)

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

--
-- Name: CardType; Type: TYPE; Schema: public; Owner: postgres
--

CREATE TYPE public."CardType" AS ENUM (
    'credit',
    'debit',
    'credit_debit'
);


ALTER TYPE public."CardType" OWNER TO postgres;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: Cards; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Cards" (
    id integer NOT NULL,
    title text NOT NULL,
    "cardNumber" text NOT NULL,
    "cardholderName" text NOT NULL,
    "securityCode" text NOT NULL,
    "expirationDate" text NOT NULL,
    password text NOT NULL,
    "isVirtual" boolean NOT NULL,
    type public."CardType" NOT NULL,
    "userId" integer NOT NULL
);


ALTER TABLE public."Cards" OWNER TO postgres;

--
-- Name: Cards_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."Cards_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Cards_id_seq" OWNER TO postgres;

--
-- Name: Cards_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."Cards_id_seq" OWNED BY public."Cards".id;


--
-- Name: Credentials; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Credentials" (
    id integer NOT NULL,
    title text NOT NULL,
    url text NOT NULL,
    username text NOT NULL,
    password text NOT NULL,
    "userId" integer NOT NULL
);


ALTER TABLE public."Credentials" OWNER TO postgres;

--
-- Name: Credentials_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."Credentials_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Credentials_id_seq" OWNER TO postgres;

--
-- Name: Credentials_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."Credentials_id_seq" OWNED BY public."Credentials".id;


--
-- Name: Notes; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Notes" (
    id integer NOT NULL,
    title character varying(50) NOT NULL,
    note character varying(1000) NOT NULL,
    "userId" integer NOT NULL
);


ALTER TABLE public."Notes" OWNER TO postgres;

--
-- Name: Notes_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."Notes_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Notes_id_seq" OWNER TO postgres;

--
-- Name: Notes_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."Notes_id_seq" OWNED BY public."Notes".id;


--
-- Name: Users; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Users" (
    id integer NOT NULL,
    email text NOT NULL,
    password text NOT NULL
);


ALTER TABLE public."Users" OWNER TO postgres;

--
-- Name: Users_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."Users_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Users_id_seq" OWNER TO postgres;

--
-- Name: Users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."Users_id_seq" OWNED BY public."Users".id;


--
-- Name: Wifi; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Wifi" (
    id integer NOT NULL,
    title text NOT NULL,
    "networkName" text NOT NULL,
    password text NOT NULL,
    "userId" integer NOT NULL
);


ALTER TABLE public."Wifi" OWNER TO postgres;

--
-- Name: Wifi_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."Wifi_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Wifi_id_seq" OWNER TO postgres;

--
-- Name: Wifi_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."Wifi_id_seq" OWNED BY public."Wifi".id;


--
-- Name: _prisma_migrations; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public._prisma_migrations (
    id character varying(36) NOT NULL,
    checksum character varying(64) NOT NULL,
    finished_at timestamp with time zone,
    migration_name character varying(255) NOT NULL,
    logs text,
    rolled_back_at timestamp with time zone,
    started_at timestamp with time zone DEFAULT now() NOT NULL,
    applied_steps_count integer DEFAULT 0 NOT NULL
);


ALTER TABLE public._prisma_migrations OWNER TO postgres;

--
-- Name: Cards id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Cards" ALTER COLUMN id SET DEFAULT nextval('public."Cards_id_seq"'::regclass);


--
-- Name: Credentials id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Credentials" ALTER COLUMN id SET DEFAULT nextval('public."Credentials_id_seq"'::regclass);


--
-- Name: Notes id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Notes" ALTER COLUMN id SET DEFAULT nextval('public."Notes_id_seq"'::regclass);


--
-- Name: Users id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Users" ALTER COLUMN id SET DEFAULT nextval('public."Users_id_seq"'::regclass);


--
-- Name: Wifi id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Wifi" ALTER COLUMN id SET DEFAULT nextval('public."Wifi_id_seq"'::regclass);


--
-- Data for Name: Cards; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Cards" (id, title, "cardNumber", "cardholderName", "securityCode", "expirationDate", password, "isVirtual", type, "userId") FROM stdin;
1	Meu cartão	1234	JONAS SILVA	9db9894d54c70875d10eb5e4797e58ee3f0c8b7c9231d2d5d085cf09fed2fa9fc9e289cee1faf4e721a5bbf45a6f556fc7b1ecb7b29fa34a1d7eb763f3407f2d9cd1482c1f453fc0343942fc9b241bed4aa35545fd56fd7b2e3090da279b27a389ccb9	09/27	09996197c3df930e03e54ea27e983e3cf29e4675783c5488721a5a21421c9c873683d469a213e171c96b7495db6d7ee8be5eacc543de81d6fa140c5b6c90c11157ebdc21906224148bf5b7d203fe51fa9ebd888b72af4f4ad86a1abb6c3cb1950f3b4b80	f	credit	2
2	Meu cartão 2	1234	JONAS SILVA	999a3b4be7d574dc3a2f67f895c0bfd63e384f42be874fb39cfdf3f5aa9da4156fb405ae0006420c0bc3166a8804509dd34d1234831d626d141b4f0deaad373406c53fefb66be5d8f4e80036af6cf07f84f39b9b759e5d4060470d07816ef8982578e0	09/27	288bb5a0463e83ddc2ec92f15cc775533bf2a88af91a6353fb7e2241b37e2a41bd1fb4ffdf93b16299ad55287876d42508112f28a2daf59f331fc2a0ceda99de94f073cded01d337ce3329e2cb51f1bb3cff0968d5eeebd59f3884f7b75e7a71c949d49a	f	credit	2
\.


--
-- Data for Name: Credentials; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Credentials" (id, title, url, username, password, "userId") FROM stdin;
\.


--
-- Data for Name: Notes; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Notes" (id, title, note, "userId") FROM stdin;
1	Minha anotação super massa demais que anotação leg	Minha anotação	3
\.


--
-- Data for Name: Users; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Users" (id, email, password) FROM stdin;
1	joao@email.com	$2b$10$zbZ3ZXhxyUcSlM2uvxapT.mIHFUEqdppYBNkMyUG5PvtYNYuz55UK
2	jonas@email.com	$2b$10$Uzxfx20kktnr.JNP18ZSquM/.uTSYhgpqTTgLqWvjXh6CwqccViOu
3	maria@email.com	$2b$10$UJtJOTbVvS0dDpE600Fm8eiiA0vIeamu36tI1gS7D1THYfxbVz28a
\.


--
-- Data for Name: Wifi; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Wifi" (id, title, "networkName", password, "userId") FROM stdin;
1	Meu Wi-fi	vizinho	0075ac3616ae054570a3302f9951c107f30c89814fb58e8fcd7e535b8f0dc1143f8ce8b7202899e20c3f1c3db9a1e31b0e46a5a5425340cfc71dff8a9621b1b504b560c220c5e813f98093afbb077917e1d1f6ed4073dc8bc8505fbf6a38db40156e1ddb	3
2	Meu Wi-fi	vizinho	e612158c85b4745a54c32f3e806409d6a59ae3750c99c16d58eea41c019f0230d7c12c144d7ed25c34537280fc5e1c53ebb74a3b940f4a49573628bd865cf853ffee104af20e12ea8a9e78a13ae4e5c3665aab62f7a12e3fb19e37e4a6c043167ddf7ba4	3
\.


--
-- Data for Name: _prisma_migrations; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public._prisma_migrations (id, checksum, finished_at, migration_name, logs, rolled_back_at, started_at, applied_steps_count) FROM stdin;
54d328fa-cb6b-4dd6-b08d-de8278e39e65	f6683ec8904ac4a52b7bf190ec44030e5d759b5015c8659787ee3388be9fe5b4	2022-09-07 13:42:12.346745+00	20220907134212_add_users_table	\N	\N	2022-09-07 13:42:12.332382+00	1
7f8798df-0bb4-4029-b1d3-c0f51c236dcc	5fcdb33e8ac296149a526d854a44ff973b582af3b39bac17591bf7db4c4c88cd	2022-09-07 21:52:47.270465+00	20220907215247_change_the_name_of_the_users_table_to_users	\N	\N	2022-09-07 21:52:47.227757+00	1
7feceac6-c8c3-488b-9a07-29da42c54ae1	2ff1fac76c32d6aca88a3725ad21419fa4791138843c1b04cc8d0de371e60664	2022-09-07 22:02:05.193278+00	20220907220205_add_credentials_table	\N	\N	2022-09-07 22:02:05.180197+00	1
17215be0-9ae3-43fb-9fe2-ce27fd59d3e5	c606188e663ee061369600884a0aa22f7b4bf341b4482044b879c02ab383fd81	2022-09-07 22:09:32.617653+00	20220907220932_adds_a_relationship_between_the_user_and_credential_tables	\N	\N	2022-09-07 22:09:32.607663+00	1
61f91b62-3622-4b07-8492-78e2835bc04c	d90b94407f5b295d64bde6e2fe493117a150155e15085050160cb464a4d4248f	2022-09-07 22:58:44.180062+00	20220907225844_add_unique_in_the_title_and_user_id_of_the_credentials_table	\N	\N	2022-09-07 22:58:44.169266+00	1
5265a3fa-54fc-49d3-b8ad-a8bb231250de	c0af7ca89a8d3002f7a6bc6ca921a850f849ad433f9954e0fbc0045614e310d0	2022-09-09 13:32:47.051025+00	20220909133246_add_notes_table	\N	\N	2022-09-09 13:32:47.016532+00	1
4b2d30ed-024d-4d52-a93b-cb2dc25b6770	a08efd043a7d3da1edc23d56131704431d30f440d5c4a26e8e19e9ddec05aa5a	2022-09-09 17:19:01.8536+00	20220909171901_add_cards_table	\N	\N	2022-09-09 17:19:01.818568+00	1
c9703985-1376-4f92-90c6-ed8855e8f3a0	372812bdf56cda2fd29343ba20743bb2840a27e5e1bd3526f954245357a969c0	2022-09-09 19:10:27.948859+00	20220909191027_add_wifi_table	\N	\N	2022-09-09 19:10:27.923223+00	1
\.


--
-- Name: Cards_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Cards_id_seq"', 3, true);


--
-- Name: Credentials_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Credentials_id_seq"', 14, true);


--
-- Name: Notes_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Notes_id_seq"', 2, true);


--
-- Name: Users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Users_id_seq"', 3, true);


--
-- Name: Wifi_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Wifi_id_seq"', 3, true);


--
-- Name: Cards Cards_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Cards"
    ADD CONSTRAINT "Cards_pkey" PRIMARY KEY (id);


--
-- Name: Credentials Credentials_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Credentials"
    ADD CONSTRAINT "Credentials_pkey" PRIMARY KEY (id);


--
-- Name: Notes Notes_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Notes"
    ADD CONSTRAINT "Notes_pkey" PRIMARY KEY (id);


--
-- Name: Users Users_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_pkey" PRIMARY KEY (id);


--
-- Name: Wifi Wifi_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Wifi"
    ADD CONSTRAINT "Wifi_pkey" PRIMARY KEY (id);


--
-- Name: _prisma_migrations _prisma_migrations_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public._prisma_migrations
    ADD CONSTRAINT _prisma_migrations_pkey PRIMARY KEY (id);


--
-- Name: Cards_title_userId_key; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX "Cards_title_userId_key" ON public."Cards" USING btree (title, "userId");


--
-- Name: Credentials_title_userId_key; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX "Credentials_title_userId_key" ON public."Credentials" USING btree (title, "userId");


--
-- Name: Notes_title_userId_key; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX "Notes_title_userId_key" ON public."Notes" USING btree (title, "userId");


--
-- Name: Users_email_key; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX "Users_email_key" ON public."Users" USING btree (email);


--
-- Name: Cards Cards_userId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Cards"
    ADD CONSTRAINT "Cards_userId_fkey" FOREIGN KEY ("userId") REFERENCES public."Users"(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: Credentials Credentials_userId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Credentials"
    ADD CONSTRAINT "Credentials_userId_fkey" FOREIGN KEY ("userId") REFERENCES public."Users"(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: Notes Notes_userId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Notes"
    ADD CONSTRAINT "Notes_userId_fkey" FOREIGN KEY ("userId") REFERENCES public."Users"(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: Wifi Wifi_userId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Wifi"
    ADD CONSTRAINT "Wifi_userId_fkey" FOREIGN KEY ("userId") REFERENCES public."Users"(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- PostgreSQL database dump complete
--

