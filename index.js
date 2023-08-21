const {host, port} = require("./config.json");
const tietokanta = require('./tietokanta/tietokantakerros.js')
const express = require('express');
const path = require('path');

let app = express();

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, "public")))


app.get('/', async (req,res)=>{
    res.render('home', {title:'Koti', festarit:await tietokanta.haeKaikkiFestivaalit()});
});

app.get('/aikataulu', async (req,res)=>{
    res.render('aikataulu', {title:'Aikataulu', aikataulu:await tietokanta.festivaaliAika()});
});

app.get('/kaupunki/:nimi', async (req,res)=>{
    const kaupunkiNimi=req.params.nimi;

    res.render('kaupunkiInfo', {title:`${kaupunkiNimi}`, festivaalit:await tietokanta.kaupunkiFestivaali(kaupunkiNimi)});
});

app.get('/artistit', async (req,res)=>{
    res.render('artistit', {title:'Artistit', artistit:await tietokanta.haeKaikkiArtistit()});
    
});

app.get('/artistit/:nimi', async (req,res)=>{
    const artistiNimi=req.params.nimi;
    res.render('artistiInfo', {title:`${artistiNimi}`, kaupungit:await tietokanta.artistiKaupungit(artistiNimi),
                                festivaalit:await tietokanta.festivaalienArtisti(artistiNimi)});
});

app.get('/festivaalit', async (req,res)=>{
    res.render('festivaalit', {title:'Festivaalit', festivaalit:await tietokanta.festivaalienArtistiMaara()});
});

app.get('/festivaalit/:festari', async (req,res)=>{
    const festariNimi=req.params.festari;
    res.render('festivaaliInfo', {title:`${festariNimi}`, artistit:await tietokanta.haeFestivaalinKaikkiArtistit(festariNimi)});

});

/* <li><a href="/aikataulu">Aikataulu</a></li>
<li><a href="/artistit">Artistit</a></li>
<li><a href="/festivaalit">Festivaalit</a></li> */

app.listen(port, host, ()=>{
    console.log(`http://${host}:${port}`)
})