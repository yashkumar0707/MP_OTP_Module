require('dotenv').config()
function yash() {
    var element = document.getElementById(id);
    // document.getElementById("id").value = "Yash"
    console.log(document.getElementById("id"))
    var ele = document.getElementById("id").value 
    // const crypto = require('crypto-js');
    // const buffer = require('buffer');
    // const { privateKey, publicKey } = CryptoJS.generateKeyPairSync('rsa', {
    //     modulusLength: 2048,
    // });
    // const algorithm = "SHA256";

    // // Converting string to buffer
    // const data = "I Love GeeksForGeeks";

    // // Sign the data and returned signature in buffer
    // const signature = CryptoJS.sign(algorithm, data, privateKey);

    // // Verifying signature using crypto.verify() function
    // const isVerified = CryptoJS.verify(algorithm, data, publicKey, signature);
    var hash = CryptoJS.SHA256(ele)
    // Printing the result
    console.log(ele)
    console.log(hash.toString());
    var hash = CryptoJS.SHA256(ele)
    hash = hash.toString()
    // var encrypted = CryptoJS.AES.encrypt("Yash", "Secret Passphrase").toString();

    // var decrypted = CryptoJS.AES.decrypt(encrypted, "Secret Passphrase");
    // console.log(decrypted)
    var ciphertext = CryptoJS.AES.encrypt(hash,'secret key 123').toString();
    document.getElementById("id").value = ciphertext + " " + ele;
    // Decrypt
    var bytes = CryptoJS.AES.decrypt(ciphertext, 'secret key 123');
    var originalText = bytes.toString(CryptoJS.enc.Utf8);
    console.log(process.env.KEY)
    console.log(originalText + 'asasUas'); // 'my message'

}