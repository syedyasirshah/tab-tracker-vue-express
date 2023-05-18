const express = require('express');
const controllers = require('./app');
const router= express.Router()

router.route('/register').post(controllers.registerUser)