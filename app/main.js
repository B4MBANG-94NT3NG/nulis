var express = require('express');
const axios = require('axios').default;
var router = express.Router()

router.get('/nulis', async function (req, res, next) {
  res.render('index', {
    title:
      'Nulis Online - ZaaDev',
    my_url: "https://nulis-online.vercel.app",
    desc: "Lagi mager nulis? mending Nulis Online aja, dijamin tangan gak bakalan pegel! aowkaowkokw",
    author: "Bambang Tri Raharjo"
  })
})

router.get('/', function (req, res) {
  res.render('home', {
    title:
      'Nulis Online - Bambang Developer',
    my_url: "https://nulis-online.vercel.app",
    desc: "Lagi mager nulis? mending Nulis Online aja, dijamin tangan gak bakalan pegel! aowkaowkokw",
    author: "Bambang Tri Raharjo"
  })
})

router.get('*', function (req, res) {
  res.render('error')
})

module.exports = router
