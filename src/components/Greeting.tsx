import {useEffect, useState} from 'preact/hooks';

export default function Greeting({messages}: { messages: string[] }) {
    const [greeting, setGreeting] = useState(messages[0]);
    const [fade, setFade] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setFade(false);

            setTimeout(() => {
                const next = messages[Math.floor(Math.random() * messages.length)];
                setGreeting(next);
                setFade(true);
            }, 600);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div class="flex flex-col items-center justify-center h-[100px] text-center">
            <h3
                class={`text-3xl md:text-4xl font-rubik font-bold drop-shadow-lg
                transition-all duration-700 ease-in-out mt-0 mb-0
                ${fade
                    ? 'opacity-100 scale-100'
                    : 'opacity-0 scale-95 text-gray-300'}
                `}
            >
                {greeting}!
            </h3>
        </div>
    );
}
