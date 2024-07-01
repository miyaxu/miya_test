"use client";

import React, { useState } from 'react';

export default function FaqClient({ data }: { data: any[] }) {
  const [inputValue, setInputValue] = useState('');
  const [filteredData, setFilteredData] = useState(data);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setInputValue(value);

    const filtered = data.filter((item) =>
      item.title.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredData(filtered);
  };

  return (
    <div>
      <div>server components test</div>
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
