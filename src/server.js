const axios = require('axios').default;
const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
const cors = require('cors');

app.use(cors());


const PORT = process.env.PORT || 3002;
// const { PORT = 3002 } = process.env
const API_KEY = process.env.REACT_APP_API_KEY;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/generate-image', async (req, res) => {
  const { prompt, number, size } = req.body;
  const url = 'https://api.openai.com/v1/images/generations';
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${API_KEY}`
  };
  const data = {
    'model': 'image-alpha-001',
    'prompt': prompt,
    'num_images': number,
    'size': size,
  };

  try {
    const response = await axios.post(url, data, { headers });
    res.status(200).send(response.data);
  } catch (error) {
    res.status(400).send(error);
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
