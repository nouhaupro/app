const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Bem-vindo à NouhauPro');   
})

module.exports = app => app.use('/dashboard', router);