const express = require('express');
const router = express.Router();
const { spawn } = require('child_process');
var bodyParser = require("body-parser");
var urlencodedParser = bodyParser.urlencoded({ extended: false })
var jsonParser = bodyParser.json()
var CryptoJS = require("crypto-js");
const otpGenerator = require('otp-generator')
const NodeCache = require( "node-cache" );
const myCache = new NodeCache();
var index_post = async(req,res) =>{
    var otp = otpGenerator.generate(6, { upperCaseAlphabets: false, specialChars: false, lowerCaseAlphabets:false });
    console.log(otp)
    console.log(req.body.username)
    var sender_number = "91"+req.body.username
    var url = "https://messages-sandbox.nexmo.com/v1/messages";

    var XMLHttpRequest = require('xhr2');
    var xhr = new XMLHttpRequest();
    xhr.open("POST", url);
    
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.setRequestHeader("Accept", "application/json");
    xhr.setRequestHeader("Authorization", "Basic MzllMmJkMDY6TGhBSHhrQk9vRFlkTkpPNg==");
    
    xhr.onreadystatechange = function () {
       if (xhr.readyState === 4) {
          console.log(xhr.status);
          console.log(xhr.responseText);
       }};
    otp 
    var data = `{
        "from": "14157386102",
        "to": "${sender_number}",
        "message_type": "text",
        "text": "OTP:- ${otp}",
        "channel": "whatsapp"
      }`;
    
    xhr.send(data);
    res.render('pages/otp_verification.ejs', { data: req.body.username, data1: "secret key 123" });
}
router.post('/index', urlencodedParser, index_post);

var index_get = (req,res) => {
    res.render('pages/otp.ejs', { data: "", data1: "secret key 123" });
}
router.get('/index',index_get);

// var index_post = async(req,res) =>{
    
//     res.render('pages/otp_verification.ejs', { data: req.body.username, data1: "secret key 123" });
// }
router.post('/verify', urlencodedParser, index_post);


module.exports = router;