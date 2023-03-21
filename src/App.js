import React, { useState } from 'react'
import './App.css';
import InputBox from './InputBox';
import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
  apiKey: process.env.REACT_APP_API_KEY,
});

const openai = new OpenAIApi(configuration);

function App() {
  const [userPrompt, setUserPrompt] = useState("");
  const [number, setNumber] = useState(1);
  const [size, setSize] = useState("256x256");
  const [imageUrl, setImageUrl] = useState("");

  const generateImage = async () => {
    const imageParams = {
      prompt: userPrompt,
      n: parseInt(number),
      size: size,
    };
    
    const response = await openai.createImage(imageParams);
    const urlData = response.data.data[0].url;
    setImageUrl(urlData);
  };

  return (
    <div>
      {imageUrl && <img src={imageUrl} alt="ai generated image" /> }
      <InputBox label={"Description"} setAttribute={setUserPrompt} />
      <InputBox label={"Amount"} setAttribute={setNumber} />
      <InputBox label={"Size"} setAttribute={setSize} />
      <button onClick={generateImage}>Create</button>
    </div>
  );
}

export default App;