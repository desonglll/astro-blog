import {useState} from 'preact/hooks';

export default function Greeting({messages}: { messages: string[] }) {

    const randomMessage = () => messages[(Math.floor(Math.random() * messages.length))];

    const [greeting, setGreeting] = useState(messages[0]);

    return (
        <div>
            <h3>{greeting}! Thank you for visiting!</h3>
            <button
                className={"cursor-pointer rounded px-1 py-1 bg-indigo-500 hover:bg-fuchsia-500 transition transform"}
                onClick={() => setGreeting(randomMessage())}>
                New Greeting
            </button>
        </div>
    );
}