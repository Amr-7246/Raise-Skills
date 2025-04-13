import React, { useState, useEffect } from 'react';
import { IoMdCloudyNight } from "react-icons/io";

const ThemeToggleButton = () => {
    const [isDarkMode, setIsDarkMode] = useState(() => {
        return localStorage.getItem("theme") === "dark";
    });

    useEffect(() => {
        if (isDarkMode) {
            document.body.classList.add('dark');
            document.body.classList.remove('light');
            localStorage.setItem("theme", "dark");
        } else {
            document.body.classList.add('light');
            document.body.classList.remove('dark');
            localStorage.setItem("theme", "light");
        }
    }, [isDarkMode]);

    const toggleTheme = () => {
        setIsDarkMode(prevMode => !prevMode);
    };

    return (
        <button className="btn cursor-pointer" onClick={toggleTheme}>
            <IoMdCloudyNight />
        </button>
    );
};

export default ThemeToggleButton;
