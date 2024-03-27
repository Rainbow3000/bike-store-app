const CryptoJS = require("crypto-js");
module.exports = {
  encode: (text) => {
    const encodeText = CryptoJS.AES.encrypt(
      text,
      process.env.ENCODE_KEY
    ).toString();
    return encodeText
  },
  decode:(text)=>{
    const decodeText  = CryptoJS.AES.decrypt(text, process.env.ENCODE_KEY);
    const originalText = decodeText.toString(CryptoJS.enc.Utf8);
    return originalText
  }
};
