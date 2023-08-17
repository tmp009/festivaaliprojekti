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

async function haeArtisti(nimi) {
    let con;

    try {
        con=await mariadb.createConnection(sqlConfig);
        nimi = `%${nimi}%`
        let data = await con.query(sqlKyselyt.haeArtistiNimilla.join(' '), nimi);
        return data
    } catch (error) {
        console.log(error)
    }

    await con.end();
}

async function haeKaupunki(nimi) {
    let con;

    try {
        con=await mariadb.createConnection(sqlConfig);
        nimi = `%${nimi}%`
        let data = await con.query(sqlKyselyt.haeKaupungiNimilla.join(' '), nimi);
        return data
    } catch (error) {
        console.log(error)
    }

    await con.end();
}

async function haeFestivaali(nimi) {
    let con;

    try {
        con=await mariadb.createConnection(sqlConfig);
        nimi = `%${nimi}%`
        let data = await con.query(sqlKyselyt.haeFestivaaliNimilla.join(' '), nimi);
        return data
    } catch (error) {
        console.log(error)
    }

    await con.end();
}

async function artistiKaupungit() {
    let con;

    try {
        con=await mariadb.createConnection(sqlConfig);
        let data = await con.query(sqlKyselyt.artistiKaupungit.join(' '));
        return data
    } catch (error) {
        console.log(error)
    }

    await con.end();
}

async function kaupunkiFestivaali() {
    let con;

    try {
        con=await mariadb.createConnection(sqlConfig);
        let data = await con.query(sqlKyselyt.kaupunkiFestivaali.join(' '));
        return data
    } catch (error) {
        console.log(error)
    }

    await con.end();
}

async function festivaalienArtistit() {
    let con;

    try {
        con=await mariadb.createConnection(sqlConfig);
        let data = await con.query(sqlKyselyt.festivaalienArtistit.join(' '));
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
                haeArtisti, haeKaupunki, haeFestivaali,
                artistiKaupungit, kaupunkiFestivaali,
                festivaalienArtistit, festivaalienArtistiMaara,
                festivaaliAika
}