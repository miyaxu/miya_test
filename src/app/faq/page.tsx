"use client";

import React, { useState, useEffect } from 'react';

export default function Faq() {
  const [data, setData] = useState<any[]>([]);
  const [filteredData, setFilteredData] = useState<any[]>([]);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    fetch('/data/faq.json')
      .then((response) => response.json())
      .then((json) => {
        setData(json);
        setFilteredData(json);
      });
  }, []);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setInputValue(value);

    const filtered = data.filter((item) =>
      item.title.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredData(filtered);
  };

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Q & A</h1>
      搜：<input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
      />

      <ul>
        {filteredData.map((question, index) => (
          <li key={index}>
            <p>{question.title}</p>
            <div>{question.content}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}
