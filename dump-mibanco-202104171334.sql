PGDMP         "                y            mibanco    13.2    13.2 
    ?           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            ?           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            ?           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            ?           1262    16394    mibanco    DATABASE     f   CREATE DATABASE mibanco WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'Spanish_Colombia.1252';
    DROP DATABASE mibanco;
                postgres    false            ?            1259    16409    accounts    TABLE     ?   CREATE TABLE public.accounts (
    id character varying NOT NULL,
    amount double precision NOT NULL,
    customerid character varying NOT NULL,
    openedat date NOT NULL
);
    DROP TABLE public.accounts;
       public         heap    postgres    false            ?            1259    16401 	   customers    TABLE     ?   CREATE TABLE public.customers (
    id character varying NOT NULL,
    name character varying,
    lastname character varying,
    email character varying
);
    DROP TABLE public.customers;
       public         heap    postgres    false            ?          0    16409    accounts 
   TABLE DATA           D   COPY public.accounts (id, amount, customerid, openedat) FROM stdin;
    public          postgres    false    201            ?          0    16401 	   customers 
   TABLE DATA           >   COPY public.customers (id, name, lastname, email) FROM stdin;
    public          postgres    false    200            -           2606    16416    accounts accounts_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public.accounts
    ADD CONSTRAINT accounts_pkey PRIMARY KEY (id);
 @   ALTER TABLE ONLY public.accounts DROP CONSTRAINT accounts_pkey;
       public            postgres    false    201            +           2606    16408    customers customers_pkey 
   CONSTRAINT     V   ALTER TABLE ONLY public.customers
    ADD CONSTRAINT customers_pkey PRIMARY KEY (id);
 B   ALTER TABLE ONLY public.customers DROP CONSTRAINT customers_pkey;
       public            postgres    false    200            ?   H   x?m??? ??^??{???:?|"E??yhY!?9EL?M?Ѡs???ޑ?????1??????? ???      ?   f   x?342615?t?K??M,???L??,It?L????K????s?'???d?s?f?d&?q?%&)??????*Ks##??Ԥ?b?
????D?bɰ=... ;$w      
    ?           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            ?           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            ?           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            ?           1262    16394    mibanco    DATABASE     f   CREATE DATABASE mibanco WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'Spanish_Colombia.1252';
    DROP DATABASE mibanco;
                postgres    false            ?            1259    16409    accounts    TABLE     ?   CREATE TABLE public.accounts (
    id character varying NOT NULL,
    amount double precision NOT NULL,
    customerid character varying NOT NULL,
    openedat date NOT NULL
);
    DROP TABLE public.accounts;
       public         heap    postgres    false            ?            1259    16401 	   customers    TABLE     ?   CREATE TABLE public.customers (
    id character varying NOT NULL,
    name character varying,
    lastname character varying,
    email character varying
);
    DROP TABLE public.customers;
       public         heap    postgres    false            ?          0    16409    accounts 
   TABLE DATA           D   COPY public.accounts (id, amount, customerid, openedat) FROM stdin;
    public          postgres    false    201   ?	       ?          0    16401 	   customers 
   TABLE DATA           >   COPY public.customers (id, name, lastname, email) FROM stdin;
    public          postgres    false    200   R        -           2606    16416    accounts accounts_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public.accounts
    ADD CONSTRAINT accounts_pkey PRIMARY KEY (id);
 @   ALTER TABLE ONLY public.accounts DROP CONSTRAINT accounts_pkey;
       public            postgres    false    201            +           2606    16408    customers customers_pkey 
   CONSTRAINT     V   ALTER TABLE ONLY public.customers
    ADD CONSTRAINT customers_pkey PRIMARY KEY (id);
 B   ALTER TABLE ONLY public.customers DROP CONSTRAINT customers_pkey;
       public            postgres    false    200           