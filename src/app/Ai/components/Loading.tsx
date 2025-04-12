"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const ImageLoading = () => {
    const textRef = useRef<HTMLParagraphElement>(null);
    const columnsRef = useRef<HTMLDivElement[]>([]);

    useEffect(() => {
        gsap.to(textRef.current, {
            opacity: 0.3,
            repeat: -1,
            yoyo: true,
            duration: 0.8,
            ease: "power1.inOut",
        });

        columnsRef.current.forEach((col, index) => {
            if (col) {
                gsap.to(col, {
                    height: "30px",
                    repeat: -1,
                    yoyo: true,
                    duration: 0.8,
                    ease: "sine.inOut",
                    delay: index * 0.1,
                });
            }
        });
    }, []);

    return (
        <div className="flex flex-col items-center justify-center min-h-[300px] w-full">
            <div className="flex space-x-2">
                {Array.from({ length: 5 }).map((_, i) => (
                    <div
                        key={i}
                        ref={(el) => {
                            if (el) columnsRef.current[i] = el;
                        }}
                        className="w-2 h-5 bg-indigo-700 rounded-lg"
                    ></div>
                ))}
            </div>
            <p ref={textRef} className="mt-4 text-[15px] font-bold text-lg font-orbitron tracking-wider text-stone-900">
                Generating . . .
            </p>
        </div>
    );
};

export default ImageLoading;
