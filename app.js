const express = require('express');

const app = express();
const _port = 3000;

app.get('/', (req,res) => {
	res.send('First app');
})

app.get('*', (req,res) => {
	res.send('Wrong page bub');
})

app.listen(_port, () => {
	console.log('Server started');
})