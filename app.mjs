import express from 'express';

const app = express();

app.get('/', (_, res) => {
    res.send('<h1>Akagi best waifu!</h1>');
});

app.listen(3000);