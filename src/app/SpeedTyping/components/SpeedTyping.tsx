import React, { useEffect, useState } from 'react';
import { FaSync } from 'react-icons/fa';

const texts = [
    "The quick brown fox jumps over the lazy dog.",
    "Tailwind CSS makes styling faster and easier.",
    "React is a powerful library for building UIs.",
    "Speed typing is fun and boosts your brain!",
    "JavaScript is the language of the web. Learn it. Master it. Rule it.",
    "Next.js with TypeScript feels like driving a Tesla on a coding highway",
    "Design isn't just how it looks — it's how it *feels*",
    "Dark mode isn't a preference, it's a *lifestyle*",
    "Keep coding like nobody's watching, but make sure GitHub sees it",
    "CSS used to hurt... then Tailwind showed up like a hero in a hoodie",
    "Every bug you fix is one step closer to becoming a coding legend",
    "Push to Git, take a sip of coffee, and vibe.",
    "Debugging at 3AM builds character. Real ones know.",
    "Animations done right can make your UI feel *alive*",
    "One commit a day keeps the tech debt away",
];


const SpeedTyping = () => {
// * ############################ start State
    const [input, setInput] = useState("");
    const [startTime, setStartTime] = useState<number | null>(null);
    const [wpm, setWpm] = useState(0);
    const [falseCount, setFalseCount] = useState(0);
    const [currentTextIndex, setCurrentTextIndex] = useState(0);
    const textToType = texts[currentTextIndex];
// * ############################ End State
// * ############################ start logic
    // ~ Calculate Speed
        useEffect(() => {
            if (input.length === 1 && !startTime) {
                setStartTime(Date.now());
            }

            let count = 0;
            for (let i = 0; i < input.length; i++) {
            if (input[i] !== textToType[i]) {
                count++;
            }
            }
            setFalseCount(count);

            if (input === textToType) {
                const endTime = Date.now();
                const timeTaken = (endTime - (startTime || endTime)) / 1000 / 60;
                const wordCount = textToType.trim().split(" ").length;
                setWpm(Math.round(wordCount / timeTaken));
            }
        }, [input, textToType]);

    // ~ Calculate Speed
    // ~ getColoredText
        const getColoredText = () => {
            return textToType.split("").map((char, i) => {
                let className = "";
                if (i < input.length) {
                className = char === input[i] ? "text-green-500" : "text-red-500";
                }
                return (
                <span key={i} className={`${className}`}>
                    {char}
                </span>
        );
            });
        };
    // ~ getColoredText
    // ~ handleChangeText
        const handleChangeText = () => {
            const nextIndex = (currentTextIndex + 1) % texts.length;
            setCurrentTextIndex(nextIndex);
            setInput("");
            setStartTime(null);
            setWpm(0);
            setFalseCount(0);
        };
    // ~ handleChangeText
// * ############################ End logic
return (
    <div className="global-component bg-stone-900/80 min-h-screen !border !border-teal-800 flex flex-col items-center justify-center text-teal-800 p-4">
        <h1 className="text-3xl md:text-5xl font-bold font-hindMysuru text-sky-400 mb-6 animate-pulse">
            Speed Typing App
        </h1>

        <div className="flex items-center gap-3 mb-4">
            <p className="text-xl text-indigo-600 md:text-2xl text-center font-mono">
                {getColoredText()}
            </p>
            <button onClick={handleChangeText} className="text-sky-500 hover:text-pink-400 transition-all duration-200 text-2xl" title="Change sentence" >
                <FaSync className="animate-spin-once hover:scale-110 duration-200" />
            </button>
        </div>

        <textarea className="w-full max-w-xl h-40 p-3 rounded-lg bg-stone-900 text-teal-400 focus:outline-none font-mono text-lg resize-none" value={input} onChange={(e) => setInput(e.target.value)} placeholder="Start typing here..." />

        <div className="mt-4 text-center space-y-4">
            {input === textToType && (
                <>
                    <p className="text-green-400 text-2xl font-bold">
                        Your speed: <span className="text-white">{wpm} WPM</span>
                    </p>
                    <button onClick={handleChangeText} className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white px-6 py-2 rounded-xl shadow-md hover:scale-105 transition-all duration-300" >
                        Try Another Sentence
                    </button>
                </>
            )}
            {falseCount > 0 && (
                <p className="text-red-400 text-lg font-medium">
                    Mistakes: {falseCount}
                </p>
            )}
        </div>

    </div>
);
};

export default SpeedTyping;
