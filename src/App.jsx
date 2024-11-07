// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';

const App = () => {
  const [text, setText] = useState('');
  const [encryptedText, setEncryptedText] = useState('');
  const [decryptedText, setDecryptedText] = useState('');

  const encryptText = (inputText) => {
    // Enkel kryptering, t.ex. rot13 (kan bytas ut mot en mer säker algoritm)
    return inputText.split('').map((char) => String.fromCharCode(char.charCodeAt(0) + 13)).join('');
  };

  const decryptText = (inputText) => {
    // För att dekryptera samma som kryptering, rot13 fungerar för båda
    return inputText.split('').map((char) => String.fromCharCode(char.charCodeAt(0) - 13)).join('');
  };

  const handleEncrypt = () => {
    const result = encryptText(text);
    setEncryptedText(result);
    setDecryptedText('');
  };

  const handleDecrypt = () => {
    const result = decryptText(encryptedText);
    setDecryptedText(result);
  };

  return (
    <div>
      <h1>Text Kryptering & Dekryptering</h1>
      <textarea
        placeholder="Skriv din text här"
        value={text}
        onChange={(e) => setText(e.target.value)}
      ></textarea>
      <div>
        <button onClick={handleEncrypt}>Kryptera</button>
        <button onClick={handleDecrypt}>Dekryptera</button>
      </div>
      <div>
        <h2>Krypterad Text:</h2>
        <p>{encryptedText}</p>
        <h2>Dekrypterad Text:</h2>
        <p>{decryptedText}</p>
      </div>
    </div>
  );
};

export default App;
