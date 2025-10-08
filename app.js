const express = require('express');
const app = express();
const redis = require('redis');

const client = redis.createClient({
  url: 'redis://redis-service:6379' // Points to K8s service
});

client.on('error', (err) => console.log('Redis Client Error', err));
client.connect();

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.post('/vote/:option', async (req, res) => {
  const option = req.params.option;
  await client.hIncrBy('votes', option, 1);
  res.send({ status: 'Vote recorded' });
});

app.get('/results', async (req, res) => {
  const votes = await client.hGetAll('votes');
  res.json(votes);
});

app.listen(3000, () => console.log('Server running on port 3000'));
