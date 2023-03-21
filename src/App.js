import './App.css';
import InputBox from './InputBox';
import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
  apiKey: process.env.REACT_APP_API_KEY,
});

const openai = new OpenAIApi(configuration);

function App() {


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