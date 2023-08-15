

select id, nimi, maa, kuvaus from artisti where artisti.nimi like ?;

select id, nimi from kaupunki where kaupunki.nimi like ?;

select id, nimi, aika, paikka, osallistujat from festivaali where festivaali.nimi like ?;