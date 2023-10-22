import React, { useState } from 'react';

const WordCounter = () => {
  const [inputText, setInputText] = useState('');
  const [wordCount, setWordCount] = useState(0);

  const handleInputChange = (e) => {
    const text = e.target.value;
    // Split the text by spaces to count words
    const words = text.split(/\s+/).filter(Boolean);
    setInputText(text);
    setWordCount(words.length);
  };

  return (
    <div className="word-counter">
      <h1>Responsive Paragraph Word Counter</h1>
      <input
        type="text"
        placeholder="Type anything here..."
        value={inputText}
        onChange={handleInputChange}
      />
      <p>Word Count: {wordCount}</p>
    </div>
  );
};

export default WordCounter;
