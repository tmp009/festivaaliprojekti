drop database if exists festarit;
create database festarit;

use festarit;

create table kaupunki (
    id integer not null primary key,
    nimi varchar(100)
);

insert into kaupunki values(1, 'Hyvinkää');
insert into kaupunki values(2, 'Nummijärvi');
insert into kaupunki values(3, 'Helsinki');
insert into kaupunki values(4, 'Turku');
insert into kaupunki values(5, 'Joensuu');


create table festivaali (
    id int not null primary key,
    nimi varchar(100) not null,
    aika date,
    paikka int,
    osallistujat int
);

insert into festivaali values(1, 'Ilosaarirock', STR_TO_DATE('15.7.2022', '%d.%m.%Y'), 5, 1);
insert into festivaali values(2, 'Knotfest', STR_TO_DATE('8.12.2022', '%d.%m.%Y'), 4, 2);
insert into festivaali values(3, 'Nummirock', STR_TO_DATE('22.6.2022', '%d.%m.%Y'), 2, 3);
insert into festivaali values(4, 'Rockfest', STR_TO_DATE('2.6.2022', '%d.%m.%Y'), 1, 4);
insert into festivaali values(5, 'Ruisrock', STR_TO_DATE('8.7.2022', '%d.%m.%Y'), 4, 5);
insert into festivaali values(6, 'Tuska', STR_TO_DATE('1.7.2022', '%d.%m.%Y'), 3, 6);

create table artisti (
    id int not null primary key,
    nimi varchar(100),
    maa varchar(2),
    kuvaus varchar(500)
);

insert into artisti values(1, 'Amorphis', 'FI', 'Suomalainen metalliyhtye, jonka musiikissa on lähes kaikilla albumeilla vaikutteita suomalaisesta mytologiasta.');
insert into artisti values(2, 'Beast in Black', 'FI', 'Suomessa vuonna 2015 perustettu heavy metal -yhtye.');
insert into artisti values(3, 'Blind Channel', 'FI', 'Oulussa vuonna 2013 perustettu kuusihenkinen violent pop-yhtye.');
insert into artisti values(4, 'Carcass', 'UK', 'Brittiläinen death metal/grindcore -yhtye, jonka perustivat kitaristi Bill Steer (Napalm Death) ja rumpali Ken Owen.');
insert into artisti values(5, 'Diablo', 'FI', 'Diablo on vuonna 1995 perustettu suomalainen metalliyhtye.');
insert into artisti values(6, 'Hammerfall', 'SE', 'Vuonna 1993 perustettu ruotsalainen metalliyhtye. Yhtyeen johtohahmo ja perustajajäsen on kitaristi Oscar Dronjak.');
insert into artisti values(7, 'Iron Maiden', 'UK', 'Brittiläinen metallimusiikkia esittävä yhtye, jonka basisti Steve Harris perusti Lontoossa vuonna 1975.');
insert into artisti values(8, 'Louie Blue', 'FI', 'Alec Moborg aka Louie Blue on vuonna 2002 syntynyt musiikintekijä Turusta.');
insert into artisti values(9, 'Major Lazer', 'US', 'Yhdysvaltalainen elektronisen musiikin yhtye, jonka perustivat tuottajat Diplo ja Switch vuonna 2008.');
insert into artisti values(10, 'Mokoma', 'FI', 'Lappeenrannasta lähtöisin oleva suomenkielistä metallia esittävä yhtye.')
insert into artisti values(11, 'Moon Shot', 'FI', 'Perustettu vuonna 2020. Jäseninä Ville Malja (Lapko), Jussi Ylikoski ja Mikko Hakila (Disco Ensemble) sekä Henkka Seppälä (Children of Bodom).');
insert into artisti values(12, 'Nightwish', 'FI', 'Suomalainen, Kiteeltä kotoisin oleva vuonna 1996 perustettu sinfonista metallia esittävä yhtye.');
insert into artisti values(13, 'Scorpions', 'DE', 'Saksalainen hard rock -yhtye, joka perustettiin Hannoverissa vuonna 1965.');
insert into artisti values(14, 'Sepultura', 'BR', 'Brasilialainen groove metal/thrash metal -yhtye.');

-- osallistuvat taitelijat--
create table osallistuja (
    festivaali int not null,
    artisti int not null
);

insert into osallistuja values(1, 12);
insert into osallistuja values(1, 3);
insert into osallistuja values(1, 2);
insert into osallistuja values(1, 11);

insert into osallistuja values(2, 12);
insert into osallistuja values(2, 2);
insert into osallistuja values(2, 11);

insert into osallistuja values(3, 5);
insert into osallistuja values(3, 6);
insert into osallistuja values(3, 14);

insert into osallistuja values(4, 7);
insert into osallistuja values(4, 13);
insert into osallistuja values(4, 12);
insert into osallistuja values(4, 5);
insert into osallistuja values(4, 10);
insert into osallistuja values(4, 3);

insert into osallistuja values(5, 9);
insert into osallistuja values(5, 3);
insert into osallistuja values(5, 8);

insert into osallistuja values(6, 4);
insert into osallistuja values(6, 2);
insert into osallistuja values(6, 10);
insert into osallistuja values(6, 1);
insert into osallistuja values(6, 7);
