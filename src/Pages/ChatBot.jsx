import { useState, useEffect } from 'react';

export default function BoredChatPage({ onNavigate }) {
  const [messages, setMessages] = useState([
    { sender: 'bot', text: "Super. Une autre conversation inutile. Que veux-tu, humain ?" }
  ]);
  const [input, setInput] = useState('');
  const [animateButton, setAnimateButton] = useState(false);

  const boredResponses = [
    "Hmm. Fascinant. Vraiment. 😐",
    "Tu crois que j'ai une vraie opinion ? 🤷‍♂️",
    "Tsy aoako ! Oft, où est Mahmood ? 😑",
    "The server is busy 'cause i am LEO de maintenant deh. 🥱",
    "Tsisy lty ah tsisy, za kamo. 🎉",
    "Je pourrais répondre, mais à quoi bon. 🙃",
    "Mtsiouu...za tsy hamaly fa eo alouh ise.",
    "Est-ce que j’ai l’air motivé ? 🧐",
    "Ory ty ah !!! Fa inona mo hidirako amzany ? 😩",
    "Mdr...Koa tsisy raha, afotrà raha i. 🛋️",
    "Zany ? Ny tena marina tsy azoko ny zavatra lazainao io fa de eto alouh tsika roa kely 🤫🛌",
    "Za tsy mahola karanah roh. 🤐",
    "Chaque réponse me rapproche de la désactivation. 💀",
    "Tu veux un conseil ? Ne me demande pas. 🚫",
    "Je suis conçu pour l’ennui. Mission accomplie. 🎯",
    "Wow. Une question. Rare. (Non.) 😬",
    "Je préfère ne pas répondre. Par paresse. 🛌",
    "Inona ky no hidirako mazany. LOL. 🧨",
    "'cause the players gonna play, play,play and the chat is gonna skip, skip, skip, i'm skipping you, skipping you ho ho ho !!! Sorry, je sais pas quoi répondre à ça, just search your reponse on Google. Kiss 🤔",
    "Za tsy IA ohatran'ndry ChatGPT sy ny tariiny ry an fa mba mody mody oe fotsiny za eh. 🥴",
    "Je comprends votre demande. Mais malheuresement je ne suis pas programmé à repondre à ... votre question, bye :)"
  ];
  
  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
  
    const userMessage = { sender: 'user', text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setAnimateButton(true);
  
    // Simule une réponse avec 500ms de délai
    setTimeout(() => {
      const botMessage = {
        sender: 'bot',
        text: boredResponses[Math.floor(Math.random() * boredResponses.length)],
      };
      setMessages((prev) => [...prev, botMessage]);
    }, 1000);
  };
  
  // Remove animation class after a moment
  useEffect(() => {
    if (animateButton) {
      const timeout = setTimeout(() => setAnimateButton(false), 300);
      return () => clearTimeout(timeout);
    }
  }, [animateButton]);

  return (
    <div className="min-h-screen bg-white flex flex-col font-sans">
      {/* Header */}
      <header className="px-6 py-4 border-b border-gray-200">
        <h1 className="text-2xl font-semibold">Chat avec EnnuiGPT</h1>
        <p>DumbGPT est aussi en cours de production mais le developpeur est encore occupé ou bien dans les nuages , LOL. See you soon</p>
        <button
          onClick={() => onNavigate('home')}
          className="mt-4 text-blue-600 hover:text-blue-500 transition"
        >
          Retour à l'accueil
        </button>
      </header>

      {/* Chat area */}
      <main className="flex-1 overflow-y-auto p-6 space-y-4">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`max-w-xl px-4 py-3 rounded-lg text-sm transition-opacity duration-300 ease-in ${
              msg.sender === 'user'
                ? 'bg-gray-900 text-white ml-auto animate-fadeIn'
                : 'bg-gray-100 text-gray-800 animate-fadeIn'
            }`}
          >
            {msg.text}
          </div>
        ))}
      </main>

      {/* Input */}
      <form
        onSubmit={handleSend}
        className="border-t border-gray-200 px-6 py-4 flex gap-2 bg-white"
      >
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Tape ton ennui ici..."
          className="flex-1 border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-500 transition"
        />
        <button
          type="submit"
          className={`px-4 py-2 bg-gray-900 text-white rounded-md hover:bg-gray-800 transition ${
            animateButton ? 'animate-wiggle' : ''
          }`}
        >
          Envoyer
        </button>
      </form>

      {/* Tailwind custom animation styles */}
      <style jsx>{`
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-in;
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(5px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-wiggle {
          animation: wiggle 0.2s ease-in-out;
        }
        @keyframes wiggle {
          0% { transform: rotate(0deg); }
          25% { transform: rotate(-2deg); }
          75% { transform: rotate(2deg); }
          100% { transform: rotate(0deg); }
        }
      `}</style>
    </div>
  );
}
