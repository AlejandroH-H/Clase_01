var express = require('express');
var router = express.Router();

/* GET home page. */

/*Request*/
/*Responsive*/
/*Next*/

router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'Estudiante que no está en la sección :D',
    firstName: 'Alejandro',
    lestName: 'Hernández',
    id: '31605127'});
});

module.exports = router;
