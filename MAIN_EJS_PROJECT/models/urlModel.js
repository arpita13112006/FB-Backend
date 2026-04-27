const { nanoid } = require('nanoid');
const Url = require('../models/urlModel');

async function createShortUrl(req, res) {
    const { originalUrl } = req.body;

    if (!originalUrl) {
        return res.status(400).json({ error: 'Original URL is required' });
    }

    const shortid = nanoid(7);

    await Url.create({
        originalUrl,
        shortUrl: shortid
    });

    res.json({ shortUrl: shortid });
}

module.exports = { createShortUrl };