const express = require('express');
const router = express.Router();
const recomendacionesController = require('../controlers/recomendaciones.controller');


router.get('/nueva_recomendacion', recomendacionesController.get_new);

router.post('/nueva_recomendacion', recomendacionesController.post_new);

router.get('/:recomendacions_id', recomendacionesController.get_one);

router.get('/', recomendacionesController.get_root);

module.exports = router;