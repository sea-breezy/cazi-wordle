import './App.css';
import GameDisplay from '../GameDisplay/GameDisplay';
import useFetch from '../../Hooks/useFetch';

function App() {
  const {payload: text, error} = useFetch(`https://api.wordnik.com/v4/words.json/randomWord?hasDictionaryDef=true&maxCorpusCount=-1&minDictionaryCount=1&maxDictionaryCount=-1&minLength=5&maxLength=5&api_key=se3l7eoyrirh1z3fa9og49f3j3gmxlpr7db5vhjg1z4juuajp`)

  return (
    <div className="App">
      <GameDisplay/>
      <p>{text?.word}</p>
      <p>{error ? error : 'no error'}</p>
    </div>
  );
}

export default App;
