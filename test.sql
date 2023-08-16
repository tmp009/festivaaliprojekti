
-- search artist, city, festival
select id, nimi, maa, kuvaus from artisti where artisti.nimi like ?;

select id, nimi from kaupunki where kaupunki.nimi like ?;

select id, nimi, aika, paikka, osallistujat from festivaali where festivaali.nimi like ?;


-- city where artist appears

-- Kaupungit, joissa artisti esiintyy.
select artisti.nimi as artisti, kaupunki.nimi as kaupunki from artisti, osallistuja, kaupunki, festivaali
where osallistuja.artisti=artisti.id 
and festivaali.id=osallistuja.festivaali 
and festivaali.paikka=kaupunki.id;


-- Kaupunki, jossa tietty festivaali tapahtuu.
select kaupunki.nimi as kaupunki, festivaali.nimi as festivaali from kaupunki, festivaali
where kaupunki.id = festivaali.paikka

-- Festivaalit, joissa artisti esiintyy.
select festivaali.nimi as festivaali, artisti.nimi as artisti from festivaali, artisti, osallistuja
where osallistuja.artisti=artisti.id and festivaali.id=osallistuja.festivaali

-- Festivaalit, joissa on eniten artisteja.
select festivaali.nimi, COUNT(festivaali.id) as maara from festivaali, artisti, osallistuja
where osallistuja.artisti=artisti.id and festivaali.id=osallistuja.festivaali
group by festivaali.id
order by maara desc;


-- Festivaalien lajittelu ajankohdan mukaan.
select festivaali.nimi as festivaali, festivaali.aika from festivaali
order by festivaali.aika asc;