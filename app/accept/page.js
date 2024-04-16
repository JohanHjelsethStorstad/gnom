'use client'
import React, { useRef, useState } from 'react';
import Confetti from 'react-confetti';

function page() {
    const [shouldSwitch, setShouldSwitch] = useState(false);

    const switchIt = () => {
        setShouldSwitch(x => !x);
    }
    const defaulter = () => {
        setShouldSwitch(false);
    }
    const [showConfetti, setShowConfetti] = useState(false);
    const [comfettiFade, setConfettiFade] = useState(false);
    const fadeTRef = useRef(null);
    const confettiTRef = useRef(null);

    const handleAcceptClick = () => {
        clearTimeout(fadeTRef.current);
        clearTimeout(confettiTRef.current);
        setShowConfetti(true);
        setConfettiFade(false);
        fadeTRef.current = setTimeout(() => setConfettiFade(true), 3000);
        confettiTRef.current = setTimeout(() => setShowConfetti(false), 5000);
    };

    return (
        <main className="flex items-center justify-center h-screen bg-gray-100">
            {
                shouldSwitch && (
                    <button className="px-4 py-2 mr-2 font-bold text-white bg-red-500 rounded hover:bg-red-700" onMouseEnter={switchIt} onMouseLeave={defaulter}>
                        Avslå
                    </button>
                )
            }
            <div className={`transition-opacity duration-1000 ${comfettiFade ? 'opacity-0' : 'opacity-100'}`}>
                {showConfetti && <Confetti />}
            </div>
            <button onClick={handleAcceptClick} className="px-4 py-2 mr-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700">
                Aksepter
            </button>
            {
                !shouldSwitch && (
                    <button className="px-4 py-2 mr-2 font-bold text-white bg-red-500 rounded hover:bg-red-700" onMouseEnter={switchIt} onMouseLeave={defaulter}>
                        Avslå
                    </button>
                )
            }
        </main>
    );
}

export default page;