import React, { useState } from 'react';

export default function App() {
  const [text, setText] = useState('');
  const [result, setResult] = useState('');

  const capitalize = (str) =>
    str.replace(/\b\w/g, (c) => c.toUpperCase());

  return (
    <div style={{ fontFamily: 'sans-serif', padding: '2rem' }}>
      <h1>Capitalize a Sentence</h1>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type a sentence"
        style={{ padding: '0.5rem', width: '300px' }}
      />
      <button
        onClick={() => setResult(capitalize(text))}
        style={{ marginLeft: '1rem', padding: '0.5rem 1rem' }}
      >
        Capitalize
      </button>
      {result && <p style={{ marginTop: '1rem' }}><strong>Result:</strong> {result}</p>}
    </div>
  );
}
