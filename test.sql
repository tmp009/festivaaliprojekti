
-- search artist, city, festival
select id, nimi, maa, kuvaus from artisti where artisti.nimi like ?;

select id, nimi from kaupunki where kaupunki.nimi like ?;

select id, nimi, aika, paikka, osallistujat from festivaali where festivaali.nimi like ?;


-- city where artist appears

select artisti.nimi as artisti, kaupunki.nimi as kaupunki from artisti, osallistuja, kaupunki, festivaali
where osallistuja.artisti=artisti.id 
and festivaali.id=osallistuja.festivaali 
and festivaali.paikka=kaupunki.id;
