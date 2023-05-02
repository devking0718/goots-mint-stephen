const express = require('express');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 3000; // Change this to your desired port number
const reveal = false;
const isReveal = typeof process.env.REVEAL !== 'undefined' ? process.env.REVEAL === 'true' : reveal;
const winners = [116, 143, 101, 68, 56, 65, 130, 104, 105, 49];
const images = {
    unveal: '/images/lottery-unveal.jpg',
    winner: '/images/lottery-winner.jpg',
    loser: '/images/lottery-loser.jpg',
}

app.get('/nft/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const metaData = {
        id: id,
        name: 'Goot #' + id,
        description: 'NFT for Goot lottery. 10 Winners(Golden Goot) will have 10% of total prize.',
        image: req.protocol + '://' + req.get('host'),
        attributes: [{ trait_type: 'color', value: 'unknown' }],
    }
    if (isReveal) {
        if (winners.includes(id)) {
            metaData.image += images.winner;
            metaData.attributes[0].value = 'golden';
        }
        else {
            metaData.image += images.loser;
            metaData.attributes[0].value = 'white';
        }
    }
    else {
        metaData.image += images.unveal;
    }
    res.json(metaData);
});

app.use(express.static('public'));

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
