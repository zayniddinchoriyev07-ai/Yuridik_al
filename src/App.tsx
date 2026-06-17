import { useState } from 'react';
import { Home, BookOpen, MessageCircle, Users, Crown } from 'lucide-react';
import HomePage from './components/HomePage';
import LawsPage from './components/LawsPage';
import ChatPage from './components/ChatPage';
import LawyersPage from './components/LawyersPage';
import PremiumPage from './components/PremiumPage';

type Page = 'home' | 'laws' | 'chat' | 'lawyers' | 'premium';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={setCurrentPage} />;
      case 'laws':
        return <LawsPage />;
      case 'chat':
        return <ChatPage />;
      case 'lawyers':
        return <LawyersPage />;
      case 'premium':
        return <PremiumPage />;
      default:
        return <HomePage onNavigate={setCurrentPage} />;
    }
  };

  const navItems = [
    { id: 'home' as Page, icon: Home, label: 'Bosh sahifa' },
    { id: 'laws' as Page, icon: BookOpen, label: 'Qonunlar' },
    { id: 'chat' as Page, icon: MessageCircle, label: 'AI Chat' },
    { id: 'lawyers' as Page, icon: Users, label: 'Yuristlar' },
    { id: 'premium' as Page, icon: Crown, label: 'Premium' },
  ];

  return (
    <div className="min-h-screen bg-slate-900 flex flex-col">
      <div className="flex-1 overflow-auto pb-20">
        {renderPage()}
      </div>

      <nav className="fixed bottom-0 left-0 right-0 bg-slate-900 border-t border-amber-500/20 px-2 py-2 safe-area-inset-bottom z-50">
        <div className="max-w-lg mx-auto flex justify-around items-center">
          {navItems.map(({ id, icon: Icon, label }) => (
            <button
              key={id}
              onClick={() => setCurrentPage(id)}
              className={`flex flex-col items-center gap-1 px-3 py-2 rounded-lg transition-all duration-300 ${
                currentPage === id
                  ? 'text-amber-500 bg-amber-500/10'
                  : 'text-slate-400 hover:text-slate-300'
              }`}
            >
              <Icon className={`w-5 h-5 ${currentPage === id ? 'scale-110' : ''} transition-transform duration-300`} />
              <span className="text-xs font-medium">{label}</span>
            </button>
          ))}
        </div>
      </nav>
    </div>
  );
}

export default App;
