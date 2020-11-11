import React, {useState, useEffect} from 'react';
import axios from 'axios';

// this will do the translating depending on
// 1. the language selected
// 2. the text entered
// 3. if any of the above change it'll re-translate (that's why we need useEffect!)

const Convert = ({ language, text }) => {
  const [translated, setTranslated] = useState('');
  const [debouncedText, setDebouncedText] = useState();

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedText(text);
    }, 500);

    // if text changes within 500ms, cancel timer ⬇
    return () => {
      clearTimeout(timerId);
    };
  }, [text]);

  useEffect(() => {
    const doTranslation = async () => {
      //took data property out of response cos that's the only one
      // we need ⬇
      const { data } = await axios.post('https://translation.googleapis.com/language/translate/v2', {}, {
        params: {
          q: debouncedText,
          target: language.value,
          key: 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM'
        }
      });
      setTranslated(data.data.translations[0].translatedText);
    };

    doTranslation();
  }, [language, debouncedText]);

  return (
    <div>
      <h1 className="ui header">
        {translated}
      </h1>
    </div>
  );
};

export default Convert;
