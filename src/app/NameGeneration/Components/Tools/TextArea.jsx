import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Import styles

const TextArea = () => {
  const [prompt, setPrompt] = useState("");

  const handleChange = (value) => {
    setPrompt(value);
  };

  return (
    <div className="w-[80%] mx-auto py-1 px-3 rounded-lg">
      <ReactQuill
        value={prompt}
        onChange={handleChange}
        placeholder="Enter prompt..."
        className="text-zinc font-bold"
        modules={{
          toolbar: [
            [{ 'header': '1' }, { 'header': '2' }, { 'font': [] }],
            [{ 'list': 'ordered'}, { 'list': 'bullet' }],
            ['bold', 'italic', 'underline'],
            ['link'],
            [{ 'align': [] }],
            ['image']
          ],
        }}
      />
    </div>
  );
};

export default TextArea;
