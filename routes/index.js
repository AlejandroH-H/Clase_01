var express = require('express');
var router = express.Router();

/* GET home page. */

/*Request*/
/*Responsive*/
/*Next*/

router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'Estudiantes que no están en la sección :D',
    firstName: 'Alejandro',
    lestName: 'Hernández',
    id: '31605127',
    secondName:'Eduardo',
    ApelliName: 'Hurtado',
    Id: '31695511',
  });
});

module.exports = router;
