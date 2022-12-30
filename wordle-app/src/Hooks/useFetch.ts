import { useState, useEffect } from "react";

//const url = `https://api.wordnik.com/v4/words.json/randomWord?hasDictionaryDef=true&maxCorpusCount=-1&minDictionaryCount=1&maxDictionaryCount=-1&minLength=5&maxLength=5&api_key=se3l7eoyrirh1z3fa9og49f3j3gmxlpr7db5vhjg1z4juuajp`

export type errorData = any;
export type wordResponse = {
    id: number,
    word: string
  } | null;

export default function useFetch(url: string | null) {
  const [text, setText] = useState<wordResponse>(null);
  const [error, setError] = useState(null);
  useEffect(() => {
    async function fetchStuff() {
      try {
        if (url == null) {
          return;
        }
        const responseJSON = await fetch(url);
        const result = (await responseJSON.json()) as wordResponse;
        setText(result);
      } catch (e: errorData) {
        setError(e);
      }
    }
    fetchStuff();
  }, [url]);
  return { payload: text, error };
}