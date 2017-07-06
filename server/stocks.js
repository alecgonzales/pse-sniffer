const db = require('../db') //this is required
const axios = require('axios')
const router = require('express').Router()

router.get('/', function(req, res, next) {
  axios({
    method: 'get',
    url: 'http://www.pse.com.ph/stockMarket/home.html?method=getSecuritiesAndIndicesForPublic&ajax=true',
    timeout: 10000,
    headers: {'Cookie':'JSESSIONID=519962d1b90334202024a1a401eac160e9ab6401bb9372a6f3839a6262f07807.e38NbNeRbx0Pa40Mb34RchqKbhj0;'}
  }).then(success => {
    console.log(success.data);
    res.status(200).send(success.data);
    // const posts = res.data.data.children.map(obj => obj.data);
    // this.setState({ posts });
  }).catch(error => {
    console.log('error');
    console.log(error);
  });


});

router.get('/:id', function(req, res, next) {
    Product.findOne({
            where:{id:req.params.id},
            include: [Review]
        })
        .then(result => {
            res.status(200).send(result);
        })
        .catch(next);
});

module.exports = router
