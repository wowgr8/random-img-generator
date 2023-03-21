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

  return (
    <div>
      <InputBox />
      <InputBox />
      <InputBox />
      <button >Create</button>
    </div>
  );
}

export default App;