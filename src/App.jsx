import { useState , useEffect } from 'react';
import HomePage from './Pages/HomePage';
import BoredChatPage from './Pages/ChatBot';
import Loader from './assets/Loader';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home'); // Page actuelle

  const handlePageChange = (page) => {
    setCurrentPage(page); // Change de page
  };
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);

   // État pour savoir si le mode sombre est activé
   const [isDarkMode, setIsDarkMode] = useState(false);

   // Utilisation de useEffect pour appliquer la classe `dark` sur <html>
   useEffect(() => {
     // Appliquer ou retirer la classe 'dark' du <html> en fonction de l'état
     if (isDarkMode) {
       document.documentElement.classList.add('dark');
     } else {
       document.documentElement.classList.remove('dark');
     }
   }, [isDarkMode]);
 

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white transition-colors duration-300 relative">
      {currentPage === 'home' ? (
        <HomePage onNavigate={handlePageChange} />
      ) : (
        <BoredChatPage onNavigate={handlePageChange} />
      )}
      <div>
        {loading ? <Loader /> : HomePage}
      </div>
    </div>
  );
}
