let sqlConfig = require("./sqlconfig.json");
let mariadb = require("mariadb");
const sqlKyselyt = require('./sql.json');

async function haeKaikkiArtistit() {
    let con;

    try {
        con=await mariadb.createConnection(sqlConfig);
        let data = await con.query(sqlKyselyt.haeKaikkiArtistit.join(' '));
        return data
    } catch (error) {
        console.log(error)
    }

    await con.end();
} 

async function haeKaikkiFestivaalit() {
    let con;

    try {
        con=await mariadb.createConnection(sqlConfig);
        let data = await con.query(sqlKyselyt.haeKaikkiFestivaalit.join(' '));
        return data
    } catch (error) {
        console.log(error)
    }

    await con.end();
} 

async function haeFestivaalinKaikkiArtistit(nimi) {
    let con;

    try {
        con=await mariadb.createConnection(sqlConfig);
        let data = await con.query(sqlKyselyt.festivaalienKaikkiArtistit.join(' '), nimi);
        return data
    } catch (error) {
        console.log(error)
    }

    await con.end();
} 

async function artistiKaupungit(nimi) {
    let con;

    try {
        con=await mariadb.createConnection(sqlConfig);
        let data = await con.query(sqlKyselyt.artistiKaupungit.join(' '), nimi);
        return data
    } catch (error) {
        console.log(error)
    }

    await con.end();
} 

async function kaupunkiFestivaali(nimi) {
    let con;

    try {
        con=await mariadb.createConnection(sqlConfig);
        let data = await con.query(sqlKyselyt.kaupunkiFestivaali.join(' '), nimi);
        return data
    } catch (error) {
        console.log(error)
    }

    await con.end();
} 

async function festivaalienArtisti(nimi) {
    let con;

    try {
        con=await mariadb.createConnection(sqlConfig);
        let data = await con.query(sqlKyselyt.festivaalienArtistit.join(' '), nimi);
        return data
    } catch (error) {
        console.log(error)
    }

    await con.end();
}

async function festivaalienArtistiMaara() {
    let con;

    try {
        con=await mariadb.createConnection(sqlConfig);
        let data = await con.query(sqlKyselyt.festivaalienArtistiMaara.join(' '));
        return data
    } catch (error) {
        console.log(error)
    }

    await con.end();
} 

async function festivaaliAika() {
    let con;

    try {
        con=await mariadb.createConnection(sqlConfig);
        let data = await con.query(sqlKyselyt.festivaaliAika.join(' '));
        return data
    } catch (error) {
        console.log(error)
    }

    await con.end();
} 

module.exports={ haeKaikkiArtistit, haeKaikkiFestivaalit,
                artistiKaupungit, kaupunkiFestivaali,
                festivaalienArtisti, festivaalienArtistiMaara,
                festivaaliAika, haeFestivaalinKaikkiArtistit
}