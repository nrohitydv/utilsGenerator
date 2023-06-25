const express = require("express");
const router = express.Router();
const qrcode = require('qrcode');

 
router.get("/",(req,res) => {
    res.send("hello from ui!");
});
router.get("/qrcode",(req,res) => {
    const generateQRCode = async text => {
        try {
          const qrCodeImage = await qrcode.toDataURL(text);
          console.log(qrCodeImage); // Outputs the QR code image data URL
        } catch (error) {
          console.error(error);
        }
      };
      
      // Call the function and pass the text you want to encode
      generateQRCode('good mrning!');
      return res.send(`hello ${generateQRCode}`)
  });



module.exports=router;