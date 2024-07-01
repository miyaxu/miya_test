import React from 'react';
import fs from 'fs';
import path from 'path';
import FaqClient from './FaqClient';

const filePath = path.join(process.cwd(), 'public', 'data', 'faq.json');
const fileContents = fs.readFileSync(filePath, 'utf8');
const data = JSON.parse(fileContents);

export default function Faq() {
  return <FaqClient data={data} />;
}
