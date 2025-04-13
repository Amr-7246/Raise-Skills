import React, { useState } from 'react';
import axios from 'axios';
import { MdError } from "react-icons/md";
import { FaRegThumbsUp } from "react-icons/fa6";

const AIModel = () => {
    const [prompt, setPrompt] = useState('');
    const [response, setResponse] = useState('');
    const [error, setError] = useState('');

    const handleInputChange = (e) => {
        setPrompt(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Clear previous errors
        setError('');
        setResponse('');

        try {
            const res = await axios.post('http://localhost:5000/generate/generate', { prompt });
            if (res.data.generated_text) {
                setResponse(res.data.generated_text);
            } else {
                setError('No response generated. Please try again later.');
            }
        } catch (err) {
            if (err.response) {
                // Handle known errors from the backend
                const errorMessage = err.response.data.error || err.message;
                setError(`Error: ${errorMessage}`);
            } else if (err.code === "ECONNABORTED") {
                setError("Error: AI request timed out");
            } else {
                setError("Error: Failed to fetch AI response");
            }
            console.error('Error:', err.response?.data || err.message);
        }
    };

    return (
        <div className={`pb-5 dark:bg-gray-900/50 overflow-hidden bg-black/70  rounded-lg w-[80%] flex flex-center gap-5 mx-auto flex-wrap min-h-[200px]`}>  
            <div className='font-bold font-Rowdies bg-gray-950 dark:bg-black w-[100%] text-center border-b dark:border-green-400 border-sky-500  py-4 mb-10 text-green-400'>
                <span className='btn-cliping text-[25px]' >AI <span> Model</span> Interaction</span>
            </div>
            <form className={`flex flex-wrap flex-center`} onSubmit={handleSubmit}>
                <textarea
                    style={{ backgroundColor: '#2d2d2d' }}
                    className=" focus:outline-none w-[80%] mx-auto py-1 px-3 rounded-lg text-zinc font-bold text-start resize-none overflow-hidden min-h-[50px] align-top"
                    placeholder="Enter prompt . . ."
                    value={prompt}
                    onChange={handleInputChange}
                    rows="4"
                    wrap="soft"
                    cols="50"
                />
                <button className='btn dark:bg-gray-950' type="submit">
                    <span className='btn-cliping'>Generate Response</span>
                </button>
            </form>

            {error && (
                <div className={`bg-black rounded-[20px] w-[80%] flex flex-center mx-auto p-1 px-3`}>
                    <span className='text-rose-600 mr-2'><MdError /></span>
                    <p className={`text-center font-bold text-rose-600`}>{error}</p>
                </div>
            )}
            {response && (
                <div className={`bg-zinc rounded-[20px] w-[80%] flex flex-center mx-auto p-1 px-3`}>
                    <span className='text-green-600 mr-2'><FaRegThumbsUp /></span>
                    <p className={`text-center font-bold text-green-600`}>{response}</p>
                </div>
            )}
        </div>
    );
};

export default AIModel;
