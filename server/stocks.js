const db = require('../db') //this is required
const axios = require('axios')
const router = require('express').Router()

const cookie = '3ac3b63345e2c6e4077b6e0f204fd72740e56cf0393368444baf0b44937bba9d.e38NbNeRbx0Pa40Mb34RchqKbhj0';

router.get('/', function(req, res, next) {
  axios({
    method: 'get',
    url: 'http://www.pse.com.ph/stockMarket/home.html?method=getSecuritiesAndIndicesForPublic&ajax=true',
    timeout: 10000,
    headers: {'Cookie':'JSESSIONID=' + cookie}
  }).then(success => {
    res.status(200).send(success.data);
  }).catch(error => {
    res.send(error);
  });
});

router.get('/:id', function(req, res, next) {
  console.log('http://www.pse.com.ph/stockMarket/companyInfo.html?method=fetchHeaderData&ajax=true&company=599&security=' + req.params.id);
  axios({
    method: 'get',
    url: 'http://www.pse.com.ph/stockMarket/companyInfo.html?method=fetchHeaderData&ajax=true&company=599&security=' + req.params.id,
    timeout: 10000,
    headers: {'Cookie':'JSESSIONID=' + cookie}
  }).then(success => {
    console.log(success);
    res.status(200).send(success.data);
  }).catch(error => {
    res.send(error);
  });
});

module.exports = router
