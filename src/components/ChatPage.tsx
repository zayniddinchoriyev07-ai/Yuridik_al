import { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, Sparkles, AlertCircle } from 'lucide-react';

interface Message {
  id: number;
  type: 'user' | 'bot';
  text: string;
  timestamp: Date;
}

const welcomeMessage: Message = {
  id: 0,
  type: 'bot',
  text: "Assalomu alaykum! Men Yuridik Al O'zbekiston AI yordamchisiman. Sizga O'zbekiston qonunlari bo'yicha savollarga javob berishda yordam bera olaman. Qanday savolingiz bor?",
  timestamp: new Date(),
};

export default function ChatPage() {
  const [messages, setMessages] = useState<Message[]>([welcomeMessage]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = () => {
    if (!inputText.trim()) return;

    const userMessage: Message = {
      id: Date.now(),
      type: 'user',
      text: inputText.trim(),
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputText('');
    setIsTyping(true);

    // Simulate bot response
    setTimeout(() => {
      const botResponses = [
        "Bu savol bo'yicha sizga quyidagi ma'lumotlarni berishim mumkin: O'zbekiston Respublikasi Fuqarolik kodeksining tegishli moddalarida bu masala batafsil yoritilgan.",
        "Qonunimizga binoan, bu holatda quyidagi huquqiy meyorlar qo'llaniladi.",
        "Bu haqida batafsil ma'lumot olish uchun Premium obunaga a'zo bo'ling va malakali yurist bilan maslahatlashing.",
        "O'zbekiston qonunchiligiga ko'ra, bu masala quyidagicha tartibga solinadi.",
      ];

      const randomResponse = botResponses[Math.floor(Math.random() * botResponses.length)];

      const botMessage: Message = {
        id: Date.now() + 1,
        type: 'bot',
        text: randomResponse,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, botMessage]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex flex-col">
      {/* Header */}
      <div className="flex-shrink-0 bg-slate-900/90 backdrop-blur-lg border-b border-slate-700/50 px-4 py-4">
        <div className="max-w-md mx-auto flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center">
            <Bot className="w-5 h-5 text-white" />
          </div>
          <div>
            <h1 className="text-lg font-bold text-white">AI Yordamchi</h1>
            <div className="flex items-center gap-1.5">
              <div className="w-2 h-2 rounded-full bg-emerald-500" />
              <span className="text-xs text-slate-400">Faol</span>
            </div>
          </div>
        </div>
      </div>

      {/* Info Banner */}
      <div className="flex-shrink-0 px-4 py-3 bg-gradient-to-r from-amber-500/10 to-transparent border-b border-slate-700/30">
        <div className="max-w-md mx-auto flex items-start gap-2">
          <AlertCircle className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
          <p className="text-xs text-slate-400">
            AI yordamchi umumiy ma'lumot beradi. Aniq huquqiy maslahat uchun yuristga murojaat qiling.
          </p>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-4 py-4">
        <div className="max-w-md mx-auto space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex gap-3 ${message.type === 'user' ? 'flex-row-reverse' : ''}`}
            >
              <div
                className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center ${
                  message.type === 'user'
                    ? 'bg-slate-700'
                    : 'bg-gradient-to-br from-emerald-500 to-emerald-600'
                }`}
              >
                {message.type === 'user' ? (
                  <User className="w-4 h-4 text-white" />
                ) : (
                  <Bot className="w-4 h-4 text-white" />
                )}
              </div>

              <div
                className={`flex-1 max-w-[80%] rounded-2xl px-4 py-3 ${
                  message.type === 'user'
                    ? 'bg-amber-500 text-white'
                    : 'bg-slate-800 text-slate-200'
                }`}
              >
                <p className="text-sm leading-relaxed">{message.text}</p>
                <p className={`text-xs mt-1 ${
                  message.type === 'user' ? 'text-amber-100' : 'text-slate-500'
                }`}>
                  {message.timestamp.toLocaleTimeString('uz-UZ', { hour: '2-digit', minute: '2-digit' })}
                </p>
              </div>
            </div>
          ))}

          {isTyping && (
            <div className="flex gap-3">
              <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center">
                <Bot className="w-4 h-4 text-white" />
              </div>
              <div className="bg-slate-800 rounded-2xl px-4 py-3">
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 rounded-full bg-slate-500 animate-bounce" style={{ animationDelay: '0ms' }} />
                  <div className="w-2 h-2 rounded-full bg-slate-500 animate-bounce" style={{ animationDelay: '150ms' }} />
                  <div className="w-2 h-2 rounded-full bg-slate-500 animate-bounce" style={{ animationDelay: '300ms' }} />
                </div>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Input */}
      <div className="flex-shrink-0 bg-slate-900/90 backdrop-blur-lg border-t border-slate-700/50 px-4 py-4 safe-area-inset-bottom">
        <div className="max-w-md mx-auto">
          <div className="flex items-end gap-3">
            <div className="flex-1 relative">
              <textarea
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    handleSend();
                  }
                }}
                placeholder="Savolingizni yozing..."
                rows={1}
                className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 text-white placeholder-slate-400 focus:outline-none focus:border-amber-500/50 resize-none transition-colors"
              />
            </div>
            <button
              onClick={handleSend}
              disabled={!inputText.trim()}
              className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center transition-all ${
                inputText.trim()
                  ? 'bg-gradient-to-br from-amber-500 to-amber-600 shadow-lg shadow-amber-500/30 hover:shadow-amber-500/40'
                  : 'bg-slate-700 cursor-not-allowed'
              }`}
            >
              <Send className={`w-5 h-5 ${inputText.trim() ? 'text-white' : 'text-slate-500'}`} />
            </button>
          </div>

          <div className="flex items-center justify-center gap-2 mt-3">
            <Sparkles className="w-3 h-3 text-amber-500" />
            <span className="text-xs text-slate-500">AI tomonidan ishlab chiqarilgan</span>
          </div>
        </div>
      </div>
    </div>
  );
}
