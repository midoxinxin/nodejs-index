var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
 res.render('blog', { title: ' 博客主页',
    status_1: 'active',
    status_2: '',
    status_3: '',
    status_4: '',
    status_5: '',
    status_6: '',
    status_7: '',
    status_8: '',
    status_9: '',
    status_10: '',
    status_11: ''}); 
  

});

module.exports = router;
