const QRCode = require('qrcode');

const url = 'http://192.168.137.32:3001'; // Replace with your local development URL

QRCode.toString(url, { type: 'terminal' }, (err, qr) => {
  if (err) {
    console.error('Error generating QR code:', err);
    return;
  }
  console.log(qr);
});