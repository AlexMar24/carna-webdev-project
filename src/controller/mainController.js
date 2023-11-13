const axios = require('axios');

const index = async function (req, res){
    res.render('index', { text: 'This is my first website'})
}

const about = async function (req, res){
    res.render('about', { text: 'CAT'})
}

const cow = async function (req, res){
    res.render('cow', { text: 'COW'})
}


module.exports = { index, about,cow}