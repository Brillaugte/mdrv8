const fetch = require('node-fetch');

module.exports = async (req, res) => {
  try {
    const flaskServerUrl = 'https://mdrv-6-backend-brillaugte.replit.app/balance'; // Update this URL to match your Flask server's address
    const response = await fetch(flaskServerUrl);
    const data = await response.json();
    res.status(200).send(data);
  } catch (error) {
    console.error('Failed to fetch balance:', error);
    res.status(500).send({ error: 'Failed to fetch balance' });
  }
};
