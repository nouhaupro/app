const express = require('express');
const User = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth')
const router = express.Router();


function generateToken(params = {}) {
    return jwt.sign(params, authConfig.secret, {
        expiresIn: 84600
    });
}


router.post('/register', async (req, res) => {
    const { email } = req.body;
    try {
        if (await User.findOne({ email })) {
            return res.status(400).send({ error: 'Email já esta cadastrado' })
        }
        const user = await User.create(req.body);

        user.password = undefined;

        return res.send({ user, token: generateToken({ id: user.id },) });
    } catch (err) {
        return res.status(400).send({ error: 'Houve um erro no registro' });
    }
})



router.post('/authenticate', async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email }).select('+password');
    try {

        if (!user) {
            return res.status(400).send({ error: 'Usuario nao encontrado' });
        }

        if (!await bcrypt.compare(password, user.password)) {
            return res.status(400).send({ error: 'Senha invalida' });
        }

        user.password = undefined;

        return res.send({ user, token: generateToken({ id: user.id },) })
    } catch (err) {
        return res.status(400).send({ error: 'Houve um erro no login' });
    }
})

module.exports = app => app.use('/auth', router);