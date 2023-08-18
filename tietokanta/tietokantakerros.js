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

async function haeFestivaalienKaikkiArtistit() {
    let con;

    try {
        con=await mariadb.createConnection(sqlConfig);
        let data = await con.query(sqlKyselyt.festivaalienKaikkiArtistit.join(' '));
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

async function festivaalienArtistit(nimi) {
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

// async function haeArtisti(nimi) {
//     let con;

//     try {
//         con=await mariadb.createConnection(sqlConfig);
//         nimi = `%${nimi}%`
//         let data = await con.query(sqlKyselyt.haeArtistiNimilla.join(' '), nimi);
//         return data
//     } catch (error) {
//         console.log(error)
//     }

//     await con.end();
// }

// async function haeKaupunki(nimi) {
//     let con;

//     try {
//         con=await mariadb.createConnection(sqlConfig);
//         nimi = `%${nimi}%`
//         let data = await con.query(sqlKyselyt.haeKaupunkiNimilla.join(' '), nimi);
//         return data
//     } catch (error) {
//         console.log(error)
//     }

//     await con.end();
// }

// async function haeFestivaali(nimi) {
//     let con;

//     try {
//         con=await mariadb.createConnection(sqlConfig);
//         nimi = `%${nimi}%`
//         let data = await con.query(sqlKyselyt.haeFestivaaliNimilla.join(' '), nimi);
//         return data
//     } catch (error) {
//         console.log(error)
//     }

//     await con.end();
// }

haeKaikkiFestivaalit('Nightwish')
.then(console.log)

module.exports={ haeKaikkiArtistit, haeKaikkiFestivaalit,
                artistiKaupungit, kaupunkiFestivaali,
                festivaalienArtistit, festivaalienArtistiMaara,
                festivaaliAika, haeFestivaalienKaikkiArtistit
}